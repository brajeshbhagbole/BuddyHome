import { Text, Image, View, useWindowDimensions, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const OnboardingRole = () => {
    const { width, height } = useWindowDimensions();

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/images/logo.png')} style={{
                    width: width * 0.12,
                    height: width * 0.12,
                    borderRadius: 10,
                }} resizeMode="cover" />
                <Text style={styles.logoText}>
                    <Text style={styles.logoTextBold}>Buddy</Text>
                    <Text style={styles.logoTextGreen}>Home</Text>
                </Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 5, marginTop: 20 }}>
                <Text style={styles.adoptText}>Adopt. Shop. Care.</Text>
                <Text style={styles.subText}>One App. Every pet.💚</Text>
            </View>
            <View>
                <View>
                    <Image source={require('../assets/userLogo.png')} style={{
                        width: width * 0.45,
                        height: width * 0.45,
                        borderRadius: 10,
                    }} />
                    <Text>Paw Lover</Text>
                </View>
                <View>
                    <Image source={require('../assets/shop.png')} style={{
                        width: width * 0.45,
                        height: width * 0.45,
                        borderRadius: 10,
                    }} />
                    <Text>Shop Owner</Text>
                </View>
                <View>
                    <Image source={require('../assets/ngo.png')} style={{
                        width: width * 0.45,
                        height: width * 0.45,
                        borderRadius: 10,
                    }} />
                    <Text>NGO/Rescuer</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default OnboardingRole;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    // ── Decorative background ──────────────────────────────
    blob: {
        position: 'absolute',
        backgroundColor: '#D6F0E0',
        opacity: 0.55,
    },
    heartDecor: {
        position: 'absolute',
        fontSize: 22,
        color: '#BBBBBB',
        opacity: 0.55,
        fontWeight: '300',
    },

    // ── Header ────────────────────────────────────────────
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 4,
    },
    logoText: {
        fontSize: 26,
        letterSpacing: 0.3,
    },
    logoTextBold: {
        fontWeight: '900',
        color: '#111111',
    },
    logoTextGreen: {
        fontWeight: '900',
        color: '#0A804A',
    },
    // Adopt text  
    adoptText: {
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0.4,
        color: '#4b4646ff',
    },
    subText: {
        fontSize: 16,
        color: '#0A804A',
        fontWeight: '800',
        letterSpacing: 0.3,
    },

});