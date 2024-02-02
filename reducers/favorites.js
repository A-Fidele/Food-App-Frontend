import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteRecipe: (state, action) => {
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
    updateServingNb: (state, action) => {
      const existingIndex = state.value.findIndex(
        (recipe) => recipe.id === action.payload.id
      );

      if (existingIndex !== -1) {
        state.value[existingIndex].servingNb = action.payload.servingNb;
        return;
      }
    },
  },
});

export const { addFavoriteRecipe, updateServingNb } = favoritesSlice.actions;
export default favoritesSlice.reducer;
