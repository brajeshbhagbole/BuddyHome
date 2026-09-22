import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';

const ExploreScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Explore</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.searchBar}>
                    <Text style={styles.searchPlaceholder}>Search pets, breeds, or locations...</Text>
                </View>
                
                <Text style={styles.sectionTitle}>Categories</Text>
                <View style={styles.categoriesContainer}>
                    <View style={styles.categoryCard}>
                        <Text style={styles.categoryText}>Dogs</Text>
                    </View>
                    <View style={styles.categoryCard}>
                        <Text style={styles.categoryText}>Cats</Text>
                    </View>
                    <View style={styles.categoryCard}>
                        <Text style={styles.categoryText}>Birds</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ExploreScreen;

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
        padding: 20,
    },
    searchBar: {
        backgroundColor: colors.surfaceVariant,
        padding: 15,
        borderRadius: 12,
        marginBottom: 24,
    },
    searchPlaceholder: {
        color: colors.textLight,
        fontSize: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.textPrimary,
        marginBottom: 16,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryCard: {
        backgroundColor: colors.surface,
        width: '30%',
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 12,
        elevation: 2,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    categoryText: {
        color: colors.primary,
        fontWeight: '600',
    }
});