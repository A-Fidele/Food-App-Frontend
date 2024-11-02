import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  pseudo: string,
}

export default function Header({ pseudo }: HeaderProps) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{pseudo && `${pseudo}! `}What do you want to eat today?</Text>
      <Text style={styles.subTitle}>Our daily healthy meal plans</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 15,
    paddingRight: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    color: "black",
  },
  subTitle: {
    fontSize: 18,
    color: "grey",
  },
});
