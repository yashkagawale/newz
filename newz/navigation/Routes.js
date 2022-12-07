import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {AuthContext} from './AuthProvider'
import auth from '@react-native-firebase/auth' 


import AuthStack from "./AuthStack";
import AppStack from './AppStack';

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [intializing, setInitializing] = useState(true);

    const onAuthStateChange = (user) => {
        setUser(user);
        if(intializing) setInitializing(false);
    }

    useEffect (() => {
        const subscriber = auth().onAuthStateChange(onAuthStateChange);
        return subscriber;
    }, []);

    if(intializing) return null;

    return (
        <NavigationContainer>
            {user ? <AppStack/> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;