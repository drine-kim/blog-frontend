import React from 'react'
//import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { storeUserData } from '../reducers/userReducer'

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()
        //console.log('login with username and password ', username, '  ',password)
        const username = e.target.username.value
        const password = e.target.password.value
    
        dispatch(storeUserData({username,password}))
        e.target.username.value = ""
        e.target.password.value = ""
       
      }
    return (
        <div>
            <form onSubmit={handleLogin}>
            <div>
                username
                <input type="text" name="username" id="username"  />
            </div>
            <div>
                password
                <input type="password" name="password" id="password"  />
            </div>
            <button type="submit" id="button-login">Login</button>
            </form>
        </div>
    )
}

// LoginForm.propTypes = {
//     handleLogin : PropTypes.func.isRequired,
//     handleUsernameChange : PropTypes.func.isRequired,
//     handlePasswordChange : PropTypes.func.isRequired,
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
// }

export default LoginForm
