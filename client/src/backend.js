import axios from 'axios';

const Base = 'http://localhost:3001';
export const Server = Base+'api/v1';
export const Axios = axios.create({
    baseURL: Server,
    timeout: 10000,
})