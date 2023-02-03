import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={{ flex: 0.7 }} source={place.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{ color: COLORS.white, fontWeight: 'bold', fontSize: 20 }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{ marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>
          About the trip
        </Text>
        <Text style={{ marginTop: 20, lineHeight: 22 }}>{place.details}</Text>
      </View>
      <View style={style.footer}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: COLORS.white,
            }}>
            $100
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: COLORS.grey,
              marginLeft: 2,
            }}>
            /PER DAY
          </Text>
        </View>
        <View style={style.bookNowBtn}>
          <Text
            style={{ color: COLORS.primary, fontSize: 16, fontWeight: 'bold' }}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default DetailsScreen;





// const [isLoading, setLoading] = useState(true);
// const [news, setNews] = useState([])

// useEffect(() => {
//   getNewsFromAPI()
// }, [])

// const categoryIcons = [
//   <Icon1 name="world-o" size={25} color={COLORS.primary} />,
//   <Icon name="beach-access" size={25} color={COLORS.primary} />,
//   <Icon name="near-me" size={25} color={COLORS.primary} />,
//   <Icon name="place" size={25} color={COLORS.primary} />,
// ];
// const ListCategories = () => {
//   return (
//     <View style={style.categoryContainer}>
//       {categoryIcons.map((icon, index) => (
//         <View key={index} style={style.iconContainer}>
//           {icon}
//         </View>
//       ))}
//     </View>
//   );
// };

// function getNewsFromAPI() {
//   newAPI.get('top-headlines?country=us&apiKey=920deb9f754348c0bec4871fef36d971')
//     .then(async function (response) {
//       setNews(response.data)
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       setLoading(false);
//     })
// }

// if (!news) {
//   return null
// }

// const theme = useContext(themeContext);
// const [isEnabled, setIsEnabled] = useState(false);


// // const Card = ({ place }) => {
// //   return (
// //     <TouchableOpacity
// //       activeOpacity={0.8}
// //       onPress={() => navigation.navigate('DetailScreen', place)}>
// //       <ImageBackground style={style.cardImage} source={place.image}>
// //         <Text
// //           style={{
// //             color: COLORS.white,
// //             fontSize: 20,
// //             fontWeight: 'bold',
// //             marginTop: 10,
// //           }}>
// //           {place.name}
// //         </Text>
// //         <View
// //           style={{
// //             flex: 1,
// //             justifyContent: 'space-between',
// //             flexDirection: 'row',
// //             alignItems: 'flex-end',
// //           }}>
// //           <View style={{ flexDirection: 'row' }}>
// //             <Icon name="place" size={20} color={COLORS.white} />
// //             <Text style={{ marginLeft: 5, color: COLORS.white }}>
// //               {place.location}
// //             </Text>
// //           </View>
// //           <View style={{ flexDirection: 'row' }}>
// //             <Icon name="star" size={20} color={COLORS.white} />
// //             <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
// //           </View>
// //         </View>
// //       </ImageBackground>
// //     </TouchableOpacity>
// //   );
// // };

// const RecommendedCard = ({ place }) => {
//   return (
//     <ImageBackground style={style.rmCardImage} source={place.image}>
//       <Text
//         style={{
//           color: COLORS.white,
//           fontSize: 22,
//           fontWeight: 'bold',
//           marginTop: 10,
//         }}>
//         {place.name}
//       </Text>
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'space-between',
//           alignItems: 'flex-end',
//         }}>
//         <View style={{ width: '100%', flexDirection: 'row', marginTop: 10 }}>
//           <View style={{ flexDirection: 'row' }}>
//             <Icon name="place" size={22} color={COLORS.white} />
//             <Text style={{ color: COLORS.white, marginLeft: 5 }}>
//               {place.location}
//             </Text>
//           </View>
//           <View style={{ flexDirection: 'row' }}>
//             <Icon name="star" size={22} color={COLORS.white} />
//             <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
//           </View>
//         </View>
//         <Text style={{ color: COLORS.white, fontSize: 13 }}>
//           {place.details}
//         </Text>
//       </View>
//     </ImageBackground>
//   );
// };
// return (
//   <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
//     <StatusBar translucent={false} backgroundColor={COLORS.primary} />
//     <View style={style.header}>
//       <Icon name="sort" size={28} color={COLORS.white} />
//       <Icon name="notifications-none" size={28} color={COLORS.white} />
//     </View>
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View
//         style={{
//           backgroundColor: COLORS.primary,
//           height: 120,
//           paddingHorizontal: 20,
//         }}>
//         <View style={{ flex: 1 }}>
//           <Text style={style.headerTitle}>Explore the</Text>
//           <Text style={style.headerTitle}>world with Us</Text>
//           <View style={style.inputContainer}>
//             <Icon name="search" size={28} />
//             <TextInput
//               placeholder="Search place"
//               style={{ color: COLORS.black }}
//             />
//           </View>
//         </View>
//       </View>
//       <ListCategories />
//       <Text style={style.sectionTitle}></Text>
//       <View>
//         <FlatList
//           contentContainerStyle={{ paddingLeft: 20 }}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={places}
//           renderItem={({ item }) => <Card place={item} />}
//         />
//         <Text style={style.sectionTitle}>Recommended</Text>
//         <FlatList
//           snapToInterval={width - 20}
//           contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           data={places}
//           renderItem={({ item }) => <RecommendedCard place={item} />}
//         />
//         <Text style={{
//           fontSize: 30,
//           fontWeight: 'bold',
//           marginTop: 10,
//           marginLeft: 20,
//           color: theme.textColor
//         }}
//         >Recent News</Text>
//         <FlatList
//           data={news.articles}
//           keyExtractor={(item, index) => 'key' + index}
//           renderItem={({ item }) => (
//             <Card
//               item={item}
//             />
//           )}
//           style={{ marginBottom: 65 }}
//         />
//       </View>
//     </ScrollView>
//   </SafeAreaView>


// );
// };

// const style = StyleSheet.create({
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
