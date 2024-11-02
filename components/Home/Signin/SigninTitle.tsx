import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

export default function SigninTitle({ }: Props) {
    return (
        <View>
            <Text style={styles.title}>{`Login :-)`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 48,
        fontWeight: "semibold",
    },
})