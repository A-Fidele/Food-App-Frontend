import { StyleSheet, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFavoriteRecipe, updateServingNb } from "../reducers/favorites";
import RecipeData from "../components/RecipeData";
import IngredientsHeader from "../components/reusable/IngredientsHeader";
import Ingredients from "../components/Ingredients";
import BookmarkButton from "../components/Recipe/BookmarkButton";
import RecipePicture from "../components/Recipe/RecipePicture";
import GoBackNavigation from "../components/Recipe/GoBackNavigation";

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
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <GoBackNavigation handleNavigation={handleNavigation} />
        <RecipePicture image={image} />
        <BookmarkButton handleBookmark={handleBookmark} />
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
  headerContainer: {
    width: "100%",
    height: "40%",
    borderBottomLeftRadius: 150,
  },
  recipeDataContainer: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 150,
    padding: 30,
  },
});
