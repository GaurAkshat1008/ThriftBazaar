import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000'
})

export const getItems = async () => {
    const req = await instance.get('/v1/getItems')
    return req.data
}

export const login = async (email, password) => {
    const req = await instance.post('/v1/login', { email, password })
    // console.log(req.data);
    return req.data
}

export const register = async (name, email, password, type) => {
    const req = await instance.post('/v1/register', { name, email, password, type })
    return req.data
}

export const getCurrentUser = async () => {
    const req = await instance.get('/v1/me')
    return req.data
}

export const logout = async () => {
    const req = await instance.post('/v1/logout')
    return req.data
}

export const addItem = async (name, price, image, description, countInStock) => {
    const req = await instance.post('/v1/addItem', { name, price, image, description, countInStock })
    return req.data
}

export const searchItems = async (keyword) => {
    const req = await instance.get(`/v1/searchItems/${keyword}`)
    return req.data
}

export const getItem = async (id) => {
    const req = await instance.get(`/v1/getItem/${id}`)
    return req.data
}

export const deleteItem = async (id) => {
    const req = await instance.delete(`/v1/deleteItem/${id}`)
    return req.data
}

