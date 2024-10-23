import { StyleSheet, View } from "react-native";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import MenuIcon from "../components/reusable/MenuIcon";
import MenuModal from "../components/reusable/MenuModal";
import RecipesList from "../components/Recipe/RecipesList";
import { HomeScreenNavigationProp } from "../typeScript/constants";
import { useSelector } from "react-redux";
import { UserState } from "../reducers/user";
import { FavoriteRecipe } from "../reducers/favorites";

export default function SearchScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const user = useSelector((state: { user: UserState }) => state.user.value)
  const [isVisible, setIsVisible] = useState(false);
  const [recipesData, setRecipesData] = useState<FavoriteRecipe[]>([])

  const handlePressRecipe = (id: number, quantity: number) => {
    navigation.navigate("Recipe", { id, quantity });
  };

  const handleShowModal = () => {
    setIsVisible(!isVisible);
  };

  const handleNavigateSearch = () => {
    setIsVisible(false);
    navigation.navigate("Search");
  };

  const handleNavigateFavorites = () => {
    setIsVisible(false);
    navigation.navigate("Favorites");
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:3000/recipes', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const recipesData = await response.json();
        recipesData && setRecipesData(recipesData.recipes);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
    fetchRecipes()

  }, [])

  return (
    <View style={styles.container}>
      <MenuIcon handleShowModal={handleShowModal} />
      <MenuModal
        isVisible={isVisible}
        handleShowModal={handleShowModal}
        handleNavigateSearch={handleNavigateSearch}
        handleNavigateFavorites={handleNavigateFavorites}
      />
      <Header pseudo={user.pseudo} />
      <RecipesList
        recipesData={recipesData}
        handlePressRecipe={handlePressRecipe}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
  },
});
