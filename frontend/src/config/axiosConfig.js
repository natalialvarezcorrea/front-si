import axios from 'axios';

const axiosFetch = axios.create({
    baseURL: 'http://34.95.213.121:5000/'
});

export default axiosFetch;