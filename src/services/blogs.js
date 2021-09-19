import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async newBlog => {
  const config = {
    headers: { Authorization: token},
  }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const update = async (id,newBlog) => {
  // const config = {
  //   headers: { Authorization: token },
  // }
  const response = await axios.put(`${baseUrl}/${id}`,newBlog)
  return response.data
}

const deletee = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`,config)
  return response.data
}

// export default { 
//   getAll,
//   create,
//   update,
//   deletee,
//   setToken
//  }

const logger = {
  getAll,
  create,
  update,
  deletee,
  setToken
};
export default logger