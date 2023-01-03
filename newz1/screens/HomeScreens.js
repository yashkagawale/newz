import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
// import COLORS from '../consts/colors';
// import places from '../consts/places';
import COLORS from '../consts/colors';
import places from '../consts/places';


const { width } = Dimensions.get('window');
const HomeScreen = ({ navigation }) => {
  const categoryIcons = [
    <Icon1 name="world-o" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="near-me" size={25} color={COLORS.primary} />,
    <Icon name="place" size={25} color={COLORS.primary} />,
  ];
  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailScreen', place)}>
        <ImageBackground style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: COLORS.white, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Explore the</Text>
            <Text style={style.headerTitle}>world with Us</Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{ color: COLORS.black }}
              />
            </View>
          </View>
        </View>
        <ListCategories />
        <Text style={style.sectionTitle}></Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({ item }) => <Card place={item} />}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({ item }) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default HomeScreen;




// import React, { Component, useContext } from "react";
// import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
// import FormButton from "../components/FormButton";
// import { AuthContext } from "../navigation/AuthProvider";

// import { Card, Title, Paragraph } from 'react-native-paper';

// const HomeScreen = ({ navigation }) => {
//   const { logout } = useContext(AuthContext);
//   return (
//     <View style={style.container}>
//       <Text style={style.text}>Welcome</Text>
//       <FormButton buttonTitle="Logout" onPress={() => navigation.navigate('Login')} />
//     </View>
//   );
// }

// export default class HomeScreen extends Component {
//   state = {
//     articles: [],
//     isLoading: true,
//     errors: null,
//   };

//   getArticles() {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?q=Apple&from=2022-12-17&sortBy=popularity&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3"
//       )
//       .then(response =>
//         response.data.articles.map(article => ({
//           date: '${article.publishedAt}',
//           title: '${article.title}',
//           url: '${article.url}',
//           description: '${article.description}',
//           urlToImage: '${article.urlToImage}',
//         }))
//       )
//       .then(articles => {
//         this.setState({
//           articles,
//           isLoading: false
//         });
//       })
//       .catch(error => this.setState({ error, isLoading: false }));
//   }
//   componentDidCatch() {
//     this.getArticles();
//   }

//   render() {
//     const { isLoading, articles } = this.state;
//     const HomeScreen = ({ navigation }) => {
//       const { logout } = useContext(AuthContext);
//       return (
//         <View style={style.container}>
//           <Text style={style.text}>Welcome</Text>
//           <ScrollView>
//             {!isLoading ? (
//               articles.map(article => {
//                 const { date, title, url, description, urlToImage } = art;
//                 return (
//                   <Card
//                     key={url}
//                     style={{ marginTop: 10, borderColor: 'black', borderRadius: 5, borderBottomWidth: 1 }}
//                     onPress={() => { Linking.openURL('${url}') }}
//                   >
//                     <View style={{ flexDirection: 'row' }}>
//                       {/* text */}
//                       <View style={{ justifyContent: 'space-around', flex: 2 / 3, margin: 10 }}>
//                         <Title>{title}</Title>
//                       </View>
//                       {/* Image */}
//                       <View style={{ flex: 1 / 3, margin: 10 }}>
//                         <Image style={{ width: 120, height: 120 }} source={{ uri: urlToImage }} />
//                       </View>
//                     </View>
//                     <View style={{ margin: 10 }}>
//                       <Paragraph>{description}</Paragraph>
//                       <Text>Pusblished At: {data}</Text>
//                     </View>

//                   </Card>
//                 );
//               })
//             ) : (
//               <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</Text>
//             )}
//           </ScrollView>
//           <FormButton buttonTitle="Logout" onPress={() => navigation.navigate('Login')} />
//         </View>
//       );
//     }

//   }
// }

// export default HomeScreen;

// const style = StyleSheet.create({
//   container: {
//     backgroundColor: '#f9fafd',
//     flex: 1,
//     justifyContent: 'center',
//     alginItems: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 20,
//     color: '#333333',
//     justifyContent: 'center',
//     alginItems: 'center',
//   }
// })





// import React, { useContext } from "react";
// import { View, Text, StyleSheet } from 'react-native';
// import FormButton from "../components/FormButton";
// import { AuthContext } from "../navigation/AuthProvider";

// const HomeScreen = ({ navigation }) => {
//   const { logout } = useContext(AuthContext);
//   return (
//     <View style={style.container}>
//       <Text style={style.text}>Welcome</Text>
//       <FormButton buttonTitle="Logout" onPress={() => navigation.navigate('Login')} />
//     </View>
//   );
// }

// export default HomeScreen;

// const style = StyleSheet.create({
//   container: {
//     backgroundColor: '#f9fafd',
//     flex: 1,
//     justifyContent: 'center',
//     alginItems: 'center',
//     padding: 20,
//   },
//   text: {
//     fontSize: 20,
//     color: '#333333',
//     justifyContent: 'center',
//     alginItems: 'center',
//   }
// })