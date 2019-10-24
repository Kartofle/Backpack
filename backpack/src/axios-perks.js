import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://next.json-generator.com/api/json/'
});

export default instance;