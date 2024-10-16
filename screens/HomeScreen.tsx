import { StyleSheet, View, Animated, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Picture from "../components/Home/Picture";
import Footer from "../components/Home/Footer";
import { HomeScreenNavigationProp } from "../typeScript/constants";
import { useEffect, useRef, useState } from "react";
import SigninTitle from "../components/Home/Signin/SigninTitle";
import Inputs from "../components/Home/Signin/Inputs";
import ErrorMessage from "../components/Home/Signin/ErrorMessage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SubmitButton from "../components/Home/Signin/SubmitButton";


export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const slideInAnim = useRef(new Animated.Value(-50)).current;
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [error, setError] = useState('')

  const handleClick = () => {
    navigation.navigate("Search");
  };

  const handleSubmit = async () => {

    const response = await fetch('http://localhost:3000/users/signin', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })

    const user = await response.json()

    if (user.result === false) {
      setError(user.error)
      console.log("error", error)
    } else {
      setError("Connecté ;-)")
      setToken(user.user.token)
    }

  }

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
      {token ?
        <Picture />
        :
        <View style={styles.login}>
          <Animated.View style={{
            opacity: fadeInAnim,
            transform: [{ translateY: slideInAnim }],
            ...styles.titleContainer
          }}>
            <SigninTitle />
          </Animated.View>

          <Animated.View style={{
            opacity: fadeInAnim,
            width: "100%", flexDirection: "row", marginLeft: "50%"
          }}>
            <Inputs
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </Animated.View>
          <ErrorMessage error={error} />
          <SubmitButton handleSubmit={handleSubmit} />
        </View>
      }
      <Footer
        handleClick={handleClick}
        title="FoodApp"
        actionLabel={token ? "Let's Go!"
          : <Text >
            <FontAwesome name="user" size={28} />{"  "}Create Account</Text>}
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
  login: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
