import react, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import Article from "../components/Article";
import Card from '../components/Card';
import newAPI from '../apis/News';


const SearchScreen = () => {
    const [searchText, setSearchText] = useState("");
    const [articles, setArticles] = useState([]);

    const searchArticles = () => {
        axios.get('https://newsapi.org/v2/everything?from=2023-01-26&sortBy=popularity&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3', {
            params: {
                // category: "Technology",
                q: searchText
            }
        })
            .then((response) => {
                // handle success
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles} />
            {/* <FlatList
                data={articles}
                renderItem={({ item }) =>
                    <Article
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        publishedAt={item.publishedAt}
                        sourceName={item.source.name}
                    />}
                keyExtractor={(item) => item.title}
            /> */}
            <FlatList
                data={articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({ item }) => (
                    <Card
                        item={item}
                    />
                )}
                style={{ marginBottom: 65 }}
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})

// const SearchScreen = () => {
//     const [searchText, setSearchText] = useState("");
//     const [news, setNews] = useState([])

//     function getNewsFromAPI() {
//         newAPI.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3')
//             .then(async function (response) {
//                 setNews(response.data)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//             .finally(function () {
//                 setLoading(false);
//             })
//     }

//     if (!news) {
//         return null
//     }


//     // const searchArticles = () => {
//     //     axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3', {
//     //         params: {
//     //             category: "technology",
//     //             q: searchText
//     //         }
//     //     })
//     //         .then((response) => {
//     //             // handle success
//     //             setArticles(response.data.articles);
//     //         })
//     //         .catch(function (error) {
//     //             // handle error
//     //             console.log(error);
//     //         })
//     //         .then(function () {
//     //             // always executed
//     //         });
//     // }
//     return (
//         <View style={styles.container}>
//             <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={getNewsFromAPI} />
//             {/* <FlatList
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
//             /> */}
//             <FlatList
//                 data={news.articles}
//                 keyExtractor={(item, index) => 'key' + index}
//                 renderItem={({ item }) => (
//                     <Card
//                         item={item}
//                     />
//                 )}
//                 style={{ marginBottom: 65 }}
//             />
//         </View>
//     )
// }

// export default SearchScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     }
// })