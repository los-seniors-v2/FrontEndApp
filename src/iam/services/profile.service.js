// En tu archivo de servicio, por ejemplo `profile.service.js`
import axios from 'axios';

export async function postProfile(profileData) {
    const response = await axios.post('https://flex-pal-36d17cd9c27a.herokuapp.com/api/v1/profiles', profileData);
    return response.data;
}