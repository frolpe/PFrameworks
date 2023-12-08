import axios from "./axios";

export const getExpsRequest = () => axios.get('/exps');

export const getExpRequest = (id) => axios.get(`/exps/${id}`)

export const createExpRequest = (exp) => axios.post('/exps', exp);

export const updateExpRequest = (id, exp) => axios.put(`/exps/${id}`, exp);

export const deleteExpRequest = (id) => axios.delete(`/exps/${id}`)

