import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
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
        image:
            'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '5',
        name: 'Simba',
        location: 'Mumbai, M.H',
        age: '1.5 yrs',
        type: 'adopt',
        price: null,
        image:
            'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '6',
        name: 'Luna',
        location: 'Delhi, D.L',
        age: '6 m+',
        type: 'sell',
        price: '₹3,800',
        image:
            'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '7',
        name: 'Max',
        location: 'Jaipur, R.J',
        age: '2 yrs',
        type: 'adopt',
        price: null,
        image:
            'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '8',
        name: 'Bella',
        location: 'Indore, M.P',
        age: '10 m+',
        type: 'sell',
        price: '₹5,000',
        image:
            'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '9',
        name: 'Rocky',
        location: 'Ahmedabad, G.J',
        age: '3 yrs',
        type: 'adopt',
        price: null,
        image:
            'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '10',
        name: 'Daisy',
        location: 'Hyderabad, T.S',
        age: '5 m+',
        type: 'sell',
        price: '₹3,200',
        image:
            'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '11',
        name: 'Charlie',
        location: 'Kolkata, W.B',
        age: '1 yr',
        type: 'adopt',
        price: null,
        image:
            'https://images.unsplash.com/photo-1554190777-2f3a6c4f3a6c?q=80&w=687&auto=format&fit=crop',
    },
    {
        id: '12',
        name: 'Leo',
        location: 'Nashik, M.H',
        age: '9 m+',
        type: 'sell',
        price: '₹4,200',
        image:
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=687&auto=format&fit=crop',
    },
];

const ListHeader = () => (
    <>
        <View style={styles.header}>
            <Text style={styles.greeting}>Good Morning,</Text>
            <Text style={styles.subtitle}>Find your perfect companion and give them a forever home.</Text>
        </View>

        <HomeSearchBar />

        <PetFilter />

        <Text style={styles.sectionTitle}>Featured pets for you</Text>
    </>
);

const UserHomeScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
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
        </SafeAreaView>
    );
};

export default UserHomeScreen;

const { width } = Dimensions.get('window');
const normalize = (size: number) => Math.round((width / 375) * size);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f1f7f1ff',
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
    subtitle: {
        fontSize: 14,
        color: colors.textSecondary,
        lineHeight: 20,
    },
    sectionTitle: {
        fontSize: normalize(16),
        fontWeight: '700',
        color: '#3F3D3D',
        marginTop: normalize(20),
        marginBottom: normalize(4),
    },
    columnWrapper: {
        justifyContent: 'space-between',
        paddingHorizontal: 1,
        gap: 10,
    },
});