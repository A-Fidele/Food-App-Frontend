import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function GoBackNavigation({ handleNavigation }) {
  return (
    <TouchableOpacity onPress={handleNavigation}>
      <FontAwesome name="arrow-left" size={25} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  arrowIcon: {
    marginLeft: 15,
    marginTop: 60,
    position: "absolute",
  },
});
