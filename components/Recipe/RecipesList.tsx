import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Recipe from "../Recipe";
import { FavoriteRecipe } from "../../reducers/favorites";

type RecipesListProps = {
  recipesData: FavoriteRecipe[],
  handlePressRecipe: (id: number, recipe: number) => void,
}

export default function RecipesList({ recipesData, handlePressRecipe }: RecipesListProps) {

  const uploadRecipe = async (recipe: any) => {
    fetch('http://localhost:3000/recipes/insert', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: recipe.name,
        image: recipe.image,
        desc: recipe.desc,
        color: recipe.color,
        level: recipe.level,
        longDesc: recipe.longDesc,
        rating: recipe.rating,
        serving: recipe.serving,
        servingNb: recipe.servingNb,
        time: recipe.time,
        ingredients: recipe.ingredients,
      })
    }).then((response) => response.json()
      .then((data) => {
        console.log("result:", data.result)
        if (data.result === false) {
          console.log("error", data.error);
        } else {
          console.log("DATA:", data.recipe);
        }
      })
    )

  }
  return (
    <ScrollView>
      <View style={styles.recipeContainer}>
        {recipesData && recipesData.map((recipe) => {
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
  recipeContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
