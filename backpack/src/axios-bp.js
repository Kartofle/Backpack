import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backpack-aa77d.firebaseio.com/'
});

export default instance;