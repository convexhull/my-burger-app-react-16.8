import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://yash-burger-store.firebaseio.com/'
});

export default instance;