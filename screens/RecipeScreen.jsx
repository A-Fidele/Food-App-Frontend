import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { addFavoriteRecipe, updateServingNb } from "../reducers/favorites";
import RecipeData from "../components/RecipeData";
import IngredientsHeader from "../components/reusable/IngredientsHeader";
import Ingredients from "../components/Ingredients";

export default function RecipeScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, quantity } = route.params;

  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [desc, setDesc] = useState();
  const [longDesc, setLongDesc] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [level, setLevel] = useState();
  const [time, setTime] = useState();
  const [rating, setRating] = useState();
  const [color, setColor] = useState();
  const [servingNb, setServingNb] = useState();

  const dispatch = useDispatch();

  const recipesData = recipes;
  const myRecipe = recipesData.filter((recipe) => recipe.id === id);

  useEffect(() => {
    myRecipe.map((data) => {
      setName(data.name);
      setImage(data.image);
      setDesc(data.desc);
      setLongDesc(data.longDesc);
      setIngredients(data.ingredients);
      setLevel(data.level);
      setTime(data.time);
      setRating(data.rating);
      setColor(data.color);
      setServingNb(quantity ? quantity : 1);
    });
  }, []);

  const handleIncrease = () => {
    const updatedServingNb = servingNb + 1;
    setServingNb(updatedServingNb);

    const dataServing = { id, servingNb: updatedServingNb };
    dispatch(updateServingNb(dataServing));
  };

  const handleDecrease = async () => {
    const updatedServingNb = servingNb > 1 && servingNb - 1;
    setServingNb(updatedServingNb);
    const dataServing = { id, servingNb: updatedServingNb };
    dispatch(updateServingNb(dataServing));
  };

  const handleBookmark = () => {
    const data = {
      id,
      servingNb,
      name,
      image,
      longDesc,
      desc,
      ingredients,
      level,
      time,
      rating,
      color,
    };
    dispatch(addFavoriteRecipe(data));
  };

  const handleNavigation = () => {
    navigation.navigate("Search");
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <TouchableOpacity onPress={handleNavigation}>
          <FontAwesome name="arrow-left" size={25} style={styles.arrowIcon} />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>

        <TouchableOpacity style={styles.icon} onPress={() => handleBookmark()}>
          <FontAwesome name="bookmark" size={25} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.recipeDataContainer}>
        <RecipeData color={color} time={time} level={level} rating={rating} />
        <IngredientsHeader
          servingNb={servingNb}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
        <Ingredients ingredients={ingredients} servingNb={servingNb} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  arrowIcon: {
    marginLeft: 15,
    marginTop: 60,
    position: "absolute",
  },
  headerContainer: {
    width: "100%",
    height: "40%",
    borderBottomLeftRadius: 150,
  },
  imageContainer: {
    flex: 1,
    transform: [{ scale: 0.6 }],
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#1b2a41",
    borderRadius: 250,
    width: 70,
    height: 70,
    top: "90%",
    left: "80%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  recipeDataContainer: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 150,
    padding: 30,
  },
  titleContainer: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
  subTitle: {
    color: "grey",
  },
});
