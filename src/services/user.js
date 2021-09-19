import axios from "axios"

const baseUrl = "http://localhost:3002/api/users"

//let token = null

// const setToken = newToken => {
//     token = `bearer ${newToken}`
// }

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
//eslint-disable-next-line
export default {
    getAll,
}