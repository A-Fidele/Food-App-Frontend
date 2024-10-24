import { ImageRequireSource, StyleSheet, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteRecipe, FavoriteRecipe, FavoritesState, IngredientType, updateServingNb } from "../reducers/favorites";
import RecipeData from "../components/RecipeData";
import IngredientsHeader from "../components/reusable/IngredientsHeader";
import Ingredients from "../components/Ingredients";
import BookmarkButton from "../components/Recipe/BookmarkButton";
import RecipePicture from "../components/Recipe/RecipePicture";
import GoBackNavigation from "../components/Recipe/GoBackNavigation";
import RecipeTitle from "../components/Recipe/RecipeTitle";
import { UserState } from "../reducers/user";

export type RootStackParamList = {
  Recipe: { id: string; quantity?: number };
};

type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;

export default function RecipeScreen() {
  const route = useRoute<RecipeScreenRouteProp>();
  const navigation = useNavigation();
  const { id, quantity } = route.params;

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<ImageRequireSource>();
  const [desc, setDesc] = useState<string>("");
  const [longDesc, setLongDesc] = useState<string>("");
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [level, setLevel] = useState<string | undefined>("");
  const [time, setTime] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [servingNb, setServingNb] = useState<number>(1);
  const [serving, setServing] = useState<string>("");
  const [isBookmark, setIsBookmark] = useState<boolean>(false)
  const [recipesData, setRecipesData] = useState<FavoriteRecipe>()

  const dispatch = useDispatch();
  const user = useSelector((state: { user: UserState }) => state.user.value)
  const favorites = useSelector((state: { favorites: FavoritesState }) => state.favorites.value)

  useEffect(() => {
    const findRecipeById = async (id: string) => {
      fetch('http://localhost:3000/recipes/recipeById', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        })
      }).then((response) => response.json()
        .then((recipe) => {
          console.log("result:", recipe.recipe._id)
          if (recipe.result === false) {
            console.log("error", recipe.error);
          } else {
            setRecipesData(recipe.recipe)
            const isBookmarked = user.favorites.includes(recipe.recipe._id)
            setIsBookmark(isBookmarked)
          }
        })
      )
    }
    findRecipeById(id)
  }, [id])

  useEffect(() => {
    if (recipesData) {
      setName(recipesData.name);
      setImage(recipesData.image);
      setDesc(recipesData.desc);
      setLongDesc(recipesData.longDesc);
      setIngredients(recipesData.ingredients);
      setLevel(recipesData.level);
      setTime(recipesData.time);
      setRating(recipesData.rating);
      setColor(recipesData.color);
      setServing(recipesData.serving)
      setIsBookmark(false)
      setServingNb(quantity ? quantity : 1);
    }
  }, [recipesData]);

  const handleIncrease = () => {
    const updatedServingNb = servingNb + 1;
    setServingNb(updatedServingNb);

    const dataServing = { id, servingNb: updatedServingNb };
    dispatch(updateServingNb(dataServing));
  };

  const handleDecrease = async () => {
    const updatedServingNb = servingNb > 1 && servingNb - 1;
    updatedServingNb && setServingNb(updatedServingNb);
    const dataServing = { id, servingNb: updatedServingNb };
    dispatch(updateServingNb(dataServing));
  };

  const handleBookmark = () => {
    if (image) {
      setIsBookmark(!isBookmark)
      const data: FavoriteRecipe = {
        id,
        serving,
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
    }
  };

  const handleNavigation = () => {
    navigation.goBack();
  };

  console.log("recipesData:", recipesData?.name);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.headerContainer, backgroundColor: color }}>
        <GoBackNavigation handleNavigation={handleNavigation} />
        <RecipePicture image={image ? { uri: image } : require("../assets/favicon.png")} />
        <BookmarkButton
          handleBookmark={handleBookmark}
          isBookmark={isBookmark}
        />
      </View>
      <View style={styles.recipeDataContainer}>
        <RecipeData
          color={color}
          time={time}
          level={level}
          rating={rating}
        />
        <RecipeTitle
          name={name}
          longDesc={longDesc}
        />
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
    zIndex: 2,
  },
  recipeDataContainer: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 150,
    padding: 30,
  },
});
