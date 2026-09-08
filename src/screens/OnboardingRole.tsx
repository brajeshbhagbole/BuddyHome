import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// Removed vector icons import

const RoleCard = ({ id, title, subtitle, imageSource, color, lightColor, onPress }: any) => {
    return (
        <TouchableOpacity style={[styles.card, { borderLeftColor: color }]} onPress={onPress} activeOpacity={0.8}>
            <View style={[styles.imageContainer, { backgroundColor: lightColor }]}>
                <Image
                    source={imageSource}
                    style={{ width: 40, height: 40, resizeMode: 'contain' }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardSubtitle}>{subtitle}</Text>
            </View>
            <Text style={{ color: color, fontSize: 24, fontWeight: 'bold' }}>{'>'}</Text>
        </TouchableOpacity>
    );
};

const OnboardingRole = () => {
    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Top Decorative Blob */}
            <View style={styles.topBlob} />

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* Logo Section */}
                <View style={styles.headerSection}>
                    <Image source={require('../assets/images/logo.png')} style={styles.topLogoImage} />
                    <Text style={styles.mainTitle}>BuddyHome</Text>
                    <Text style={styles.adoptText}>Adopt. Shop. Care.</Text>
                    <Text style={styles.greenSubText}>One App. Every Pet. <Text style={{ color: '#0A804A' }}>❤️</Text></Text>
                </View>



                {/* Divider Section */}
                <View style={styles.roleHeaderSection}>
                    <Text style={styles.chooseRoleText}>Choose your role</Text>
                    <View style={styles.dividerRow}>
                        <View style={styles.dividerLine} />
                        <Text style={{ color: '#0A804A', paddingHorizontal: 10, fontSize: 16 }}>🐾</Text>
                        <View style={styles.dividerLine} />
                    </View>
                </View>

                {/* Role Cards */}
                <View style={styles.cardsSection}>
                    <RoleCard
                        id="pet-lover"
                        title="I'm a Pet Parent"
                        subtitle="Adopt or buy pets"
                        imageSource={require('../assets/userLogo.png')}
                        color="#0A804A"
                        lightColor="#E6F5EC"
                        onPress={() => { }}
                    />
                    <RoleCard
                        id="shop"
                        title="I'm a Shop Owner"
                        subtitle="Sell pets & products"
                        imageSource={require('../assets/shop.png')}
                        color="#F57C00"
                        lightColor="#FFF3E0"
                        onPress={() => { }}
                    />
                    <RoleCard
                        id="ngo"
                        title="I'm an NGO / Rescuer"
                        subtitle="Rescue & rehome pets"
                        imageSource={require('../assets/ngo.png')}
                        color="#7E57C2"
                        lightColor="#F3E5F5"
                        onPress={() => { }}
                    />
                </View>

                {/* Bottom Illustration Placeholder */}
                <View style={styles.bottomIllustrationContainer}>
                    {/* Recreating the green hill effect purely with views */}
                    <View style={styles.hillBackground2} />
                    <View style={styles.hillBackground1} />
                </View>
            </ScrollView>

            {/* Login Link */}
            <TouchableOpacity style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    Already have an account? <Text style={styles.loginTextGreen}>Login {'>'}</Text>
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default OnboardingRole;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    topBlob: {
        position: 'absolute',
        top: -60,
        left: -60,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#E6F5EC',
        opacity: 0.6,
    },

    scrollContent: {
        flexGrow: 1,
        paddingBottom: 0,
    },
    headerSection: {
        alignItems: 'center',
        marginTop: 50,
    },
    topLogoImage: {
        width: 76,
        height: 76,
        borderRadius: 20,
        marginBottom: 16,
    },
    mainTitle: {
        fontSize: 30,
        fontWeight: '800',
        color: '#111',
        marginBottom: 6,
    },
    adoptText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '500',
        marginBottom: 8,
    },
    greenSubText: {
        fontSize: 14,
        color: '#0A804A',
        fontWeight: '700',
    },
    roleHeaderSection: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    chooseRoleText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111',
        marginBottom: 10,
    },
    dividerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 140,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E0E0E0',
    },
    dividerIcon: {
        paddingHorizontal: 8,
    },
    cardsSection: {
        paddingHorizontal: 20,
        zIndex: 1,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#F0F0F0',
        borderLeftWidth: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#222',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#777',
        fontWeight: '400',
    },
    bottomIllustrationContainer: {
        height: 160,
        marginTop: 20,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 0,
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
        opacity: 0.9,
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
        opacity: 0.7,
    },
    loginContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5',
    },
    loginText: {
        fontSize: 15,
        color: '#666',
        fontWeight: '500',
    },
    loginTextGreen: {
        color: '#0A804A',
        fontWeight: '700',
    },
});
