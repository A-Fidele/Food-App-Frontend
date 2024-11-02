import React from "react";
import { Image, ImageURISource, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

type RecipeProps = {
  image: ImageURISource | undefined,
  name: string,
  description: string,
  color: string,
  handlePress: () => void,
}

export default function Recipe({
  image,
  name,
  description,
  color,
  handlePress,
}: RecipeProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ ...styles.recipe, backgroundColor: color }}
      onPress={handlePress}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.descContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  recipe: {
    width: "45%",
    height: 250,
    marginBottom: 10,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 20,
  },
  image: {
    flex: 1,
    left: "5%",
    width: "90%",
    resizeMode: "contain",
  },
  descContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
    marginBottom: 50,
    paddingLeft: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
    color: "black",
  },
  desc: {
    fontSize: 14,
    textAlign: "right",
    color: "grey",
  },
});
