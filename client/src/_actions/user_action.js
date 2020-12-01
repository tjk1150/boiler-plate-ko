import axios from 'axios';
import { 
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';
export const loginUser = (dataTosubmit) => {
    
    const request = axios.post('/api/users/login', dataTosubmit)
        .then(response => response.data)
        // console.log('request : ',request); // loginUser까지 연결되어 있는것은 확인

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export const registerUser = (dataTosubmit) => {
    
    const request = axios.post('/api/users/register', dataTosubmit)
        .then(response => response.data)
        // console.log('request : ',request); // loginUser까지 연결되어 있는것은 확인

    return {
        type: REGISTER_USER,
        payload: request
    }
}
export const auth = () => {
    
    const request = axios.get('/api/users/auth') // get일경우 body 부분이 필요없다??
        .then(response => response.data)
        // console.log('request : ',request); // loginUser까지 연결되어 있는것은 확인

    return {
        type: AUTH_USER,
        payload: request
    }
}

