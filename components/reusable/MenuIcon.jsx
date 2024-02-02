import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function MenuIcon({ handleShowModal }) {
  return (
    <TouchableOpacity onPress={handleShowModal}>
      <FontAwesome name="bars" size={25} style={styles.barsIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  barsIcon: {
    marginLeft: 15,
    marginBottom: 30,
  },
});
