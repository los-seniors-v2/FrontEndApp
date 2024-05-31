import axios from 'axios';
export const http = axios.create({
    baseURL: 'https://jdu202012207.github.io/pruebas-api/calendar-routines.json',
});