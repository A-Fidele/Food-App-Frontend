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

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={handleDecrease} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>{servingNb}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={handleIncrease} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "40%",
    borderRadius: 100,
    justifyContent: "flex-end",
    backgroundColor: "#e5e5e5",
  },
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
    width: 50,
    height: 45,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
