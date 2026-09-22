import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';

const SwipeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Find a Buddy</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.cardPlaceholder}>
                    <Text style={styles.cardText}>Swipe right to like,</Text>
                    <Text style={styles.cardText}>left to pass.</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SwipeScreen;

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
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    cardPlaceholder: {
        width: '100%',
        height: '70%',
        backgroundColor: colors.surface,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    cardText: {
        fontSize: 18,
        color: colors.textSecondary,
        fontWeight: '500',
        marginVertical: 4,
    }
});
