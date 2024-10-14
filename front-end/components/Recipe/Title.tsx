import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>The best ones <FontAwesome name="thumbs-up" size={28} />...</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
  },
  title: {
    fontSize: 28,
  },
});
