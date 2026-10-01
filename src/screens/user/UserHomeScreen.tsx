import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PetFilter from '../../components/DashboardComponents/PetFilter';
import PetCard, { Pet } from '../../components/DashboardComponents/PetCard';
import HomeSearchBar from '../../components/DashboardComponents/HomeSearchBar';

const pets: Pet[] = [
    {
        id: '1',
        name: 'Coco',
        location: 'Indore, M.P',
        age: '4 m+',
        type: 'adopt',
        price: null,
        image: 'https://plus.unsplash.com/premium_photo-1760893696251-4219904ab2a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: '2',
        name: 'Oreo',
        location: 'Nagpur, M.H',
        age: '2 yrs',
        type: 'sell',
        price: '₹2,500',
        image: 'https://media.istockphoto.com/id/185304274/photo/kitten.jpg?s=2048x2048&w=is&k=20&c=D4pPgqpVMG1xpLxA3qNgdMNn9rxKD0zfpHLZbs7hddg=',
    }, {
        id: '3',
        name: 'Bruno',
        location: 'Bhopal, M.P',
        age: '1 yr',
        type: 'adopt',
        price: null,
        image:
            'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '4',
        name: 'Milo',
        location: 'Pune, M.H',
        age: '8 m+',
        type: 'sell',
        price: '₹4,500',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'Simba',
        location: 'Mumbai, M.H',
        age: '1.5 yrs',
        type: 'adopt',
        price: null,
        image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'Luna',
        location: 'Delhi, D.L',
        age: '6 m+',
        type: 'sell',
        price: '₹3,800',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '7',
        name: 'Max',
        location: 'Jaipur, R.J',
        age: '2 yrs',
        type: 'adopt',
        price: null,
        image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '8',
        name: 'Bella',
        location: 'Indore, M.P',
        age: '10 m+',
        type: 'sell',
        price: '₹5,000',
        image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '9',
        name: 'Rocky',
        location: 'Ahmedabad, G.J',
        age: '3 yrs',
        type: 'adopt',
        price: null,
        image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '10',
        name: 'Daisy',
        location: 'Hyderabad, T.S',
        age: '5 m+',
        type: 'sell',
        price: '₹3,200',
        image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '11',
        name: 'Charlie',
        location: 'Kolkata, W.B',
        age: '1 yr',
        type: 'adopt',
        price: null,
        image: 'https://images.unsplash.com/photo-1554190777-2f3a6c4f3a6c?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '12',
        name: 'Leo',
        location: 'Nashik, M.H',
        age: '9 m+',
        type: 'sell',
        price: '₹4,200',
        image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=687&auto=format&fit=crop',
    },
];

const ListHeader = () => (
    <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
            {/* Top Bar: User Greeting & Location + Icons */}
            <View style={styles.topBar}>
                {/* Left: User Avatar & Location */}
                <View style={styles.userSection}>
                    <TouchableOpacity style={styles.avatarContainer} activeOpacity={0.8}>
                        <View style={styles.avatarCircle}>
                            <Text style={styles.avatarText}>A</Text>
                        </View>

                    </TouchableOpacity>
                    <View style={styles.userInfo}>
                        <Text style={styles.greetingText}>Hello, Vikas👋</Text>
                        <TouchableOpacity style={styles.locationPill} activeOpacity={0.7}>
                            <Ionicons name="location" size={14} color={colors.primary} />
                            <Text style={styles.locationText}>Indore, M.P</Text>
                            <Ionicons name="chevron-down" size={14} color={colors.textSecondary} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Right: Notification Icon Button */}
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
                        <Ionicons name="notifications-outline" size={20} color={colors.textPrimary} />

                    </TouchableOpacity>
                </View>
            </View>

            {/* Hero Banner Card ("Adopt Don't Shop") */}
            <View style={styles.heroBanner}>
                <View style={styles.heroTextContainer}>
                    <View style={styles.heroBadge}>
                        <Ionicons name="sparkles" size={12} color="#059669" />
                        <Text style={styles.heroBadgeText}>Adopt, Shop & Care</Text>
                    </View>
                    <Text style={styles.heroTitle}>Find Your New Best Friend 🐾</Text>
                    <Text style={styles.heroSubtitle}>Rescued & lovable pets nearby waiting for a home.</Text>
                </View>
                <View style={styles.heroIconBox}>
                    <Ionicons name="heart-circle-outline" size={54} color="rgba(255,255,255,0.85)" />
                </View>
            </View>

            {/* Home Search Bar */}
            <HomeSearchBar />

            {/* Category Horizontal Filter */}
            <PetFilter />
        </View>

        {/* Section Header Title */}
        <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>

                <Text style={styles.sectionTitle}>Featured pets for you</Text>
            </View>
        </View>
    </View>
);

const UserHomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <View style={styles.screenBackground}>
                <FlatList
                    data={pets}
                    renderItem={({ item }) => <PetCard pet={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.container}
                    ListHeaderComponent={<ListHeader />}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default UserHomeScreen;

const { width } = Dimensions.get('window');
const normalize = (size: number) => Math.round((width / 375) * size);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    screenBackground: {
        flex: 1,
        backgroundColor: '#F4F7F5',
    },
    container: {
        flexGrow: 1,
        paddingHorizontal: normalize(16),
        paddingBottom: normalize(24),
    },
    headerWrapper: {
        marginBottom: normalize(12),
    },
    headerContainer: {
        marginHorizontal: -normalize(16),
        marginTop: -normalize(16),
        paddingHorizontal: normalize(16),
        paddingTop: normalize(16),
        paddingBottom: normalize(20),
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: normalize(28),
        borderBottomRightRadius: normalize(28),
        shadowColor: '#059669',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.06,
        shadowRadius: 14,
        elevation: 5,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: normalize(16),
        marginTop: normalize(4),
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(10),
    },
    avatarContainer: {
        position: 'relative',
    },
    avatarCircle: {
        width: normalize(42),
        height: normalize(42),
        borderRadius: normalize(21),
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#D1FAE5',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
    },
    avatarText: {
        fontSize: normalize(18),
        fontWeight: '800',
        color: '#FFFFFF',
    },
    onlineBadge: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: normalize(12),
        height: normalize(12),
        borderRadius: normalize(6),
        backgroundColor: '#10B981',
        borderWidth: 2,
        borderColor: '#FFFFFF',
    },
    userInfo: {
        justifyContent: 'center',
    },
    greetingText: {
        fontSize: normalize(13),
        fontWeight: '700',
        color: colors.textPrimary,
        marginBottom: normalize(2),
    },
    locationPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F6F4',
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(3),
        borderRadius: normalize(12),
        gap: normalize(4),
    },
    locationText: {
        fontSize: normalize(11),
        color: colors.textSecondary,
        fontWeight: '600',
    },
    actionButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(8),
    },
    iconButton: {
        width: normalize(38),
        height: normalize(38),
        borderRadius: normalize(19),
        backgroundColor: '#F3F6F4',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    notificationDot: {
        position: 'absolute',
        top: normalize(8),
        right: normalize(8),
        width: normalize(7),
        height: normalize(7),
        borderRadius: normalize(4),
        backgroundColor: '#EF4444',
    },
    heroBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        borderRadius: normalize(20),
        padding: normalize(16),
        marginBottom: normalize(16),
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    heroTextContainer: {
        flex: 1,
        paddingRight: normalize(10),
    },
    heroBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        alignSelf: 'flex-start',
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(3),
        borderRadius: normalize(10),
        gap: normalize(4),
        marginBottom: normalize(6),
    },
    heroBadgeText: {
        fontSize: normalize(10),
        fontWeight: '700',
        color: colors.primary,
    },
    heroTitle: {
        fontSize: normalize(15),
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: normalize(4),
    },
    heroSubtitle: {
        fontSize: normalize(11),
        color: '#D1FAE5',
        lineHeight: normalize(15),
    },
    heroIconBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHeader: {
        marginTop: normalize(16),
        marginBottom: normalize(4),
    },
    sectionTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(8),
    },
    titleIndicator: {
        width: normalize(4),
        height: normalize(16),
        backgroundColor: colors.primary,
        borderRadius: normalize(2),
    },
    sectionTitle: {
        fontSize: normalize(16),
        fontWeight: '800',
        color: colors.textPrimary,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        gap: normalize(10),
    },
});

