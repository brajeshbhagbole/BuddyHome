import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';

const FavoritesScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Saved Pets</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.emptyState}>
                    <Text style={styles.emptyStateIcon}>❤️</Text>
                    <Text style={styles.emptyStateTitle}>No saved pets yet</Text>
                    <Text style={styles.emptyStateText}>
                        Pets you like will appear here so you can easily find them later.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderLight,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.textPrimary,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    emptyStateIcon: {
        fontSize: 60,
        marginBottom: 16,
        opacity: 0.8,
    },
    emptyStateTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.textPrimary,
        marginBottom: 8,
    },
    emptyStateText: {
        fontSize: 15,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
    },
});