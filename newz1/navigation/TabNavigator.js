import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Fontisto';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

import ForgetPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from "@react-native-async-storage/async-storage";

import SearchScreen from "../screens/SearchScreen";
import Home from "../screens/HomeScreens";
import Health from "../screens/Health";
import Business from "../screens/Business";
import Sports from "../screens/Sports";
import Tech from "../screens/Tech";
import Buttons from "../screens/Country/Buttons";
import { createStackNavigator } from "@react-navigation/stack";
import India from "../screens/Country/India";
import Japan from "../screens/Country/Japan";
import Australia from "../screens/Country/Australia";
import Canada from "../screens/Country/Canada";
import US from "../screens/Country/US";
import UK from "../screens/Country/UK";
import Gremany from "../screens/Country/Germany";
import China from "../screens/Country/China";
import NewZeal from "../screens/Country/NewZeal";
import France from "../screens/Country/France";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function World() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Button"
                component={Buttons} />
            <Stack.Screen
                name="India"
                component={India}
                options={{ header: () => null }} />
            <Stack.Screen
                name="Japan"
                component={Japan}
                options={{ header: () => null }} />
            <Stack.Screen
                name="Australia"
                component={Australia}
                options={{ header: () => null }} />
            <Stack.Screen
                name="Canada"
                component={Canada}
                options={{ header: () => null }} />
            <Stack.Screen
                name="France"
                component={France}
                options={{ header: () => null }} />
            <Stack.Screen
                name="Gremany"
                component={Gremany}
                options={{ header: () => null }} />
            <Stack.Screen
                name="US"
                component={US}
                options={{ header: () => null }} />
            <Stack.Screen
                name="UK"
                component={UK}
                options={{ header: () => null }} />
            <Stack.Screen
                name="NewZeal"
                component={NewZeal}
                options={{ header: () => null }} />
            <Stack.Screen
                name="China"
                component={China}
                options={{ header: () => null }} />
        </Stack.Navigator>
    );
}

function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={30} />)
                }}
            />
            <Tab.Screen
                name="Health"
                component={Health}
                options={{
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={30} />)
                }}

            />
            <Tab.Screen
                name="Tech"
                component={Tech}
                options={{
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="hardware-chip" color={color} size={30} />)
                }}
            />
            <Tab.Screen
                name="search"
                component={SearchScreen}
                options={{
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={40} />)
                }}

            />
            <Tab.Screen
                name="Business"
                component={Business}
                options={{
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="logo-usd" color={color} size={30} />)
                }}
            />
            <Tab.Screen
                name="Sports"
                component={Sports}
                options={{
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="basketball" color={color} size={30} />)
                }}
            />
            <Tab.Screen
                name="World"
                component={World}
                options={{
                    tabBarActiveTintColor: '#DA3349',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="world-o" color={color} size={30} />)//world-o
                }}
            />
        </Tab.Navigator>
    );
}


const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    }, []);

    if (isFirstLaunch === null) {
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Main';
    }

    return (
        // <NavigationContainer>

        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ header: () => null }}
            />
            {/* <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <FontAwesome.Button
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login')}
                            />
                        </View>
                    ),
                })}
            /> */}
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ header: () => null }}
            />
            {/* <Stack.Screen
                name="ForgetPassword"
                component={ForgetPasswordScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="NewPassword"
                component={NewPasswordScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="ConfirmEmail"
                component={ConfirmEmailScreen}
                options={{ header: () => null }}
            /> */}
        </Stack.Navigator>
        // </NavigationContainer>
    );
};

export default AuthStack;