import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function RecipePicture({ image }) {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={image}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    transform: [{ scale: 0.6 }],
    justifyContent: "center",
    alignItems: "center",
  },
});
