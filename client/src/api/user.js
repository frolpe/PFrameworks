import axios from "./axios";

export const getUsersRequest = () => axios.get('/user');

export const getUserRequest = (id) => axios.get(`/user/${id}`)

//export const createSkillRequest = (skill) => axios.post('/skills', skill);

//export const updateSkillRequest = (id, skill) => axios.put(`/skills/${id}`, skill);

//export const deleteSkillRequest = (id) => axios.delete(`/skills/${id}`)

