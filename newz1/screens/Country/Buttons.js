import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import India from './India';
import Home from '../HomeScreens';
import { ThemedButton } from 'react-native-really-awesome-button';
import { ScrollView } from 'react-native-gesture-handler';

const Buttons = ({ navigation }) => {

    return (
        <ScrollView>

            <View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('India')}>
                        <Text style={styles.text}>India</Text>
                    </Button>
                    {/* <ThemedButton name="bruce" type="primary">Rick's Primary Button</ThemedButton> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Japan')}>
                        <Text style={styles.text}>Japan</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Japan')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Australia')}>
                        <Text style={styles.text}>Australia</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Australia')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Canada')}>
                        <Text style={styles.text}>Canada</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Canada')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('France')}>
                        <Text style={styles.text}>France</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('France')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('Gremany')}>
                        <Text style={styles.text}>Gremany</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Gremany')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('US')}>
                        <Text style={styles.text}>US</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('US')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('UK')}>
                        <Text style={styles.text}>UK</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('UK')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('NewZeal')}>
                        <Text style={styles.text}>New Zealand</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('NewZeal')}>
                    Press me
                </Button> */}
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('China')}>
                        <Text style={styles.text}>China</Text>
                    </Button>
                    {/* <Button icon="camera" mode="contained" onPress={() => navigation.navigate('China')}>
                    Press me
                </Button> */}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default Buttons;



