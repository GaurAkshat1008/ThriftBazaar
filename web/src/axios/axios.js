import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000'
})

export const getItems = async () => {
    const req = await instance.get('/v1/getItems')
    return req.data
}
