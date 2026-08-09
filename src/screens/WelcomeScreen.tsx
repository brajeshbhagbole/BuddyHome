import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'


const WelcomeScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <SafeAreaView style={styles.container}>

            {/* Header */}
            <View style={styles.headerContainer}>
                <Image source={require('../assets/images/logo.png')} style={{
                    width: width * 0.12,
                    height: width * 0.12,
                    borderRadius: 10,
                }} resizeMode="cover" />
                <Text style={styles.logoText}>BuddyHome</Text>
            </View>

            {/* Welcome Text */}
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeText}>Welcome! 🐾</Text>
                <Text style={styles.subText}>
                    Where Every Paw Finds a Home <Text style={styles.heartText}>❤️</Text>
                </Text>
            </View>

            {/* Image + Card pushed to bottom */}
            <View style={styles.bottomSection}>

                {/* Pet Image */}
                <View style={styles.imageWrapper}>
                    <Image
                        source={require('../assets/images/welcomescreen.png')}
                        style={{
                            width: width,
                            height: height * 0.52,
                        }}
                        resizeMode="cover"
                    />
                </View>

                {/* Bottom Card */}
                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.getStartedButton}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.getStartedText}>Get Started</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.alreadyHaveAccountButton}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 20,
        paddingTop: 6,
        paddingBottom: 4,
    },
    logoText: {
        fontSize: 26,
        fontWeight: '800',
        letterSpacing: 0.4,
        color: '#111111',
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '900',
        letterSpacing: 0.5,
        color: '#111111',
    },
    heartText: {
        fontSize: 16,
    },
    subText: {
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.3,
        color: '#444444',
    },
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageWrapper: {
        overflow: 'hidden',
    },
    bottomContainer: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        marginTop: -28,
        paddingHorizontal: 24,
        paddingTop: 22,
        paddingBottom: 16,
        gap: 10,
        // Shadow for card elevation
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 10,
    },
    getStartedButton: {
        backgroundColor: '#0A804A',
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: 'center',
        shadowColor: '#0A804A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        elevation: 6,
    },
    getStartedText: {
        fontSize: 17,
        fontWeight: '800',
        letterSpacing: 0.6,
        color: '#ffffff',
    },
    alreadyHaveAccountButton: {
        paddingVertical: 12,
        borderRadius: 30,
        alignItems: 'center',
    },
    alreadyHaveAccountText: {
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.3,
        color: '#0A804A',
    },
})