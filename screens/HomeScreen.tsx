import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Picture from "../components/Home/Picture";
import Footer from "../components/Home/Footer";
import { HomeScreenNavigationProp } from "../typeScript/constants";

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
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
