import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import SwipePetCards from '../../components/SwipeScreen/SwipePetCards';
import { useRef } from 'react';
const topPicks = [
  {
    id: '13',
    name: 'Tuffy',
    location: 'Indore, M.P',
    age: '3 m+',
    type: 'adopt',
    price: null,
    image:
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '14',
    name: 'Mochi',
    location: 'Bhopal, M.P',
    age: '4 m+',
    type: 'adopt',
    price: null,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '15',
    name: 'Toffee',
    location: 'Pune, M.H',
    age: '5 m+',
    type: 'sell',
    price: '₹6,500',
    image:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '16',
    name: 'Snowy',
    location: 'Mumbai, M.H',
    age: '3 m+',
    type: 'adopt',
    price: null,
    image:
      'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '17',
    name: 'Cookie',
    location: 'Delhi, D.L',
    age: '6 m+',
    type: 'sell',
    price: '₹4,800',
    image:
      'https://images.unsplash.com/photo-1593134257782-e89567b7718a?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '18',
    name: 'Ollie',
    location: 'Jaipur, R.J',
    age: '4 m+',
    type: 'adopt',
    price: null,
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '19',
    name: 'Misty',
    location: 'Ahmedabad, G.J',
    age: '7 m+',
    type: 'sell',
    price: '₹5,500',
    image:
      'https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '20',
    name: 'Biscuit',
    location: 'Nagpur, M.H',
    age: '3 m+',
    type: 'adopt',
    price: null,
    image:
      'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '21',
    name: 'Nala',
    location: 'Nashik, M.H',
    age: '5 m+',
    type: 'adopt',
    price: null,
    image:
      'https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=687&auto=format&fit=crop',
  },
  {
    id: '22',
    name: 'Peanut',
    location: 'Bengaluru, K.A',
    age: '4 m+',
    type: 'sell',
    price: '₹7,200',
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=687&auto=format&fit=crop',
  },
];

const SwipeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const cardWidth = normalizeWidth(185);
  const paddingLeft = (width - cardWidth) / 2;
  const [activeCategory, setActiveCategory] = React.useState(0);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top Pick's</Text>
      </View>

      {/* Cards Area */}
      <View style={styles.container}>
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={topPicks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <SwipePetCards pet={item} index={index} scrollX={scrollX} />
          )}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          snapToInterval={normalizeWidth(185) + normalizeWidth(20)}
          snapToAlignment="start"
          decelerationRate="fast"
          contentContainerStyle={{
            paddingLeft: paddingLeft,
            paddingRight: paddingLeft - normalizeWidth(20),
            alignItems: 'center',
          }}
        />
      </View>

      {/* Swipe Hint */}
      <View style={styles.hintBar}>
        <Text style={styles.hintText}>← Swipe cards to explore more pets →</Text>
      </View>
    </SafeAreaView>
  );
};

export default SwipeScreen;

const { height, width } = Dimensions.get('window');
const normalizeHeight = (value: number) => (height / 844) * value;
const normalizeWidth = (value: number) => (width / 390) * value;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF7F3',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hintBar: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  hintText: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    opacity: 0.7,
  },
});
