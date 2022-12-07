import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import FormButton from '../components/FormButton';

const HomeScreen = () => {

return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text> 
        <FormButton button Title= 'Logout' onPress={() => {}} /> 
    </View>
    );
}


export default HomeScreen;

const styles = StyleSheet.create({ 
    container: {
        backgroundColor:'#f9fafd',  
        flex: 1, 
        justifyContent: 'cegter',
        alignItems: 'center',
        padding: 20,
        
    },
    text: {
        fontSize: 20, 
        color: '#333333'
        
    }




});