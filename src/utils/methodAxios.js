import axios from './baseAxios';
const getDatabase = async (resources)=> {
    return await axios.get(`${resources}`);
};
const postDatabase = async (resources, data)=> {
    return await axios.post(`${resources}`,data);
};
const deleteDatabase = async (resources,id)=> {
    return await axios.delete(`${resources}/${id}`);
};
const updateDatabase = async (resources,id,post)=> {
    return await axios.put(`${resources}/${id}`, post);
};
const patchDatabase = async(resources,id,info)=> {
    return await axios.patch(`${resources}/${id}`, info)
};
export {getDatabase, postDatabase, deleteDatabase, updateDatabase, patchDatabase};