import React, { Component } from 'react'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import COLORS from '../consts/colors';
import newAPI from '../apis/News';
import TrendNews from '../screens/TrendNews';
import { Picker } from '@react-native-picker/picker';
import Card from '../components/Card';
import themeContext from '../config/themeContext';


//API call
const HomeScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [news, setNews] = useState([])

  useEffect(() => {
    getNewsFromAPI()
  }, [])



  function getNewsFromAPI() {
    newAPI.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3')
      .then(async function (response) {
        setNews(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      })
  }

  if (!news) {
    return null
  }

  //Picker

  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('India');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${selectedTopic}&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedTopic]);

  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleContainer}>
      <Text style={styles.articleTitle}>{item.title}</Text>
    </TouchableOpacity>
  );



  //Theme
  const theme = useContext(themeContext);
  const [isEnabled, setIsEnabled] = useState(false);


  //Dates
  var date = new Date().getDate();
  function months() {

    var month = new Date().getMonth() + 1; //To get the Current Month

    if (month == 1) {
      return "January"
    } else if (month == 2) {
      return "February"
    } else if (month == 3) {
      return "March"
    } else if (month == 4) {
      return "April"
    } else if (month == 5) {
      return "May"
    } else if (month == 6) {
      return "June"
    } else if (month == 7) {
      return "July"
    } else if (month == 8) {
      return "August"
    } else if (month == 9) {
      return "September"
    } else if (month == 10) {
      return "October"
    } else if (month == 11) {
      return "November"
    } else if (month == 12) {
      return "December"
    }
  }
  var year = new Date().getFullYear();

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: theme.backColor }}>
        <StatusBar translucent={false} backgroundColor={theme.backColor} />
        <View style={styles.header1}

        >

          <Text style={styles.mainText}>Newz</Text>
        </View>
        <ScrollView>
          <View>
            <TouchableOpacity style={{
              backgroundColor: theme.cardBackground,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              width: 140,
              padding: 10,
              marginTop: 20,
              marginLeft: 20,
              elevation: 3
            }}>
              <Text style={{
                color: theme.textColor,
                fontSize: 17,
                fontWeight: 'bold'
              }}
              >
                📅 {months()} {date}
              </Text>
            </TouchableOpacity>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 20,
              color: theme.textColor
            }}
            >Trending News</Text>
            {isLoading ? <ActivityIndicator size="large" color="#DA3349" /> : (
              <TrendNews />
            )}

            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 0.5,
                width: '90%',
                alignSelf: 'center',
                marginTop: 5
              }}
            />
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              marginLeft: 20,
              color: theme.textColor
            }}
            >Recent News</Text>
            <Picker
              style={styles.picker}
              selectedValue={selectedTopic}
              onValueChange={topic => setSelectedTopic(topic)}
            >
              <Picker.Item label="India" value="in" />
              <Picker.Item label="USA" value="us" />
              <Picker.Item label="UK" value="uk" />
              <Picker.Item label="Japan" value="jp" />
              <Picker.Item label="Australia" value="au" />
              <Picker.Item label="NewZealand" value="nz" />
            </Picker>
            <FlatList
              data={articles}
              // renderItem={renderArticle}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({ item }) => (
                <Card
                  item={item}
                />
              )}
              style={{ marginBottom: 65 }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainText: {
    backgroundColor: COLORS.primary,
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 60,
    height: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  header1: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
});


export default HomeScreen;




// const { width } = Dimensions.get('window');
// // const Home = ({ navigation }) => { };

// // const SearchScreen = () => {
// //   const [searchText, setSearchText] = useState("");
// //   const [articles, setArticles] = useState([]);

