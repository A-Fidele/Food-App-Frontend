import "react-native-gesture-handler"; // https://reactnavigation.org/docs/drawer-navigator#installation

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import SearchScreen from "./screens/SearchScreen";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favorites from "./reducers/favorites";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import MyRecipesScreen from "./screens/MyRecipesScreen";

LogBox.ignoreAllLogs(); //supprimer les messages d'alertes

const Stack = createNativeStackNavigator();

const reducers = combineReducers({ favorites });
const persistConfig = { key: "foodApp", storage: AsyncStorage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="Favorites" component={MyRecipesScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
