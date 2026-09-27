import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PetFilter from '../../components/DashboardComponents/PetFilter';
const UserHomeScreen = () => {



    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']} >
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

                {/* pet type              */}
                <PetFilter />


                {/* Pet list */}
                <View style={styles.petListRow}>
                    <View style={styles.petListCard}>
                        <View style={styles.petCardImg}>
                            <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1760893696251-4219904ab2a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.petImage} />
                        </View>



                        <View style={styles.petCardInfo}>



                            <View style={styles.petCardTop}>
                                <View>
                                    <Text style={styles.petName}>Coco</Text>
                                </View>
                                <View style={styles.petCardActions}>
                                    <TouchableOpacity style={styles.petCardActionButton}>
                                        <Ionicons name="heart-outline" size={22} color={colors.textSecondary} />
                                    </TouchableOpacity>
                                </View>

                            </View>



                            <View style={styles.petLocationContainer}>
                                <Ionicons name="location-outline" size={12} color={colors.textSecondary} />
                                <Text style={styles.petLocation}>Indore,M.P</Text>
                            </View>
                            <View style={styles.petAgeContainer}>
                                <Ionicons name="calendar-outline" size={12} color={colors.textSecondary} />
                                <Text style={styles.petLocation}>4 m+</Text>
                            </View>
                            <View style={[styles.priceTag, { backgroundColor: '#d1f0d9' }]}>
                                <Ionicons name="gift" size={12} color="#0d5926" />
                                <Text style={[styles.priceText, { color: '#0d5926' }]}>Free</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.petListCard}>
                        <View style={styles.petCardImg}>
                            <Image source={{ uri: 'https://media.istockphoto.com/id/185304274/photo/kitten.jpg?s=2048x2048&w=is&k=20&c=D4pPgqpVMG1xpLxA3qNgdMNn9rxKD0zfpHLZbs7hddg=' }} style={styles.petImage} />
                        </View>
                        <View style={styles.petCardInfo}>
                            <View style={styles.petCardTop}>
                                <View>
                                    <Text style={styles.petName}>Oreo</Text>
                                </View>
                                <View style={styles.petCardActions}>
                                    <TouchableOpacity style={styles.petCardActionButton}>
                                        <Ionicons name="heart-outline" size={22} color={colors.textSecondary} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.petLocationContainer}>
                                <Ionicons name="location-outline" size={12} color={colors.textSecondary} />
                                <Text style={styles.petLocation}>Nagpur,M.H</Text>
                            </View>
                            <View style={styles.petAgeContainer}>
                                <Ionicons name="calendar-outline" size={12} color={colors.textSecondary} />
                                <Text style={styles.petLocation}>2 yrs</Text>
                            </View>
                            <View style={[styles.priceTag, { backgroundColor: '#fcdcd9' }]}>
                                <Ionicons name="pricetag" size={12} color="#8c1c1c" />
                                <Text style={[styles.priceText, { color: '#8c1c1c' }]}>₹2,500</Text>
                            </View>
                        </View>

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
        backgroundColor: '#f3f2f3',
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

    },
    petListRow: { flexDirection: "row", justifyContent: 'space-between', alignSelf: 'center', gap: normalize(15) },
    petListCard: {
        marginTop: normalize(20),
        width: normalize(155),
        height: normalize(210),
        backgroundColor: '#fff',
        borderRadius: normalize(16),
        padding: normalize(12),
        elevation: 3,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        alignSelf: 'center',
    },
    petCardImg: {
        width: normalize(150),
        height: normalize(130),
        borderRadius: normalize(16),
        backgroundColor: '#b06060ff',
        alignSelf: 'center',
        marginTop: normalize(-10)

    },
    petImage: {
        width: normalize(150),
        height: normalize(130),
        borderRadius: normalize(16),
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    petCardInfo: {
        width: normalize(150),

        borderRadius: normalize(16),
        alignSelf: 'center',
        marginLeft: normalize(20)
    },
    petCardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    petCardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: normalize(15)

    },
    petCardActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: normalize(4),
    },
    petName: {
        fontSize: normalize(15),
        fontWeight: 700,
        color: '#3F3D3D',
        marginBottom: normalize(1),
        letterSpacing: normalize(1),
    },
    petLocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(5),

    },
    petLocation: {
        fontSize: normalize(11),
        color: '#9B9999',
        marginBottom: normalize(1)
    },
    petAgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(5),
        marginTop: normalize(2)
    },
    petAge: {
        fontSize: normalize(11),
        color: '#9B9999',
        marginBottom: normalize(1)
    },
    priceTag: {
        position: 'absolute',
        bottom: 0,
        right: normalize(15),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(4),
        borderRadius: normalize(12),
        gap: normalize(4),
    },
    priceText: {
        fontSize: normalize(10),
        fontWeight: 'bold',
    }
});