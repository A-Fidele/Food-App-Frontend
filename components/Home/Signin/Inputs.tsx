import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";

type InputsProps = {
    email: string,
    password: string,
    createAccount: boolean,
    confirmPassword: string,
    setEmail: (text: string) => void,
    setPassword: (text: string) => void,
    setConfirmPassword: (text: string) => void,
}

export default function Inputs({ email, password, setEmail, setPassword, confirmPassword, setConfirmPassword, createAccount }: InputsProps) {
    return (
        <View style={{
            flexDirection: "column", flex: 1,
        }}>
            <View>
                <Text style={styles.label}><FontAwesome name="envelope" size={28} /></Text>
                <TextInput style={styles.input}
                    value={email}
                    placeholder="email"
                    placeholderTextColor={"#a7a7a7"}
                    secureTextEntry={false}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View>
                <Text style={styles.label}><FontAwesome name="key" size={28} /></Text>
                <TextInput style={styles.input}
                    value={password}
                    placeholder="password"
                    placeholderTextColor={"#a7a7a7"}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            {createAccount && <View style={{ top: 30, height: 20, }}>
                <TextInput style={styles.input}
                    value={confirmPassword}
                    placeholder="confirm password"
                    placeholderTextColor={"#a7a7a7"}
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
            </View>}
        </View >
    )
}

const styles = StyleSheet.create({
    label: {
        color: "white",
        fontSize: 20,
        top: "50%",
    },
    input: {
        width: "35%",
        borderColor: "#655074",
        borderBottomColor: "#ccc",
        borderBottomWidth: 2,
        borderWidth: 1,
        color: "white",
        marginLeft: "10%",
        fontSize: 18,
    },
})