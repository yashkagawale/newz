import React from "react";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreens'

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AppStack;