import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type BookmarkButtonProps = {
  handleBookmark: () => void,
}

export default function BookmarkButton({ handleBookmark }: BookmarkButtonProps) {
  return (
    <View style={styles.bookmarkIconContainer}>
      <TouchableOpacity style={styles.icon} onPress={() => handleBookmark()}>
        <FontAwesome name="bookmark" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bookmarkIconContainer: {
    position: "absolute",
    top: "90%",
    left: "80%",
    zIndex: 1,
  },
  icon: {
    backgroundColor: "#1b2a41",
    borderRadius: 250,
    width: 70,
    height: 70,
    top: "90%",
    left: "80%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
