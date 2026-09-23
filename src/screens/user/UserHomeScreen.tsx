import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserHomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Good Morning,</Text>

                    <Text style={styles.subtitle}>Find your perfect companion and give them a forever home.</Text>
                </View>


                {/*** Search bar */}
                <View style={styles.searchContainer}>
                    {/* Left Search Icon */}
                    <Ionicons
                        name="search"
                        size={22}
                        color={colors.textSecondary}
                    />

                    {/* Text Input */}
                    <TextInput
                        placeholder="Search for pets or locations..."
                        style={styles.searchInput}
                        placeholderTextColor={colors.textLight}
                    />

                    {/* Right Filter Icon */}
                    <View style={styles.filterButton}>
                        <Ionicons
                            name="options-outline"
                            size={22}
                            color={colors.textSecondary}
                        />
                    </View>



                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserHomeScreen;

const { width } = Dimensions.get('window');
const scale = width / 375;
const normalize = (size: number) => Math.round(scale * size);

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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingHorizontal: 18,
        paddingVertical: 4,
        elevation: 2.4,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
    },
    searchInput: {
        flex: 1,
        fontSize: normalize(15),
        color: colors.textPrimary,
        paddingVertical: normalize(12),
        marginLeft: normalize(12), // Space between search icon and text

    },
    filterButton: {
        padding: 6,
        backgroundColor: 'transparent',
        borderRadius: 20,
        marginLeft: 8,
    }
});