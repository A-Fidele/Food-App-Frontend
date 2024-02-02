import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Recipe from "../components/Recipe";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "../components/reusable/MenuIcon";
import MenuModal from "../components/reusable/MenuModal";
import { useState } from "react";

export default function MyRecipesScreen() {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const favorites = useSelector((state) => state.favorites.value);

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>The best ones...</Text>
      </View>
      <ScrollView>
        <View style={styles.favoritesContainer}>
          {favorites.map((recipe) => {
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
  },
  titleContainer: {
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  favoritesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
