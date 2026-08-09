import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'


const WelcomeScreen = () => {

    const { width } = useWindowDimensions()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/images/logo.png')} style={{
                    width: width * 0.15,
                    height: width * 0.15,
                }} resizeMode="cover" />
                <Text style={styles.logoText}>BuddyHome</Text>

            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeText}>Welcome! 🐾</Text>
                <Text style={styles.subText}>Where Every Paw Finds a Home</Text>
            </View>
            <View>
                <View>
                    <Image source={require('../assets/images/welcomescreen.png')} style={{
                        width: width * 0.98,
                        height: width * 1.2,
                        borderColor: '#ffffff',

                    }} resizeMode="cover" />

                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.getStartedButton}>
                    <Text style={styles.getStartedText}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.alreadyHaveAccountButton}>
                    <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'

    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginVertical: 10
    },
    logoText: {
        fontSize: 28,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginVertical: 20
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
        marginHorizontal: 20
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    subText: {
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    getStartedText: {
        fontSize: 18,
        fontWeight: '800',
        letterSpacing: 0.5,
        color: '#ffffff',
    },
    alreadyHaveAccountText: {
        fontSize: 16,
        fontWeight: '800',
        letterSpacing: 0.5,
        color: '#0A804A'
    },
    getStartedButton: {
        backgroundColor: '#0A804A',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    alreadyHaveAccountButton: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 20,

    },
})