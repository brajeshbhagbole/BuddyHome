import { StyleSheet, Image, TouchableOpacity, Dimensions, Animated, View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get("window");
const normalize = (value: number) => width * (value / 390);
const normalizeHeight = (value: number) => height * (value / 844);

const CARD_WIDTH = normalize(185);
const CARD_MARGIN = normalize(20);
const ITEM_SIZE = CARD_WIDTH + CARD_MARGIN;

const SwipePetCards = ({ pet, index, scrollX }: { pet: any; index: number; scrollX: Animated.Value }) => {
    const inputRange = [(index - 1) * ITEM_SIZE, index * ITEM_SIZE, (index + 1) * ITEM_SIZE];
    const scale = scrollX.interpolate({ inputRange, outputRange: [0.85, 1, 0.85], extrapolate: 'clamp' });

    return (
        <Animated.View style={[styles.swipeCard, { transform: [{ scale }] }]}>
            <Animated.View style={styles.imageWrapper}>
                <Animated.Image source={{ uri: pet.image }} style={styles.image} />

                {/* Pet Info Gradient Overlay */}
                <View style={styles.infoOverlay}>
                    <View style={styles.nameRow}>
                        <Text style={styles.petName}>{pet.name}</Text>
                        <View style={styles.ageBadge}>
                            <Text style={styles.ageText}>{pet.age}</Text>
                        </View>
                    </View>
                    <View style={styles.locationRow}>
                        <Ionicons name="location-sharp" size={12} color="#FFFFFF" />
                        <Text style={styles.locationText}>{pet.location}</Text>
                    </View>
                </View>
            </Animated.View>

            {/* Bottom Actions */}
            <Animated.View style={styles.bottomSheet}>
                <TouchableOpacity style={styles.actionBtnSmall} activeOpacity={0.7}>
                    <Ionicons name="close" size={20} color="#9CA3AF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtnHeart} activeOpacity={0.8}>
                    <Ionicons name="heart" size={26} color="#059669" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBtnSmall} activeOpacity={0.7}>
                    <Ionicons name="bookmark-outline" size={18} color="#9CA3AF" />
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
};

export default SwipePetCards;

const styles = StyleSheet.create({
    swipeCard: {
        width: CARD_WIDTH,
        height: normalizeHeight(300),
        borderRadius: normalize(20),
        marginRight: CARD_MARGIN,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: normalize(10),
        shadowColor: '#059669',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        elevation: 6,
    },
    imageWrapper: {
        width: normalize(165),
        height: normalizeHeight(220),
        borderRadius: normalize(16),
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: normalize(10),
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: normalize(2),
    },
    petName: {
        fontSize: normalize(15),
        fontWeight: '800',
        color: '#FFFFFF',
    },
    ageBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        paddingHorizontal: normalize(6),
        paddingVertical: normalize(2),
        borderRadius: normalize(8),
    },
    ageText: {
        fontSize: normalize(10),
        fontWeight: '700',
        color: '#FFFFFF',
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: normalize(4),
    },
    locationText: {
        fontSize: normalize(11),
        color: '#E5E7EB',
        fontWeight: '500',
    },
    bottomSheet: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: normalize(18),
        marginTop: normalizeHeight(10),
        width: '100%',
    },
    actionBtnSmall: {
        width: normalize(36),
        height: normalize(36),
        borderRadius: normalize(18),
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionBtnHeart: {
        width: normalize(46),
        height: normalize(46),
        borderRadius: normalize(23),
        backgroundColor: '#ECFDF5',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#A7F3D0',
        shadowColor: '#059669',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
    },
});