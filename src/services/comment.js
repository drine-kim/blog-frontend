import axios from "axios"

const baseUrl = "http://localhost:3002/api/comments"


const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getComment = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const create = async (newObj) => {
    const response = await axios.post(`${baseUrl}/${newObj.blog}`, newObj)
    return response.data
}

//eslint-disable-next-line
export default {
    getAll,
    getComment,
    create
}