// //   const searchArticles = () => {
// //     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9', {
// //       params: {
// //         category: "technology",
// //         q: searchText
// //       }
// //     })
// //       .then((response) => {
// //         // handle success
// //         setArticles(response.data.articles);
// //       })
// //       .catch(function (error) {
// //         // handle error
// //         console.log(error);
// //       })
// //       .then(function () {
// //         // always executed
// //       });
// //   }
// // }
// // const categoryIcons = [
// //   <Icon1 name="world-o" size={25} color={COLORS.primary} />,
// //   <Icon name="beach-access" size={25} color={COLORS.primary} />,
// //   <Icon name="near-me" size={25} color={COLORS.primary} />,
// //   <Icon name="place" size={25} color={COLORS.primary} />,
// // ];
// // const ListCategories = () => {
// //   return (
// //     <View style={styles.categoryContainer}>
// //       {categoryIcons.map((icon, index) => (
// //         <View key={index} style={styles.iconContainer}>
// //           {icon}
// //         </View>
// //       ))}
// //     </View>
// //   );
// // };



// export default class HomeScreen extends Component {

//   state = {
//     articles: [],
//     isLoading: true,
//     errors: null
//   };

//   getArticles() {
//     axios
//       .get(
//         "https://newsapi.org/v2/everything?q=Apple&from=2022-12-17&sortBy=popularity&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3"
//       )
//       .then(response =>
//         response.data.articles.map(article => ({
//           date: `${article.publishedAt}`,
//           title: `${article.title}`,
//           url: `${article.url}`,
//           description: `${article.description}`,
//           urlToImage: `${article.urlToImage}`,
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

//   componentDidMount() {
//     this.getArticles();
//   }


//   render() {
//     const { isLoading, articles } = this.state;
//     return (
//       <SafeAreaView>
//         <View>
//           {/* <Header /> */}
//           <ScrollView>
//             <StatusBar translucent={false} backgroundColor={theme.backColor} />
//             <View style={styles.header}>
//               <Icon name="sort" size={28} color={COLORS.white} />
//               {/* <Icon name="notifications-none" size={28} color={COLORS.white} /> */}
//             </View>

//             <View style={{ backgroundColor: theme.backColor }}>
//               <StatusBar backgroundColor={theme.backColor} />
//               <View
//                 style={{
//                   backgroundColor: COLORS.primary,
//                   height: 120,
//                   paddingHorizontal: 20,
//                 }}>
//                 <View style={{ flex: 1 }}>
//                   <Text style={styles.headerTitle}>Explore the</Text>
//                   <Text style={styles.headerTitle}>world with Us</Text>
//                   {/* <View style={styles.inputContainer}>
//                   <Icon name="search" size={28} />
//                   <TextInput
//                     placeholder="Search place"
//                     style={{ color: COLORS.black }}
//                   />
//                 </View> */}
//                 </View>
//               </View>
//             </View>
//             {/* <Search /> */}
//             {/* <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles} /> */}
//             {/* <Iconscreen /> */}
//             {!isLoading ? (
//               articles.map(article => {
//                 const { date, title, url, description, urlToImage } = article;
//                 return (
//                   <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={() => navigation.navigate('DetailsScreen', place)}>

//                     <Card key={url} style={{ marginTop: 10, borderColor: 'black', borderRadius: 5, borderBottomWidth: 1 }}
//                     // onPress={() => { Linking.openURL(`${url}`) }}
//                     // onPress={() => navigation.navigate('Signup')}
//                     >
//                       <View style={{ flexDirection: 'row', }}>
//                         {/*  Text */}
//                         <View style={{ justifyContent: 'space-around', flex: 2 / 3, margin: 10 }}>
//                           <Title>{title}</Title>
//                         </View>
//                         {/*  Image */}
//                         <View style={{ flex: 1 / 3, margin: 10 }}>
//                           <Image style={{ width: 120, height: 120 }} source={{ uri: urlToImage }} />
//                         </View>
//                       </View>
//                       <View style={{ margin: 10 }}>
//                         <Paragraph>{description}</Paragraph>
//                         <Text>Published At: {date}</Text>
//                       </View>
//                     </Card>
//                   </TouchableOpacity>
//                 );
//               })
//             ) : (
//               <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</Text>
//             )}
//           </ScrollView>
//         </View>
//       </SafeAreaView>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   mainText: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: 'bold',
//     margin: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingRight: 60,
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },


