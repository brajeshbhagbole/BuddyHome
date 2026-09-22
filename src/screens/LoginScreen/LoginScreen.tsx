import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const GoogleSVG = ({ width = 18, height = 18 }) => (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
        <Path d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4763 7.36363H9V10.8454H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5604V15.8195H14.9563C16.6581 14.2527 17.64 11.9454 17.64 9.20454Z" fill="#4285F4" />
        <Path d="M9 18C11.43 18 13.4709 17.1941 14.9564 15.8196L12.0477 13.5605C11.2436 14.1005 10.215 14.4091 9 14.4091C6.65637 14.4091 4.67274 12.8296 3.96455 10.71H0.957275V13.0418C2.43455 15.9832 5.48137 18 9 18Z" fill="#34A853" />
        <Path d="M3.96455 10.71C3.78455 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78455 7.83 3.96455 7.29V4.95818H0.957273C0.347727 6.17318 0 7.55182 0 9C0 10.4482 0.347727 11.8268 0.957273 13.0418L3.96455 10.71Z" fill="#FBBC05" />
        <Path d="M9 3.59091C10.3323 3.59091 11.5273 4.04591 12.4691 4.94182L15.0218 2.38909C13.4677 0.941364 11.4273 0 9 0C5.48137 0 2.43455 2.01682 0.957275 4.95818L3.96455 7.29C4.67274 5.17091 6.65637 3.59091 9 3.59091Z" fill="#EA4335" />
    </Svg>
);

const LoginScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    
    // Get the role that was passed from OnboardingRole (e.g. 'user', 'shop', or 'ngo')
    const role = route.params?.role || 'user'; 

    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Header with Back Arrow */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} activeOpacity={0.7}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Logo Section */}
                <View style={styles.logoSection}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logoImage}
                    />
                    <Text style={styles.mainTitle}>
                        <Text style={{ color: '#0A804A' }}>Buddy</Text>Home
                    </Text>
                    <Text style={styles.adoptText}>Adopt. Shop. Care.</Text>
                </View>

                {/* Central Decorative Icon */}
                <View style={styles.centerIllustration}>
                    <View style={styles.pulseCircle} />
                    <View style={styles.googleBadge}>
                        <GoogleSVG width={36} height={36} />
                    </View>
                    {/* Decorative dashes */}
                    <Text style={[styles.dash, { top: 10, left: -20, transform: [{ rotate: '-30deg' }] }]}>/</Text>
                    <Text style={[styles.dash, { top: 40, left: -30, transform: [{ rotate: '-70deg' }] }]}>-</Text>
                    <Text style={[styles.dash, { top: 10, right: -20, transform: [{ rotate: '30deg' }] }]}>\</Text>
                    <Text style={[styles.dash, { top: 40, right: -30, transform: [{ rotate: '70deg' }] }]}>-</Text>
                </View>

                {/* Text Content */}
                <View style={styles.textContent}>
                    <Text style={styles.welcomeTitle}>Continue with Google</Text>
                    <Text style={styles.subTitle}>
                        Sign in to your account and get{'\n'}started with PawFinder.
                    </Text>
                </View>

                {/* Google Button */}
                <TouchableOpacity 
                    onPress={() => {
                        // Navigate based on the selected role
                        if (role === 'shop') {
                            // navigation.navigate('ShopHomeScreen'); 
                            navigation.navigate('UserMain'); // Placeholder for now
                        } else if (role === 'ngo') {
                            // navigation.navigate('NgoHomeScreen');
                            navigation.navigate('UserMain'); // Placeholder for now
                        } else {
                            navigation.navigate('UserMain');
                        }
                    }} 
                    style={styles.googleButton} 
                    activeOpacity={0.8}
                >
                    <View style={styles.buttonIconWrapper}>
                        <GoogleSVG width={20} height={20} />
                    </View>
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View style={styles.dividerContainer}>
                    <View style={styles.dividerLine} />
                    <Text style={styles.dividerText}>or</Text>
                    <View style={styles.dividerLine} />
                </View>

                {/* Terms and Privacy */}
                <View style={styles.termsContainer}>
                    <View style={styles.shieldContainer}>
                        <Text style={styles.shieldIcon}>🛡️</Text>
                    </View>
                    <Text style={styles.termsText}>
                        By continuing, you agree to our{'\n'}
                        <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
                    </Text>
                </View>

            </ScrollView>

            {/* Bottom Background Illustrations */}
            <View style={styles.bottomIllustrationContainer} pointerEvents="none">
                <View style={styles.hillBackground2} />
                <View style={styles.hillBackground1} />
                <Text style={styles.bgPawDecor}>🐾</Text>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 5,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backArrow: {
        fontSize: 28,
        color: '#333',
        fontWeight: '300',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
        paddingBottom: 100, // leave space for bottom blobs
    },
    logoSection: {
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 40,
    },
    logoImage: {
        width: 76,
        height: 76,
        borderRadius: 20,
        marginBottom: 16,
    },
    mainTitle: {
        fontSize: 28,
        fontWeight: '800',
        color: '#111',
        marginBottom: 4,
    },
    adoptText: {
        fontSize: 14,
        color: '#888',
        fontWeight: '500',
    },
    centerIllustration: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        position: 'relative',
    },
    pulseCircle: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#F0F9F4',
    },
    googleBadge: {
        width: 70,
        height: 70,
        backgroundColor: '#ffffff',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 8,
        zIndex: 2,
    },
    dash: {
        position: 'absolute',
        color: '#0A804A',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.6,
    },
    textContent: {
        alignItems: 'center',
        marginBottom: 30,
    },
    welcomeTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111',
        marginBottom: 10,
    },
    subTitle: {
        fontSize: 15,
        color: '#666',
        textAlign: 'center',
        lineHeight: 22,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0A804A',
        width: '100%',
        paddingVertical: 14,
        borderRadius: 30,
        paddingHorizontal: 8,
        shadowColor: '#0A804A',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
        marginBottom: 30,
    },
    buttonIconWrapper: {
        width: 36,
        height: 36,
        backgroundColor: '#ffffff',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
    },
    googleButtonText: {
        flex: 1,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        paddingRight: 36, // to offset the icon on the left
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#EEEEEE',
    },
    dividerText: {
        paddingHorizontal: 15,
        color: '#AAAAAA',
        fontSize: 14,
    },
    termsContainer: {
        alignItems: 'center',
    },
    shieldContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#E8F5E9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    shieldIcon: {
        fontSize: 16,
    },
    termsText: {
        fontSize: 12,
        color: '#777',
        textAlign: 'center',
        lineHeight: 18,
    },
    linkText: {
        color: '#0A804A',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    bottomIllustrationContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        overflow: 'hidden',
        zIndex: -1,
    },
    hillBackground1: {
        position: 'absolute',
        bottom: -70,
        left: -50,
        right: -50,
        height: 140,
        backgroundColor: '#E8F5E9',
        borderTopLeftRadius: 300,
        borderTopRightRadius: 300,
        opacity: 0.8,
    },
    hillBackground2: {
        position: 'absolute',
        bottom: -60,
        left: -150,
        right: 0,
        height: 180,
        backgroundColor: '#F1F8F3',
        borderTopLeftRadius: 350,
        borderTopRightRadius: 350,
        opacity: 0.6,
    },
    bgPawDecor: {
        position: 'absolute',
        bottom: 40,
        right: 30,
        fontSize: 24,
        opacity: 0.3,
        color: '#0A804A',
    }
});