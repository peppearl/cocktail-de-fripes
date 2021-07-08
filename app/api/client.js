import axios from 'axios';

export default axios.create({
    baseURL: 'http://172.30.92.126:3000/api',
});