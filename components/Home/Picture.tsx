import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Picture() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/images/home.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "110%",
    marginTop: -70,
    borderBottomLeftRadius: 200,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: 50,
  },
});
