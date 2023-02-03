import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import HomeScreen from './HomeScreens';
import { AuthContext } from '../navigation/AuthProvider';



const ConfirmEmailScreen = ({ navigation }) => {
    const [code, setCode] = useState();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.text}>Confirm your Email</Text>
                <FormInput
                    labelValue={code}
                    onChangeText={(code) => setCode()}
                    placeholderText="Code"
                    iconType="ellipsis1"
                    // keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />



                <FormButton
                    buttonTitle="Send"
                    // onPress={() => alert('Sign up Clicked')}
                    onPress={() => navigation.navigate('')}
                />
                <FormButton
                    buttonTitle="Resend code"
                    // onPress={() => alert('Sign up Clicked')}
                    onPress={() => navigation.navigate('')}
                />

                {/* <View>
                    <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                        <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                            Resend code
                        </Text>
                    </TouchableOpacity>
                </View> */}


                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.navButton}>Have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        // fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});
