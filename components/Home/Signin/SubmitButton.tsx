import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    handleSubmit: () => void,
}

export default function SubmitButton({ handleSubmit }: Props) {
    return (
        <View style={styles.submitContainer}>
            <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.submitButton}>Validate</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    submitContainer: {
        marginTop: "10%",
    },
    submitButton: {
        color: "white",
        fontSize: 20,
    },

})