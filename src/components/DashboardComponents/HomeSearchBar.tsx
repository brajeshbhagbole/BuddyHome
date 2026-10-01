import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const HomeSearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            {/* Left Search Icon */}
            <Ionicons name="search" size={20} color={colors.primary} style={styles.searchIcon} />

            {/* Text Input */}
            <TextInput
                placeholder="Search for pets or locations..."
                style={styles.searchInput}
                placeholderTextColor={colors.textLight}
            />

            {/* Right Filter Icon Button */}
            <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
                <Ionicons name="options-outline" size={18} color="#FFFFFF" />
            </TouchableOpacity>
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
        backgroundColor: '#FFFFFF',
        borderRadius: normalize(25),
        paddingHorizontal: normalize(14),
        paddingVertical: normalize(4),
        borderWidth: 1,
        borderColor: '#E8ECE9',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 4,
    },
    searchIcon: {
        marginRight: normalize(6),
    },
    searchInput: {
        flex: 1,
        fontSize: normalize(14),
        color: colors.textPrimary,
        paddingVertical: normalize(10),
        fontWeight: '500',
    },
    filterButton: {
        width: normalize(38),
        height: normalize(38),
        backgroundColor: colors.primary,
        borderRadius: normalize(19),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: normalize(6),
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
});


