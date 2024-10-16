import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View } from "react-native";

export default function Picture() {
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const slideInAnim = useRef(new Animated.Value(-50)).current;

  useEffect(() => {
    //fadeIn animation
    const fadeInAnimation = Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });
    //slideIn animation
    const slideInAnimation = Animated.timing(slideInAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    });
    //both animations in parallel
    Animated.parallel([fadeInAnimation, slideInAnimation]).start();
  }, [fadeInAnim, slideInAnim]);

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
