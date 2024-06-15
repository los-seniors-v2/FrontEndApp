import axios from 'axios';
export const http = axios.create({
    baseURL: 'https://jdu202012207.github.io/pruebas-api/',
});

export const getCalendarRoutines = () => {
    return http.get('calendar-routines.json');
};

export const getUserInfo = () => {
    return http.get('users.json');
};