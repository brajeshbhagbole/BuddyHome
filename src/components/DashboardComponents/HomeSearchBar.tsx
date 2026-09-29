import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const HomeSearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            {/* Left Search Icon */}
            <Ionicons name="search" size={22} color={colors.textSecondary} />

            {/* Text Input */}
            <TextInput
                placeholder="Search for pets or locations..."
                style={styles.searchInput}
                placeholderTextColor={colors.textLight}
            />

            {/* Right Filter Icon */}
            <View style={styles.filterButton}>
                <Ionicons name="options-outline" size={22} color={colors.textSecondary} />
            </View>
        </View>
    );
};

export default HomeSearchBar;

const { width } = Dimensions.get('window');
const normalize = (size: number) => Math.round((width / 375) * size);

const styles = StyleSheet.create({
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
        marginLeft: normalize(12),
    },
    filterButton: {
        padding: 6,
        backgroundColor: 'transparent',
        borderRadius: 20,
        marginLeft: 8,
    },
});
