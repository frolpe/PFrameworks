import axios from "./axios";

export const getStudiessRequest = () => axios.get('/studies');

export const getStudyRequest = (id) => axios.get(`/studies/${id}`)

export const createStudyRequest = (study) => axios.post('/studies', study);

export const updateStudyRequest = (id, study) => axios.put(`/studies/${id}`, study);

export const deleteStudyRequest = (id) => axios.delete(`/studies/${id}`)

