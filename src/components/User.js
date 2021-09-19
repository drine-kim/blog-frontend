import React from 'react'

const User = ({user, blogs}) => {
    if(!user){
        return null
    }
    // console.log('usersss',user);
    // console.log('blogssss',blogs);
    return (
        <div>
            <h3>{user.name}</h3>
            <h4>added blogs</h4>
            <div>
                <ul>
                {
                    blogs.length > 0
                    ? (
                        blogs.map( blog => (
                            <li key={blog.id}>{blog.title}</li>
                        ))
                    )
                    : (
                        <p>No blogs for this user</p>
                    )
                
                }
                </ul>
            </div>
        </div>
    )
}

export default User
