import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;





export const createTuit = async (tuit) => {
    console.log(TUITS_API)
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}




//findTuits functon below sends HTTP GET request to TUITS_API using axios.get() finction
export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}


export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}




export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}




