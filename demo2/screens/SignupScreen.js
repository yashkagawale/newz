import React from "react";
import {Button, View, Text, StyleSheet} from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <Button 
        title="Click Here" 
        onPress={( ) => ('Button Clicked')}/>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})