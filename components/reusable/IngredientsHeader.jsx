import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IngredientsHeader({
  handleDecrease,
  handleIncrease,
  servingNb,
}) {
  return (
    <View style={styles.ingredientsHeader}>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Ingredients</Text>
        <Text style={{ fontWeight: "bold", color: "grey" }}>
          How many servings?
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.buttonText}>{servingNb}</Text>
        <TouchableOpacity onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
    justifyContent: "space-around",
    alignItems: "center",
    width: 120,
    height: 50,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
