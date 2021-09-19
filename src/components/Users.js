import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userService from '../services/user'

const Users = () => {

    const [ users, setUsers ] = useState(null)
    
    useEffect(() => {
        userService.getAll().then(users => {
            setUsers(users)
        })
    }, [])
    
    
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><h2>Users</h2></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>blogs created</td>
                    </tr>
                    { users ?
                     users.map( user => (
                        <tr key={user.id}>
                            <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
                            <td>{user.blogs.length}</td>
                        </tr>
                    ))
                    : null
                    }
                </tbody>
            </table>

          
        </div>
    )
}

export default Users
