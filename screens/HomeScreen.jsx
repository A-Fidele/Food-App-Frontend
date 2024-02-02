import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Search");
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/home.jpg")}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>FoodApp</Text>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.letsgo}>
            Let's go!{" "}
            <FontAwesome name="arrow-right" size={18} color="#ffffff" />{" "}
          </Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: "bold",
    marginRight: 20,
  },
  letsgo: {
    fontSize: 28,
    color: "white",
    fontWeight: "bold",
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
