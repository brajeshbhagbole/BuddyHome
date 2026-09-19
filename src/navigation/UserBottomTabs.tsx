import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/user/UserHomeScreen';
import ExploreScreen from '../screens/user/ExploreScreen';
import SwipeScreen from '../screens/user/SwipeScreen';
import FavoritesScreen from '../screens/user/FavoritesScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import colors from '../theme';

const Tab = createBottomTabNavigator();

// Floating center paw button
const PawButton = ({ focused }: { focused: boolean }) => (
    <View style={[styles.pawButton, focused && styles.pawButtonActive]}>
        <Ionicons name="paw" size={26} color="#FFFFFF" />
    </View>
);

const UserBottomTabs = () => {
    const insets = useSafeAreaInsets();
    const bottomPadding = Platform.OS === 'android'
        ? Math.max(insets.bottom, 8)
        : insets.bottom;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: '#9AA6A1',
                tabBarStyle: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                    height: 64 + bottomPadding,
                    paddingBottom: bottomPadding,
                    paddingTop: 8,
                    elevation: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.08,
                    shadowRadius: 16,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: '600',
                    marginTop: 2,
                },
                tabBarIcon: ({ focused, color }) => {
                    if (route.name === 'Swipe') {
                        return <PawButton focused={focused} />;
                    }

                    let iconName: string;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Explore':
                            iconName = focused ? 'search' : 'search-outline';
                            break;
                        case 'Favorites':
                            iconName = focused ? 'heart' : 'heart-outline';
                            break;
                        case 'Profile':
                            iconName = focused ? 'person' : 'person-outline';
                            break;
                        default:
                            iconName = 'home-outline';
                    }
                    return <Ionicons name={iconName} size={24} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{ tabBarLabel: 'Explore' }}
            />
            <Tab.Screen
                name="Swipe"
                component={SwipeScreen}
                options={{
                    tabBarLabel: '',
                    // DO NOT set tabBarStyle here — it hides the entire tab bar!
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ tabBarLabel: 'Saved' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
};

export default UserBottomTabs;

const styles = StyleSheet.create({
    pawButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        top: Platform.OS === 'ios' ? -12 : -16,
        elevation: 10,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        borderWidth: 4,
        borderColor: '#FFFFFF',
    },
    pawButtonActive: {
        backgroundColor: colors.primaryDark,
    },
});