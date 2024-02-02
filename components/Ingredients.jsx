import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Ingredients({ ingredients, servingNb }) {
  return (
    <ScrollView>
      {ingredients.map((ingts) => {
        return (
          <View style={styles.recipeList}>
            <View>
              <Text style={{ marginBottom: 40 }}>{ingts.name}</Text>
            </View>
            <View>
              <Text style={{ marginBottom: 40 }}>
                {ingts.amount * servingNb} {ingts.unit}
              </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  recipeList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
