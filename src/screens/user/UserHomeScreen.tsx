import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';

const UserHomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Good Morning,</Text>
                    <Text style={styles.name}>Buddy 🐾</Text>
                    <Text style={styles.subtitle}>Find your perfect companion and give them a forever home.</Text>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Featured Pets</Text>
                    <Text style={styles.cardContent}>Discover lovable pets waiting for a home near you.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserHomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flexGrow: 1,
        padding: 20,
    },
    header: {
        marginTop: 10,
        marginBottom: 30,
    },
    greeting: {
        fontSize: 16,
        color: colors.textSecondary,
        marginBottom: 4,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.textPrimary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: colors.textSecondary,
        lineHeight: 20,
    },
    card: {
        backgroundColor: colors.surface,
        borderRadius: 16,
        padding: 20,
        elevation: 2,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.primary,
        marginBottom: 8,
    },
    cardContent: {
        fontSize: 14,
        color: colors.textSecondary,
        lineHeight: 20,
    },
});