//   header: {
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: COLORS.primary,
//   },
//   headerTitle: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//     fontSize: 23,
//   },
//   inputContainer: {
//     height: 60,
//     width: '100%',
//     backgroundColor: COLORS.white,
//     borderRadius: 10,
//     position: 'absolute',
//     top: 90,
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     elevation: 12,
//   },
//   categoryContainer: {
//     marginTop: 60,
//     marginHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   iconContainer: {
//     height: 60,
//     width: 60,
//     backgroundColor: COLORS.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   sectionTitle: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   cardImage: {
//     height: 220,
//     width: width / 2,
//     marginRight: 20,
//     padding: 10,
//     overflow: 'hidden',
//     borderRadius: 10,
//   },
//   rmCardImage: {
//     width: width - 40,
//     height: 200,
//     marginRight: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     padding: 10,
//   },
// });
// export default HomeScreen;









// import React, { useEffect, useState, useContext } from 'react'; import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   ImageBackground,
//   FlatList,
//   Dimensions,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon1 from 'react-native-vector-icons/Fontisto';
// // import COLORS from '../consts/colors';
// // import places from '../consts/places';
// import COLORS from '../consts/colors';
// import places from '../consts/places';
// import newAPI from '../apis/News';
// import Card from '../components/Card';
// import themeContext from '../config/themeContext';
// import TrendNews from '../screens/TrendNews';



// const { width } = Dimensions.get('window');
// const HomeScreen = ({ navigation }) => {

//   const categoryIcons = [
//     <Icon1 name="world-o" size={25} color={COLORS.primary} />,
//     <Icon name="beach-access" size={25} color={COLORS.primary} />,
//     <Icon name="near-me" size={25} color={COLORS.primary} />,
//     <Icon name="place" size={25} color={COLORS.primary} />,
//   ];
//   const ListCategories = () => {
//     return (
//       <View style={styles.categoryContainer}>
//         {categoryIcons.map((icon, index) => (
//           <View key={index} style={styles.iconContainer}>
//             {icon}
//           </View>
//         ))}
//       </View>
//     );
//   };

//   const [isLoading, setLoading] = useState(true);
//   const [news, setNews] = useState([])

//   useEffect(() => {
//     getNewsFromAPI()
//   }, [])

//   // const newsResponse = async () => {
//   //   const response = await newAPI.get('everything?q=tesla&from=2021-07-19&sortBy=publishedAt&apiKey=920deb9f754348c0bec4871fef36d971')
//   //   console.log(response.data)
//   // }

//   function getNewsFromAPI() {
//     newAPI.get('top-headlines?country=us&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3')
//       .then(async function (response) {
//         setNews(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .finally(function () {
//         setLoading(false);
//       })
//   }

//   if (!news) {
//     return null
//   }


//   //Theme
//   const theme = useContext(themeContext);
//   const [isEnabled, setIsEnabled] = useState(false);


//   //Dates
//   var date = new Date().getDate();
//   function months() {

//     var month = new Date().getMonth() + 1; //To get the Current Month

//     if (month == 1) {
//       return "January"
//     } else if (month == 2) {
//       return "February"
//     } else if (month == 3) {
//       return "March"
//     } else if (month == 4) {
//       return "April"
//     } else if (month == 5) {
//       return "May"
//     } else if (month == 6) {
//       return "June"
//     } else if (month == 7) {
//       return "July"
//     } else if (month == 8) {
//       return "August"
//     } else if (month == 9) {
//       return "September"
//     } else if (month == 10) {
//       return "October"
//     } else if (month == 11) {
//       return "November"
//     } else if (month == 12) {
//       return "December"
//     }
//   }
//   var year = new Date().getFullYear();

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: theme.backColor }}>
//       <StatusBar translucent={false} backgroundColor={theme.backColor} />
//       <View style={styles.header}>
//         <Icon name="sort" size={28} color={COLORS.white} />
//         <Icon name="notifications-none" size={28} color={COLORS.white} />
//       </View>
//       <View style={{ backgroundColor: theme.backColor }}>
//         <StatusBar
//           backgroundColor={theme.backColor}
//         />
//         <View
//           style={{
//             backgroundColor: COLORS.primary,
//             height: 120,
//             paddingHorizontal: 20,
//           }}>
//           <View style={{ flex: 1 }}>
//             <Text style={styles.headerTitle}>Explore the</Text>
//             <Text style={styles.headerTitle}>world with Us</Text>
//             <View style={styles.inputContainer}>
//               <Icon name="search" size={28} />
//               <TextInput
//                 placeholder="Search place"
//                 style={{ color: COLORS.black }}
//               />
//             </View>
//           </View>
//         </View>
//         <ListCategories />
//         <Text style={styles.sectionTitle}></Text>
//         <View style={{
//           backgroundColor: theme.headerColor,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           elevation: 8,

