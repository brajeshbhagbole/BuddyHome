import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const OnboardingRole = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Select Your Role</Text>
        </View>
    )
}

export default OnboardingRole

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111111',
    },
})
