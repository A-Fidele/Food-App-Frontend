import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

type FooterProps = {
  handleClick: () => void,
  title: string,
  actionLabel: string,
}

export default function Footer({ handleClick, title, actionLabel }: FooterProps) {
  return (
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.letsgo}>
          {actionLabel}{" "}
          <FontAwesome name="arrow-right" size={18} color="#ffffff" />{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#655074",
  },
  text: {
    marginLeft: "auto",
    marginBottom: 50,
  },
  title: {
    fontSize: 80,
    color: "white",
    fontWeight: "semibold",
    marginRight: 20,

  },
  letsgo: {
    fontSize: 28,
    color: "white",
    fontWeight: "semibold",
    marginLeft: "auto",
    marginRight: 20,
  },
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
