import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type RecipeTitleProps = {
    name: string,
    longDesc: string,
}

export default function RecipeTitle({ name, longDesc }: RecipeTitleProps) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.desc} >{longDesc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        width: "100%",
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    desc: {
        color: "grey",
        fontWeight: "medium",
    }
});
