import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'


const WelcomeScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <SafeAreaView style={styles.container}>

            {/* Decorative background blobs */}
            <View style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}>
                {/* Top-left blob */}
                <View style={[styles.blob, {
                    width: width * 0.52,
                    height: width * 0.52,
                    borderRadius: width * 0.26,
                    top: -width * 0.18,
                    left: -width * 0.22,
                }]} />
                {/* Top-right blob */}
                <View style={[styles.blob, {
                    width: width * 0.42,
                    height: width * 0.42,
                    borderRadius: width * 0.21,
                    top: height * 0.10,
                    right: -width * 0.18,
                }]} />
                {/* Mid-left small blob */}
                <View style={[styles.blob, {
                    width: width * 0.28,
                    height: width * 0.28,
                    borderRadius: width * 0.14,
                    top: height * 0.30,
                    left: -width * 0.10,
                }]} />

                {/* Floating outline hearts - positioned above image */}
                <Text style={[styles.heartDecor, { top: height * 0.08, left: width * 0.06, fontSize: 26 }]}>♡</Text>
                <Text style={[styles.heartDecor, { top: height * 0.22, right: width * 0.07, fontSize: 20 }]}>♡</Text>
                <Text style={[styles.heartDecor, { top: height * 0.14, right: width * 0.18, fontSize: 16 }]}>♡</Text>
            </View>

            {/* Header */}
            <View style={styles.headerContainer}>
                <Image source={require('../assets/images/logo.png')} style={{
                    width: width * 0.12,
                    height: width * 0.12,
                    borderRadius: 10,
                }} resizeMode="cover" />
                <Text style={styles.logoText}>
                    <Text style={styles.logoTextBold}>Buddy</Text>
                    <Text style={styles.logoTextGreen}>Home</Text>
                </Text>
            </View>

            {/* Welcome Text */}
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeText}>Welcome! 🐾</Text>
                <Text style={styles.subText}>
                    Where Every Paw Finds a Home <Text style={styles.heartText}>❤️</Text>
                </Text>
            </View>

            {/* Image + Card pushed to bottom — DO NOT TOUCH */}
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

    // ── Decorative background ──────────────────────────────
    blob: {
        position: 'absolute',
        backgroundColor: '#D6F0E0',
        opacity: 0.55,
    },
    heartDecor: {
        position: 'absolute',
        fontSize: 22,
        color: '#BBBBBB',
        opacity: 0.55,
        fontWeight: '300',
    },

    // ── Header ────────────────────────────────────────────
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 4,
    },
    logoText: {
        fontSize: 26,
        letterSpacing: 0.3,
    },
    logoTextBold: {
        fontWeight: '900',
        color: '#111111',
    },
    logoTextGreen: {
        fontWeight: '900',
        color: '#0A804A',
    },

    // ── Welcome content ───────────────────────────────────
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 8,
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 34,
        fontWeight: '900',
        letterSpacing: 0.4,
        color: '#111111',
    },
    heartText: {
        fontSize: 16,
    },
    subText: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.3,
        color: '#777777',
        textAlign: 'center',
    },

    // ── Layout ────────────────────────────────────────────
    bottomSection: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    imageWrapper: {
        overflow: 'hidden',
    },

    // ── Bottom card (untouched) ───────────────────────────
    bottomContainer: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        marginTop: -28,
        paddingHorizontal: 24,
        paddingTop: 22,
        paddingBottom: 16,
        gap: 10,
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