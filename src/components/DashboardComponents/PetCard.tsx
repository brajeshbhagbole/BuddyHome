import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

export type Pet = {
    id: string;
    name: string;
    location: string;
    age: string;
    type: 'adopt' | 'sell';
    price: string | null;
    image: string;
};

type Props = {
    pet: Pet;
};

const PetCard = ({ pet }: Props) => {
    const isAdopt = pet.type === 'adopt';

    return (
        <View style={styles.petListCard}>
            <View style={styles.petCardImg}>
                <Image source={{ uri: pet.image }} style={styles.petImage} />
            </View>
            <View style={styles.petCardInfo}>
                <View style={styles.petCardTop}>
                    <View>
                        <Text style={styles.petName}>{pet.name}</Text>
                    </View>
                    <View style={styles.petCardActions}>
                        <TouchableOpacity style={styles.petCardActionButton}>
                            <Ionicons name="heart-outline" size={22} color={colors.textSecondary} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.petLocationContainer}>
                    <Ionicons name="location-outline" size={12} color={colors.textSecondary} />
                    <Text style={styles.petLocation}>{pet.location}</Text>
                </View>

                <View style={styles.petAgeContainer}>
                    <Ionicons name="calendar-outline" size={12} color={colors.textSecondary} />
                    <Text style={styles.petLocation}>{pet.age}</Text>
                </View>

                <View style={[styles.priceTag, { backgroundColor: isAdopt ? '#d1f0d9' : '#fcdcd9' }]}>
                    <Ionicons
                        name={isAdopt ? 'gift' : 'pricetag'}
                        size={12}
                        color={isAdopt ? '#0d5926' : '#8c1c1c'}
                    />
                    <Text style={[styles.priceText, { color: isAdopt ? '#0d5926' : '#8c1c1c' }]}>
                        {isAdopt ? 'Adopt' : pet.price}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default PetCard;

const { width } = Dimensions.get('window');
const normalize = (size: number) => Math.round((width / 375) * size);

const styles = StyleSheet.create({
    petListCard: {
        marginTop: normalize(20),
        width: normalize(165),
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
        width: normalize(155),
        height: normalize(130),
        borderRadius: normalize(16),
        backgroundColor: '#b06060ff',
        alignSelf: 'center',
        marginTop: normalize(-10),
    },
    petImage: {
        width: normalize(155),
        height: normalize(130),
        borderRadius: normalize(16),
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    petCardInfo: {
        width: '100%',
        borderRadius: normalize(16),
        alignSelf: 'center',
        marginTop: normalize(8),
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
    },
    petCardActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: normalize(4),
    },
    petName: {
        fontSize: normalize(15),
        fontWeight: '700',
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
        marginBottom: normalize(1),
    },
    petAgeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(5),
        marginTop: normalize(2),
    },
    priceTag: {
        position: 'absolute',
        bottom: 0,
        right: normalize(0),
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
    },
});
