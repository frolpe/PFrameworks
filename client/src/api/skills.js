import axios from "./axios";

export const getSkillsRequest = () => axios.get('/skills');

export const getSkillRequest = (id) => axios.get(`/skills/${id}`)

export const createSkillRequest = (skill) => axios.post('/skills', skill);

export const updateSkillRequest = (skill) => axios.put(`/skills/${skill._id}`, skill);

export const deleteSkillRequest = (id) => axios.delete(`/skills/${id}`)

