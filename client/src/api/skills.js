import axios from "./axios";

export const getSkillsRequest = () => axios.get('/skills');

export const getSkillRequest = (id) => axios.get(`/skills/${id}`)

export const createSkillRequest = (skill) => axios.post('/skills', skill);

export const updateSkillRequest = (id, skill) => axios.put(`/skills/${id}`, skill);

export const deleteSkillRequest = (id) => axios.delete(`/skills/${id}`)

