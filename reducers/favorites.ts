import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageRequireSource } from "react-native";

export type IngredientType = {
  name: string, amount: number, unit: string,
}

export type FavoriteRecipe = {
  [x: string]: any;
  id: string;
  name: string;
  desc: string;
  image: ImageRequireSource;
  color: string;
  serving: string;
  servingNb: number;
  longDesc: string;
  level: string | undefined;
  time: string;
  rating: number;
  ingredients: IngredientType[];
};

export type FavoritesState = {
  value: FavoriteRecipe[];
};

const initialState: FavoritesState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteRecipe: (state, action: PayloadAction<FavoriteRecipe>) => {
      const existingIndex = state.value.findIndex(
        (recipe) => recipe.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.value = [
          ...state.value.slice(0, existingIndex),
          ...state.value.slice(existingIndex + 1),
        ];
        return;
      }
      state.value.push(action.payload);
    },
    // updateServingNb: (state, action) => {
    //   const existingIndex = state.value.findIndex(
    //     (recipe) => recipe.id === action.payload.id
    //   );

    //   if (existingIndex !== -1) {
    //     state.value[existingIndex].servingNb = action.payload.servingNb;
    //     return;
    //   }
    // },
  },
});

export const { addFavoriteRecipe } = favoritesSlice.actions;
export default favoritesSlice.reducer;
