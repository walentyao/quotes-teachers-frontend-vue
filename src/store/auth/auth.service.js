import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/auth',
    timeout: 1000
})

export async function login(email, password) {
    const {data} = await instance.post('/login', {
        email,
        password
    });
    const {token, username} = data;

    return {token, username};
}