import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUserData } from '../reducers/userReducer'

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.user )

    const handleLogout = (e) => {
        window.localStorage.removeItem('loggedBlogAppUser')
        dispatch(deleteUserData())
      }

     
    return (
        <div>
            <div style={{background: "#f8f8f8", padding: "8px"}}>
                <Link to = "/">blogs</Link> &nbsp;
                <Link to = "/users">users</Link> &nbsp;
                {user.username} logged in <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Header
