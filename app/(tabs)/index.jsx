import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'
// import { Redirect } from 'expo-router'

export default function HomeScreen() {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title='Logout' onPress={() => signOut(auth)} />
        </View>
    )
}
