import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const { height, width } = Dimensions.get('window');
const normalize = (v: number) => width * (v / 390);
const normalizeH = (v: number) => height * (v / 844);

const CARD_WIDTH = normalize(200);
const CARD_MARGIN = normalize(16);
const DEFAULT_ITEM_SIZE = CARD_WIDTH + CARD_MARGIN;

type Pet = {
  id: string;
  name: string;
  location: string;
  age: string;
  breed?: string;
  type: 'adopt' | 'sell';
  price: string | null;
  petType?: string;
  image: string;
};

type Props = {
  pet: Pet;
  index: number;
  scrollX: Animated.Value;
  itemSize?: number;
};

const SwipePetCards = ({ pet, index, scrollX, itemSize = DEFAULT_ITEM_SIZE }: Props) => {
  const inputRange = [
    (index - 1) * itemSize,
    index * itemSize,
    (index + 1) * itemSize,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.88, 1, 0.88],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 1, 0.7],
    extrapolate: 'clamp',
  });

  const isAdopt = pet.type === 'adopt';

  return (
    <Animated.View style={[styles.swipeCard, { transform: [{ scale }], opacity }]}>

      {/* Image + Overlays */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: pet.image }} style={styles.image} />

        {/* Type badge top-left */}
        <View style={[styles.typeBadge, isAdopt ? styles.typeBadgeAdopt : styles.typeBadgeSell]}>
          <Ionicons
            name={isAdopt ? 'heart' : 'cart'}
            size={normalize(10)}
            color={isAdopt ? colors.primary : '#F57C00'}
          />
          <Text style={[styles.typeBadgeText, { color: isAdopt ? colors.primary : '#F57C00' }]}>
            {isAdopt ? 'Adopt' : 'Buy'}
          </Text>
        </View>

        {/* Price badge top-right (only for sell) */}
        {!isAdopt && pet.price && (
          <View style={styles.priceBadge}>
            <Text style={styles.priceBadgeText}>{pet.price}</Text>
          </View>
        )}

        {/* Info overlay at bottom of image */}
        <View style={styles.infoOverlay}>
          <View style={styles.nameRow}>
            <Text style={styles.petName}>{pet.name}</Text>
            <View style={styles.ageBadge}>
              <Text style={styles.ageText}>{pet.age}</Text>
            </View>
          </View>
          {pet.breed && (
            <Text style={styles.breedText}>{pet.breed}</Text>
          )}
          <View style={styles.locationRow}>
            <Ionicons name="location-sharp" size={normalize(11)} color="#FFFFFF" />
            <Text style={styles.locationText}>{pet.location}</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.bottomSheet}>
        <TouchableOpacity style={styles.actionBtnSmall} activeOpacity={0.7}>
          <Ionicons name="close" size={normalize(19)} color="#9CA3AF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtnHeart} activeOpacity={0.8}>
          <Ionicons name="heart" size={normalize(24)} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtnSmall} activeOpacity={0.7}>
          <Ionicons name="bookmark-outline" size={normalize(17)} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default SwipePetCards;

const styles = StyleSheet.create({
  swipeCard: {
    width: CARD_WIDTH,
    marginRight: CARD_MARGIN,
    borderRadius: normalize(22),
    backgroundColor: '#FFFFFF',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    elevation: 8,
    padding: normalize(8),
    overflow: 'hidden',
  },

  // Image area
  imageWrapper: {
    width: '100%',
    height: normalizeH(285),
    borderRadius: normalize(16),
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Type badge (top-left)
  typeBadge: {
    position: 'absolute',
    top: normalize(10),
    left: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(3),
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    borderRadius: normalize(10),
    zIndex: 2,
  },
  typeBadgeAdopt: {
    backgroundColor: colors.primaryLight,
  },
  typeBadgeSell: {
    backgroundColor: '#FFF3E0',
  },
  typeBadgeText: {
    fontSize: normalize(10),
    fontWeight: '700',
  },

  // Price badge (top-right)
  priceBadge: {
    position: 'absolute',
    top: normalize(10),
    right: normalize(10),
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: normalize(8),
    paddingVertical: normalize(4),
    borderRadius: normalize(10),
    zIndex: 2,
  },
  priceBadgeText: {
    fontSize: normalize(11),
    fontWeight: '800',
    color: '#FFFFFF',
  },

  // Info overlay
  infoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: normalize(12),
    paddingTop: normalize(22),
    background: 'transparent',
    backgroundColor: 'rgba(0,0,0,0)',
    // gradient-like: darker at bottom
    borderBottomLeftRadius: normalize(16),
    borderBottomRightRadius: normalize(16),
    // We use a solid semi-transparent for compat
    backgroundColor: 'rgba(0,0,0,0.42)',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: normalize(1),
  },
  petName: {
    fontSize: normalize(16),
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.2,
  },
  ageBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: normalize(7),
    paddingVertical: normalize(2),
    borderRadius: normalize(8),
  },
  ageText: {
    fontSize: normalize(10),
    fontWeight: '700',
    color: '#FFFFFF',
  },
  breedText: {
    fontSize: normalize(11),
    color: 'rgba(255,255,255,0.75)',
    fontWeight: '500',
    marginBottom: normalize(3),
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(3),
  },
  locationText: {
    fontSize: normalize(11),
    color: '#E5E7EB',
    fontWeight: '500',
  },

  // Bottom action buttons
  bottomSheet: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: normalize(18),
    paddingVertical: normalizeH(10),
    width: '100%',
  },
  actionBtnSmall: {
    width: normalize(38),
    height: normalize(38),
    borderRadius: normalize(19),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnHeart: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(25),
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#A7F3D0',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});