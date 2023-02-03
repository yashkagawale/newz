import { View, TextInput, Text, StyleSheet } from "react-native";
import React from "react";

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search"
                style={styles.input}
                value={props.searchText}
                onChangeText={(text) => props.setSearchText(text)}
                onSubmitEditing={props.onSubmit}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1
    }
});



// import react, { useState } from "react";
// import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
// import Article from "./Article";
// import axios from "axios";

// const SearchScreen = () => {
//     const [searchText, setSearchText] = useState("");
//     const [articles, setArticles] = useState([]);

//     const searchArticles = () => {
//         axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3', {
//             params: {
//                 category: "technology",
//                 q: searchText
//             }
//         })
//             .then((response) => {
//                 // handle success
//                 setArticles(response.data.articles);
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });
//     }

//     const SearchBar = (props) => {
//         return (
//             <View style={styles.container1}>
//                 <TextInput
//                     placeholder="Search"
//                     style={styles.input}
//                     value={props.searchText}
//                     onChangeText={(text) => props.setSearchText(text)}
//                     onSubmitEditing={props.onSubmit}
//                 />
//             </View>
//         )
//     }

//     return (
//         <View style={styles.container}>
//             <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles} />
//             <FlatList
//                 data={articles}
//                 renderItem={({ item }) =>
//                     <Article
//                         urlToImage={item.urlToImage}
//                         title={item.title}
//                         description={item.description}
//                         author={item.author}
//                         publishedAt={item.publishedAt}
//                         sourceName={item.source.name}
//                     />}
//                 keyExtractor={(item) => item.title}
//             />
//         </View>
//     )
// }


// export default SearchScreen;

// const styles = StyleSheet.create({
//     container1: {
//         margin: 10
//     },
//     input: {
//         backgroundColor: "#fff",
//         padding: 10,
//         borderRadius: 10,
//         color: "#000",
//         borderWidth: 1
//     },
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// });