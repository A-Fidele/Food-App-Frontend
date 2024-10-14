import { StyleSheet, Text, TextInput, TouchableOpacity, View, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Picture from "../components/Home/Picture";
import Footer from "../components/Home/Footer";
import { HomeScreenNavigationProp } from "../typeScript/constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useEffect, useRef } from "react";


export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const slideInAnim = useRef(new Animated.Value(-50)).current;

  const handleClick = () => {
    navigation.navigate("Search");
  };

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
    <View style={styles.container}>
      {/* <Picture /> */}

      <View style={styles.login}>

        <Animated.View style={{
          opacity: fadeInAnim,
          transform: [{ translateY: slideInAnim }],
          ...styles.titleContainer
        }}>
          <Text style={styles.title}>{`Login :-)`}</Text>
        </Animated.View>

        <Animated.View style={{
          opacity: fadeInAnim,
          width: "100%", flexDirection: "row", marginLeft: "50%"
        }}>
          <Text style={styles.label}><FontAwesome name="user" size={28} /></Text>
          <TextInput style={{ ...styles.input, marginLeft: "6%" }}
            placeholder="email"
            placeholderTextColor={"#a7a7a7"}
            secureTextEntry={false}
          />
        </Animated.View>
        <Animated.View style={{
          opacity: fadeInAnim,
          width: "100%", marginLeft: '50%', flexDirection: "row", marginTop: "10%"
        }}>
          <Text style={styles.label}><FontAwesome name="key" size={28} /></Text>
          <TextInput style={styles.input}
            placeholder="password"
            placeholderTextColor={"#a7a7a7"}
            secureTextEntry={true}
          />
        </Animated.View>
        <View style={styles.submitContainer}>
          <TouchableOpacity>
            <Text style={styles.submitButton}>Validate</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer
        handleClick={handleClick}
        title="FoodApp"
        //actionLabel="Let's Go!"
        actionLabel="Create Account"

      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#655074",
  },
  titleContainer: {
    marginBottom: "20%",
  },
  title: {
    color: "white",
    fontSize: 48,
    fontWeight: "semibold",
  },
  login: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "white",
    fontSize: 20,
  },
  input: {
    width: "30%",
    borderColor: "#655074",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    borderWidth: 1,
    color: "white",
    marginLeft: "4%",
    fontSize: 18,
  },
  submitContainer: {
    marginTop: "20%",
  },
  submitButton: {
    color: "white",
    fontSize: 20,
    marginRight: "10%",
  }
});
