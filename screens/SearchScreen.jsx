import { ScrollView, StyleSheet, View } from "react-native";
import Recipe from "../components/Recipe";
import { recipes } from "../data/recipes";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import MenuIcon from "../components/reusable/MenuIcon";
import MenuModal from "../components/reusable/MenuModal";

export default function SearchScreen() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const recipesData = recipes;

  const handlePressRecipe = (id, quantity) => {
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
  return (
    <View style={styles.container}>
      <MenuIcon handleShowModal={handleShowModal} />
      <MenuModal
        isVisible={isVisible}
        handleShowModal={handleShowModal}
        handleNavigateSearch={handleNavigateSearch}
        handleNavigateFavorites={handleNavigateFavorites}
      />
      <Header />
      <ScrollView>
        <View style={styles.recipeContainer}>
          {recipesData.map((recipe) => {
            return (
              <Recipe
                key={recipe.id}
                id={recipe.id}
                image={recipe.image}
                name={recipe.name}
                description={recipe.desc}
                color={recipe.color}
                servingNb={recipe.servingNb}
                handlePress={() =>
                  handlePressRecipe(recipe.id, recipe.servingNb)
                }
              />
            );
          })}
        </View>
      </ScrollView>
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
  recipeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
