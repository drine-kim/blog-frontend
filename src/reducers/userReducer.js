import loginService from '../services/login'
import blogService from '../services/blogs'
import { hideNoti, showNoti } from './notiReducer'

const userReducer = ( state = null, action) => {
   switch (action.type) {
        case 'STORE_USER_REDUX':{
           return action.user
        }

        case 'GET_USER_REDUX':{
           return state.user
        }

        case 'DELETE_USER_REDUX':{
            return action.user
        }
   
       default:
           return state
   }
}

export const storeUserData = ({username, password}) => {

      return async dispatch => {
          try{
            const userData = await loginService.login({username, password})
            dispatch({
                type: 'STORE_USER_REDUX',
                user: userData
            })
            blogService.setToken(userData.token)
            window.localStorage.setItem('loggedBlogAppUser',JSON.stringify(userData))

          }catch(error){
            dispatch(showNoti(error.response.data.error))
            setTimeout(() => {
                dispatch(hideNoti(''))
            }, 5000);
      }  
      }
}

export const getUserData = () => {
    return async dispatch => {
        const loggedUser = window.localStorage.getItem('loggedBlogAppUser')
        if(loggedUser){
        const user = JSON.parse(loggedUser)
        dispatch({
            type: 'GET_USER_REDUX',
            user: user
        })
        blogService.setToken(user.token)
      
    }
    }

}

export const deleteUserData = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    return {
        type: 'DELETE_USER_REDUX',
        user: null
    }
}

export default userReducer
