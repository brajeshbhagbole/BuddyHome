import React, { useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Platform,
    Animated,
    TouchableOpacity,
    Text,
    LayoutChangeEvent,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/user/UserHomeScreen';
import ExploreScreen from '../screens/user/ExploreScreen';
import SwipeScreen from '../screens/user/SwipeScreen';
import FavoritesScreen from '../screens/user/FavoritesScreen';
import ProfileScreen from '../screens/user/ProfileScreen';
import colors from '../theme';

const Tab = createBottomTabNavigator();

// ─── Tab configuration ─────────────────────────────────────────────────────────
const TABS = [
    { name: 'Home', label: 'Home', icon: 'home', iconOff: 'home-outline', IconActive: Entypo, IconInactive: Ionicons, isPaw: false, activeSize: 24, inactiveSize: 24 },
    { name: 'Explore', label: 'Explore', icon: 'search', iconOff: 'search-outline', IconActive: Ionicons, IconInactive: Ionicons, isPaw: false, activeSize: 24, inactiveSize: 24 },
    { name: 'Swipe', label: '', icon: 'paw', iconOff: 'paw', IconActive: Ionicons, IconInactive: Ionicons, isPaw: true, activeSize: 26, inactiveSize: 26 },
    { name: 'Favorites', label: 'Saved', icon: 'heart', iconOff: 'heart-outline', IconActive: Ionicons, IconInactive: Ionicons, isPaw: false, activeSize: 24, inactiveSize: 24 },
    { name: 'Profile', label: 'Profile', icon: 'person', iconOff: 'person-outline', IconActive: Ionicons, IconInactive: Ionicons, isPaw: false, activeSize: 24, inactiveSize: 24 },
];

// ─── Custom Tab Bar ────────────────────────────────────────────────────────────
const CustomTabBar = ({ state, navigation }: any) => {
    const insets = useSafeAreaInsets();
    const bottomPad = Platform.OS === 'android' ? Math.max(insets.bottom, 8) : insets.bottom;

    const PILL_W = 36;

    // slideX stores the LEFT edge of the pill (tab center - half pill width)
    const slideX = useRef(new Animated.Value(-999)).current; // hidden until measured
    const tabLayouts = useRef<{ x: number; width: number }[]>([]);
    const tabCount = TABS.length;

    const getPillLeft = (layout: { x: number; width: number }) =>
        layout.x + layout.width / 2 - PILL_W / 2;

    // Slide to active tab whenever index changes
    useEffect(() => {
        const layout = tabLayouts.current[state.index];
        if (layout) {
            Animated.spring(slideX, {
                toValue: getPillLeft(layout),
                useNativeDriver: true,
                tension: 70,
                friction: 9,
            }).start();
        }
    }, [state.index]);

    const onTabLayout = (index: number) => (e: LayoutChangeEvent) => {
        const { x, width } = e.nativeEvent.layout;
        tabLayouts.current[index] = { x, width };

        // Once all tabs are measured → snap pill to active tab (no animation)
        if (tabLayouts.current.filter(Boolean).length === tabCount) {
            const initial = tabLayouts.current[state.index];
            if (initial) {
                slideX.setValue(getPillLeft(initial));
            }
        }
    };

    return (
        <View style={[styles.tabBar, { paddingBottom: bottomPad }]}>

            {/* ── Sliding pill indicator at top border ── */}
            <Animated.View
                style={[
                    styles.slidingPill,
                    { transform: [{ translateX: slideX }] },
                ]}
            />

            {/* ── Tab buttons ── */}
            {TABS.map((tab, index) => {
                const focused = state.index === index;
                const route = state.routes[index];
                const iconName = focused ? tab.icon : tab.iconOff;
                const IconComponent = focused ? tab.IconActive : tab.IconInactive;
                const iconSize = focused ? tab.activeSize : tab.inactiveSize;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!focused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        activeOpacity={0.75}
                        style={styles.tabButton}
                        onLayout={onTabLayout(index)}
                    >
                        {/* Paw center button — elevated green circle */}
                        {tab.isPaw ? (
                            <View style={[styles.pawCircle, focused && styles.pawCircleFocused]}>
                                <Ionicons name="paw" size={26} color="#FFFFFF" />
                            </View>
                        ) : (
                            <View style={[styles.iconContainer, focused && styles.iconContainerFocused]}>
                                <IconComponent
                                    name={iconName}
                                    size={iconSize}
                                    color={focused ? colors.primary : '#7f8784ff'}
                                />
                            </View>
                        )}

                        {/* Label */}
                        {tab.label !== '' && (
                            <Text
                                style={[
                                    styles.label,
                                    { color: focused ? colors.primary : '#7f8784ff' },
                                    focused && styles.labelActive,
                                ]}
                            >
                                {tab.label}
                            </Text>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

// ─── Navigator ─────────────────────────────────────────────────────────────────
const UserBottomTabs = () => (
    <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Swipe" component={SwipeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

export default UserBottomTabs;

// ─── Styles ────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: 12,
        paddingHorizontal: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 16,
        elevation: 20,
        overflow: 'visible',
    },

    // ── Sliding top-border pill ──────────────────────────────────────────────
    slidingPill: {
        position: 'absolute',
        top: 0,      // top border of tab bar
        left: 0,     // translateX controls actual position
        width: 36,
        height: 4,
        borderRadius: 2,
        backgroundColor: colors.primary,
        // NO marginLeft — position fully controlled by translateX
    },

    // ── Tab button ──────────────────────────────────────────────────────────
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 6,
        paddingBottom: 10,
        minHeight: 60,
        gap: 4,
    },

    // ── Icon Container ───────────────────────────────────────────────────────
    iconContainer: {
        width: 56,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainerFocused: {
        // backgroundColor: '#E6F0EB', // Removed to keep previous style
    },

    // ── Paw center button ────────────────────────────────────────────────────
    pawCircle: {
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -12,            // pops above tab bar
        borderWidth: 4,
        borderColor: '#FFFFFF',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.40,
        shadowRadius: 12,
        elevation: 14,
    },
    pawCircleFocused: {
        shadowOpacity: 0.55,
        elevation: 18,
    },

    // ── Labels ──────────────────────────────────────────────────────────────
    label: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 0.2,
    },
    labelActive: {
        fontWeight: '700',
        color: colors.primary,
    },
});