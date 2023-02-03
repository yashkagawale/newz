import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import FormButton from "../components/FormButton";
import { AuthContext } from "../navigation/AuthProvider";

import { Card, Title, Paragraph } from 'react-native-paper';

// const HomeScreen = ({ navigation }) => {
//     const { logout } = useContext(AuthContext);
//     return (
//         <View style={style.container}>
//             <Text style={style.text}>Welcome</Text>
//             <FormButton buttonTitle="Logout" onPress={() => navigation.navigate('Login')} />
//         </View>
//     );
// }

export default class HomeScreen extends Component {
    state = {
        articles: [],
        isLoading: true,
        errors: null,
    };

    getArticles() {
        axios
            .get(
                "https://newsapi.org/v2/everything?q=Apple&from=2022-12-17&sortBy=popularity&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3"
            )
            .then(response =>
                response.data.articles.map(article => ({
                    date: '${article.publishedAt}',
                    title: '${article.title}',
                    url: '${article.url}',
                    description: '${article.description}',
                    urlToImage: '${article.urlToImage}',
                }))
            )
            .then(articles => {
                this.setState({
                    articles,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
    componentDidCatch() {
        this.getArticles();
    }

    render() {
        const { isLoading, articles } = this.state;
        // const HomeScreen = ({ navigation }) => {
        //     const { logout } = useContext(AuthContext);
        return (
            <View style={style.container}>
                <Text style={style.text}>Welcome</Text>
                <ScrollView>
                    {!isLoading ? (
                        articles.map(article => {
                            const { date, title, url, description, urlToImage } = art;
                            return (
                                <Card
                                    key={url}
                                    style={{ marginTop: 10, borderColor: 'black', borderRadius: 5, borderBottomWidth: 1 }}
                                    onPress={() => { Linking.openURL('${url}') }}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        {/* text */}
                                        <View style={{ justifyContent: 'space-around', flex: 2 / 3, margin: 10 }}>
                                            <Title>{title}</Title>
                                        </View>
                                        {/* Image */}
                                        <View style={{ flex: 1 / 3, margin: 10 }}>
                                            <Image style={{ width: 120, height: 120 }} source={{ uri: urlToImage }} />
                                        </View>
                                    </View>
                                    <View style={{ margin: 10 }}>
                                        <Paragraph>{description}</Paragraph>
                                        <Text>Pusblished At: {data}</Text>
                                    </View>

                                </Card>
                            );
                        })
                    ) : (
                        <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</Text>
                    )}
                </ScrollView>
                <FormButton buttonTitle="Logout" onPress={() => navigation.navigate('Login')} />
            </View>
        );
        // }

    }
}

// export default HomeScreen;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alginItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333',
        justifyContent: 'center',
        alginItems: 'center',
    }
})