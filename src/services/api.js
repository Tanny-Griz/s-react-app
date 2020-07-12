import { apiUrl } from '../config/apiUrl'

const api = (url) => {
    return fetch(`${apiUrl.api}${url}`);
}

export const getUsers = async() => {
    const response = await api('/users');
    return await response.json();
}