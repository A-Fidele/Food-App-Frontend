import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

export default function NoRecipesFound() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>No Favorite Recipes yet ...</Text>
            <Text style={styles.title}> <FontAwesome name="folder-open" size={28} /></Text>
        </View>
    );
}
const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        marginTop: 20,
    },
});
