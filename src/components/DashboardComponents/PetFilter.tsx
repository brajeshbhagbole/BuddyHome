import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from "../../theme/colors";


const PetFilter = () => {

    const petType = [
        { id: 1, name: "Dogs", image: "https://img.icons8.com/color/48/puppy.png" },
        { id: 2, name: "Cats", image: "https://img.icons8.com/?size=100&id=80616&format=png&color=000000" },
        { id: 3, name: "Rabbits", image: "https://img.icons8.com/?size=100&id=80624&format=png&color=000000" },
        { id: 4, name: "Birds", image: "https://img.icons8.com/?size=100&id=80623&format=png&color=000000" },
        { id: 5, name: "Fish", image: "https://img.icons8.com/?size=100&id=80942&format=png&color=000000" },
        { id: 6, name: "Hamsters", image: "https://img.icons8.com/?size=100&id=81226&format=png&color=000000" }
    ]
    return (<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.petTypeContainer}>

        {petType.map((petType) => (<TouchableOpacity style={styles.petType} key={petType.id}>

            <View style={styles.petTypeIcon}>
                <Image source={{ uri: petType.image }} style={{ width: normalize(50), height: normalize(50) }} />
            </View>
            <Text style={styles.petTypeText}>{petType.name}</Text>
        </TouchableOpacity>))}


    </ScrollView>

    )
}

export default PetFilter;

const width = Dimensions.get("window").width;
const normalize = (size: number) => Math.round((width / 375) * size)
const styles = StyleSheet.create({
    petTypeContainer: {
        marginTop: normalize(20),
        flexDirection: 'row',
        flexGrow: 0,
    },
    petType: {
        width: normalize(85),
        height: normalize(85),
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: normalize(5),
        borderRadius: 50,
        marginRight: normalize(20),
    },
    petTypeIcon: {
        width: normalize(40),
        height: normalize(40),
        marginTop: normalize(8),
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(5),
    },
    petTypeText: {
        color: colors.textPrimary,
        fontSize: normalize(12),
        fontWeight: '600',
        textTransform: 'capitalize',

    }
})