import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "../components/reusable/MenuIcon";
import MenuModal from "../components/reusable/MenuModal";
import { useEffect, useState } from "react";
import Title from "../components/Recipe/Title";
import FavoritesList from "../components/Recipe/FavoritesList";
import { HomeScreenNavigationProp } from "../typeScript/constants";
import { FavoriteRecipe } from "../reducers/favorites";
import NoRecipesFound from "../components/Recipe/NoRecipesFound";
import { UserState } from "../reducers/user";

export default function MyRecipesScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [isVisible, setIsVisible] = useState(false);
  const [favorites, setFavorites] = useState<FavoriteRecipe[]>([])
  const user = useSelector((state: { user: UserState }) => state.user.value)

  const handlePressRecipe = (id: string, quantity: number) => {
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
    const fetchFavoriteRecipes = () => {
      fetch('http://localhost:3000/users/favorites', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email
        })
      }).then((response) => response.json()
        .then((data) => {
          console.log("result:", data.result)
          if (data.result === false) {
            console.log("error", data.error);
            setFavorites([])
          } else {
            setFavorites(data.favorites)
          }
        })
      )
    }
    fetchFavoriteRecipes()
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
      {favorites.length > 0 ? <Title /> : <NoRecipesFound />}
      <FavoritesList
        favorites={favorites}
        handlePressRecipe={handlePressRecipe}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
