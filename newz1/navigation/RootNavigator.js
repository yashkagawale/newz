import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Providers from "./index";
import AuthStack from '../navigation/TabNavigator';

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
};

export default RootNavigator;