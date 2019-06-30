import axios from 'axios';
import hostConfig from '../config/hostConfig';

const api = axios.create({
    baseURL: hostConfig.baseURL
});

export default api;