import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, View } from "react-native";
import Recipe from "../Recipe";

export default function FavoritesList({ favorites, handlePressRecipe }) {
  return (
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
