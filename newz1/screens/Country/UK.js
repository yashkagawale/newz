import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text, FlatList, ActivityIndicator, ScrollView, Image, Statusbar } from 'react-native';
import Card from '../../components/Card';
import newAPI from '../../apis/News';
import themeContext from '../../config/themeContext';

const UK = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [newstech, setNewsTech] = useState([])

    useEffect(() => {
        getNewsFromAPI()
    }, [])

    /* const newsResponse = async() => {
        const response = await newAPI.get('everything?q=tesla&from=2021-07-19&sortBy=publishedAt&apiKey=920deb9f754348c0bec4871fef36d971')
        console.log(response.data)
    } */

    function getNewsFromAPI() {
        newAPI.get('https://newsapi.org/v2/top-headlines?country=gb&category=general&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3')
            .then(async function (response) {
                setNewsTech(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false);
            })
    }

    if (!newstech) {
        return null
    }
    const theme = useContext(themeContext);
    return (
        <ScrollView style={{ backgroundColor: theme.backColor }}>
            <View style={styles.smallheader}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/flags/uk.png')} />
                <Text style={styles.textsh}>UK</Text>
            </View>

            {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
                <FlatList
                    data={newstech.articles}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({ item }) => (
                        <Card
                            item={item}
                        />
                    )}
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    midText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20
    },
    smallheader: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    textsh: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default UK