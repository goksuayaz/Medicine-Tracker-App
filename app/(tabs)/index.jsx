import { View, Text, Button } from 'react-native'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../config/FirebaseConfig'
import Header from '../../components/Header'
// import { Redirect } from 'expo-router'
import EmptyState from './../../components/EmptyState';

export default function HomeScreen() {
    return (
        <View style={{ padding: 25, backgroundColor: 'white', height: '100%', width: '100%' }}>
            <Header />
            <EmptyState />
        </View>
    )
}
