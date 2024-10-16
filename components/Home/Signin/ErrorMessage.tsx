import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ErrorMessageProps = {
    error: string
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <View style={styles.errorContainer}>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'white',
        fontWeight: 'bold',
    },
    errorContainer: {
        marginTop: "10%",
    }
})