import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type RecipeDataProps = {
  color: string,
  time: string,
  level: string | undefined,
  rating: number,
}

export default function RecipeData({ color, time, level, rating }: RecipeDataProps) {
  return (
    <View style={styles.levelContainer}>
      <View style={styles.level}>
        <View style={{ left: "15%" }}>
          <FontAwesome name="pencil" size={20} color={color} />
        </View>
        <Text style={styles.levelText}>{level}</Text>
      </View>
      <View style={styles.level}>
        <View style={{ left: "15%" }}>
          <FontAwesome name="hourglass" size={20} color={color} />
        </View>
        <Text style={styles.levelText}>{time}</Text>
      </View>
      <View style={styles.level}>
        <View style={{ left: "30%" }}>
          <FontAwesome name="star" size={20} color={color} />
        </View>
        <Text style={styles.levelText}>{rating}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  levelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 30,
  },
  level: {
    alignItems: "center",
    marginLeft: 15,
  },
  levelText: {
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 5,
    fontSize: 18,
  },
});
