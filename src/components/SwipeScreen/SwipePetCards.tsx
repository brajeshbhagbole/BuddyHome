import { StyleSheet, Image, TouchableOpacity, Dimensions, Animated } from "react-native";
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
            <Animated.Image source={{ uri: pet.image }} style={styles.image} />
            <Animated.View style={styles.bottomSheet}>
                <TouchableOpacity>
                    <Ionicons name="close" size={24} color="#D0D0D0" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: normalizeHeight(12) }}>
                    <Ionicons name="heart" size={36} color="#087063" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="folder-outline" size={22} color="#D0D0D0" />
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
};

export default SwipePetCards;

const styles = StyleSheet.create({
    swipeCard: {
        width: CARD_WIDTH,
        height: normalizeHeight(290),
        elevation: 4,
        borderRadius: normalize(16),
        marginRight: CARD_MARGIN,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: normalizeHeight(10),
        overflow: 'hidden',
    },
    image: {
        width: normalize(165),
        height: normalizeHeight(220),
        borderRadius: normalize(16),
        resizeMode: "cover",
    },
    bottomSheet: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: normalize(24),
        marginTop: normalizeHeight(10),
    },
});