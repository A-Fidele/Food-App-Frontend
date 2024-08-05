import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import MenuIcon from "../components/reusable/MenuIcon";
import MenuModal from "../components/reusable/MenuModal";
import { useState } from "react";
import Title from "../components/Recipe/Title";
import FavoritesList from "../components/Recipe/FavoritesList";

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
      <Title />
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
