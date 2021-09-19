import React, { useRef } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addBlog } from '../reducers/blogReducer'
import AddBlog from './AddBlog'
import Toggleable from './Toggleable'

const Blogs = () => {

    const dispatch = useDispatch()

    const blogs = useSelector( state => state.blogs)

    const blogRef = useRef()

    
      const blogStyle = {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }

    const handleAddBlog = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const author = e.target.author.value
        const url = e.target.url.value
        const newBlog = {
            title: title,
            author: author,
            url: url,
            likes: 0
        }
        e.target.title.value = ''
        e.target.author.value = ''
        e.target.url.value = ''

        blogRef.current.toggleVisibility()
        dispatch(addBlog(newBlog))

    }


    return (
        <div>
            <h2>Blog App</h2>
            <Toggleable buttonText="create blog" ref={blogRef}>
                <AddBlog handleAddBlog={handleAddBlog}/>
            </Toggleable>
            {
            blogs.map(blog =>
                <div style={blogStyle} key={blog.id}>
                    <Link to={`/blog/${blog.id}`} style={{paddingLeft: "8px"}}>{blog.title}</Link> 
                </div>
            )
            } 
        </div>
    )
}

export default Blogs
