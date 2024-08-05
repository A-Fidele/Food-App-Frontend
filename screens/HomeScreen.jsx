import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Picture from "../components/Home/Picture";
import Footer from "../components/Home/Footer";

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Search");
  };
  return (
    <View style={styles.container}>
      <Picture />
      <Footer
        handleClick={handleClick}
        title="FoodApp"
        actionLabel="Let's Go!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#655074",
  },
});
