import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, View } from "react-native";
import Recipe from "../Recipe";
import { FavoriteRecipe } from "../../reducers/favorites";

type FavoritesListProps = {
  favorites: FavoriteRecipe[],
  handlePressRecipe: (id: number, servingNb: number) => void,
}
export default function FavoritesList({ favorites, handlePressRecipe }: FavoritesListProps) {
  return (
    <ScrollView>
      <View style={styles.favoritesContainer}>
        {favorites.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
              description={recipe.desc}
              color={recipe.color}
              handlePress={() => handlePressRecipe(recipe.id, recipe.servingNb)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  favoritesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
