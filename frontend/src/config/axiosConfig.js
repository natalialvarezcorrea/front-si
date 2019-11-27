import axios from 'axios';

const axiosFetch = axios.create({
    baseURL: 'http://35.198.30.114:5000'
});

export default axiosFetch;