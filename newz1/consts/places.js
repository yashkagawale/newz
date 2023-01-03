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

export default class places extends Component {
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

}















// const places = [
//   {
//     id: '1',
//     name: 'Lago di Braies, Braies',
//     location: 'Italy',
//     image: require('../assets/location1.jpg'),
//     details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
//   },
//   {
//     id: '2',
//     name: 'Siargao island',
//     location: 'Philippines',
//     image: require('../assets/location2.jpg'),
//     details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
//   },
//   {
//     id: '3',
//     name: 'Manarola',
//     location: 'Italy',
//     image: require('../assets/location3.jpg'),
//     details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
//   },
//   {
//     id: '4',
//     name: 'Perhentian Islands',
//     location: 'Malaysia',
//     image: require('../assets/location4.jpg'),
//     details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit.`,
//   },
// ];

// export default places;
