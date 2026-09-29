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
        paddingHorizontal: 4,
    },
});