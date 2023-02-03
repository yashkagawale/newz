import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2/everything?q=Apple&from=2022-12-17&sortBy=popularity&apiKey=f402164ccf374ca4bdbcca0e1dfc64d3'

})