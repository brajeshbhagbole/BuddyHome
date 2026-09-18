import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserHomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to User Home Screen!</Text>
        </View>
    );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0A804A',
    },
});