import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../theme/colors";

const petType = [
    { id: 0, name: "All", icon: "paw", bg: "#EBF5F0" },
    { id: 1, name: "Dogs", image: "https://img.icons8.com/color/48/puppy.png", bg: "#FFF4E5" },
    { id: 2, name: "Cats", image: "https://img.icons8.com/?size=100&id=80616&format=png&color=000000", bg: "#FEECEB" },
    { id: 3, name: "Rabbits", image: "https://img.icons8.com/?size=100&id=80624&format=png&color=000000", bg: "#EBF5F0" },
    { id: 4, name: "Birds", image: "https://img.icons8.com/?size=100&id=80623&format=png&color=000000", bg: "#E0F2FE" },
    { id: 5, name: "Fish", image: "https://img.icons8.com/?size=100&id=80942&format=png&color=000000", bg: "#F0FDF4" },
    { id: 6, name: "Hamsters", image: "https://img.icons8.com/?size=100&id=81226&format=png&color=000000", bg: "#FEF3C7" }
];

const PetFilter = () => {
    const [selectedId, setSelectedId] = useState<number | null>(0);

    return (
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.scrollContent}
            style={styles.petTypeContainer}
        >
            {petType.map((item) => {
                const isActive = selectedId === item.id;

                return (
                    <TouchableOpacity 
                        style={[
                            styles.petType,
                            isActive && styles.activePetType
                        ]} 
                        key={item.id}
                        activeOpacity={0.8}
                        onPress={() => setSelectedId(item.id)}
                    >
                        <View style={[
                            styles.petTypeIcon,
                            { backgroundColor: isActive ? 'rgba(255, 255, 255, 0.25)' : item.bg }
                        ]}>
                            {item.icon ? (
                                <Ionicons name={item.icon} size={22} color={isActive ? "#FFFFFF" : colors.primary} />
                            ) : (
                                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                            )}
                        </View>
                        <Text style={[
                            styles.petTypeText,
                            isActive && styles.activePetTypeText
                        ]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
};

export default PetFilter;

const { width } = Dimensions.get("window");
const normalize = (size: number) => Math.round((width / 375) * size);

const styles = StyleSheet.create({
    petTypeContainer: {
        marginTop: normalize(16),
        flexGrow: 0,
    },
    scrollContent: {
        paddingRight: normalize(16),
        gap: normalize(10),
    },
    petType: {
        width: normalize(76),
        height: normalize(86),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: normalize(18),
        paddingVertical: normalize(8),
        borderWidth: 1,
        borderColor: '#EEF2EE',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    activePetType: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 5,
    },
    petTypeIcon: {
        width: normalize(44),
        height: normalize(44),
        borderRadius: normalize(22),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(4),
    },
    categoryImage: {
        width: normalize(28),
        height: normalize(28),
        resizeMode: 'contain',
    },
    petTypeText: {
        color: colors.textPrimary,
        fontSize: normalize(11),
        fontWeight: '600',
        textAlign: 'center',
    },
    activePetTypeText: {
        color: '#FFFFFF',
        fontWeight: '700',
    },
});
