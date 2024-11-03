import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type SigninTitleProps = { createAccount: boolean }

export default function SigninTitle({ createAccount }: SigninTitleProps) {
    return (
        <View>
            <Text style={styles.title}>{
                !createAccount ? `Login :-)` : 'SignUp ^o^'
            }</Text>
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