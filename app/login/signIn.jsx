import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'


export default function SignIn() {
    return (
        <View style={{ padding: 25 }}>
            <Text style={styles.textHeader}>Let's Sign You In</Text>
            <Text style={styles.subText}>Welcome Back </Text>
            <Text style={styles.subText}>You have been missed!</Text>

            <View style={{ marginTop: 25 }}>
                <Text> Email</Text>
                <TextInput placeholder='Email' style={styles.textInput} />
            </View>

            <View style={{ marginTop: 25 }}>
                <Text> Password</Text>
                <TextInput placeholder='Password'
                    secureTextEntry={true}
                    style={styles.textInput}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={{
                    fontSize: 17, color: 'white',
                    textAlign: 'center'
                }}> Login </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonCreate}>
                <Text style={{
                    fontSize: 17, color: Colors.PRIMARY,
                    textAlign: 'center'
                }}> Create Account </Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({

    textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 15
    },

    subText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: Colors.GRAY
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        fontSize: 17,
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: 'white'

    },

    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
        marginTop: 35,

    },
    buttonCreate: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.PRIMARY

    }
})