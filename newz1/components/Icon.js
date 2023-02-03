import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../consts/colors';

const Iconscreen = ({ navigation }) => {
    const categoryIcons = [
        <Icon1 name="world-o" size={25} color={COLORS.primary} TouchableOpacity={true} onPress={() => navigation.navigate('')} />,
        <Icon name="beach-access" size={25} color={COLORS.primary} />,
        <Icon name="near-me" size={25} color={COLORS.primary} />,
        <Icon name="place" size={25} color={COLORS.primary} />,
    ];
    const ListCategories = () => {
        return (
            <View style={styles.categoryContainer}>
                {categoryIcons.map((icon, index) => (
                    <View key={index} style={styles.iconContainer}>
                        {icon}
                    </View>
                ))}
            </View>
        );
    };

    return (
        <View>
            <ListCategories />
            {/* <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
            >
                <Icon1 />
            </TouchableOpacity> */}
        </View>
    );

};

export default Iconscreen;


const styles = StyleSheet.create({
    categoryContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    iconContainer: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});