//         }}
//         >
//           {/* <Image
//           source={require('../assets/img/header-logo.png')}
//           style={{ width: 65, height: 65, alignSelf: 'flex-start', paddingLeft: 10, marginLeft: 10 }}
//         /> */}
//           {/* <Text style={styles.mainText}>The NewsX Times</Text> */}
//         </View>
//         <ScrollView>
//           <View>
//             {/* <TouchableOpacity style={{
//               backgroundColor: theme.cardBackground,
//               borderRadius: 25,
//               justifyContent: 'center',
//               alignItems: 'center',
//               width: 140,
//               padding: 10,
//               marginTop: 20,
//               marginLeft: 20,
//               elevation: 3
//             }}>
//               <Text style={{
//                 color: theme.textColor,
//                 fontSize: 17,
//                 fontWeight: 'bold'
//               }}
//               >
//                 📅 {months()} {date}
//               </Text>
//             </TouchableOpacity> */}
//             <Text style={{
//               fontSize: 30,
//               fontWeight: 'bold',
//               marginTop: 10,
//               marginLeft: 20,
//               color: theme.textColor
//             }}
//             >Trending News</Text>
//             {isLoading ? <ActivityIndicator size="large" color="#DA3349" /> : (
//               <TrendNews />
//             )}
//           </View>
//         </ScrollView>
//         <View
//           style={{
//             borderBottomColor: 'gray',
//             borderBottomWidth: 0.5,
//             width: '90%',
//             alignSelf: 'center',
//             marginTop: 5
//           }}
//         >
//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             marginTop: 10,
//             marginLeft: 20,
//             color: theme.textColor
//           }}
//           >Recent News</Text>
//           <FlatList
//             data={news.articles}
//             keyExtractor={(item, index) => 'key' + index}
//             renderItem={({ item }) => (
//               <Card
//                 item={item}
//               />
//             )}
//             style={{ marginBottom: 65 }}
//           />
//         </View>
//         {/* </View>
//         </ScrollView> */}
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   mainText: {
//     color: 'white',
//     fontSize: 28,
//     fontWeight: 'bold',
//     margin: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingRight: 60,
//   },
//   header: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },


//   header: {
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: COLORS.primary,
//   },
//   headerTitle: {
//     color: COLORS.white,
//     fontWeight: 'bold',
//     fontSize: 23,
//   },
//   inputContainer: {
//     height: 60,
//     width: '100%',
//     backgroundColor: COLORS.white,
//     borderRadius: 10,
//     position: 'absolute',
//     top: 90,
//     flexDirection: 'row',
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     elevation: 12,
//   },
//   categoryContainer: {
//     marginTop: 60,
//     marginHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   iconContainer: {
//     height: 60,
//     width: 60,
//     backgroundColor: COLORS.secondary,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   sectionTitle: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   cardImage: {
//     height: 220,
//     width: width / 2,
//     marginRight: 20,
//     padding: 10,
//     overflow: 'hidden',
//     borderRadius: 10,
//   },
//   rmCardImage: {
//     width: width - 40,
//     height: 200,
//     marginRight: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     padding: 10,
//   },
// });
// export default HomeScreen;




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