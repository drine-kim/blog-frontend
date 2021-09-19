import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addComment, deleteBlog, updateBlog } from '../reducers/blogReducer'
const Blog = ({blog}) => {

  const dispatch = useDispatch()

  const blogs = useSelector( state => state.blogs)

  //const user = useSelector( state => state.user)

  const history = useHistory()
  
  const [ comment, setComment ] = useState('')

  const handleLikeUpdate = async (id) => {
    const blog = await blogs.find( blog => blog.id === id)
    //console.log('updateeeeeeeeee ',blog);
    const toUpdateBlog = {
      ...blog,likes : blog.likes + 1
    }
    //console.log('afterrrrrrr',toUpdateBlog);
    dispatch(updateBlog(id,toUpdateBlog))
    
  }
  

  const handleDelete = id => {
    if(window.confirm('are you sure to delete')){
      dispatch(deleteBlog(id))
      history.push('/')
    }
  }

  const handleComment = async (id) => {
    const blogg = await blogs.find( blog => blog.id === id)
    // console.log('bloggg',blogg);
    // console.log('user  ',user);
    const newComment = {
      text: comment,
      blog: blogg.id,
      user: blogg.user.id
    }
    dispatch(addComment(newComment))
    setComment('')

  }
  //console.log('blogcomments ', blog.comments);
  return (
      <div>
        {
          blog 
          ? (
            <>
              <div >
                <div>
                  <h1>{blog.title}</h1>
                  <a href={blog.url}>{blog.url}</a><br/>
                  {blog.likes} likes <button onClick={() => handleLikeUpdate(blog.id)} id="like-button">like</button><br/>
                  added by {blog.author}<br/>
                  <button onClick={ () => handleDelete(blog.id)} id="delete-button">delete</button>
                  <h2>comments</h2>
                  <input name = "comment" value ={comment} onChange = {(e) => setComment(e.target.value)}/>
                  <button onClick={ () => handleComment(blog.id)}>add comment</button><br />
                  {
                   
                   blog.comments
                   ? (
                     <>
                       <ul>
                         {
                           blog.comments.map ( comment => (
                             <li key = {comment.id}>{comment.text} </li> 
                           ))
                         }
                       </ul>
                     </>
                   ): null
                  }
                </div> 
              </div>
            </>
          )
          : null
        }
      </div>
  )
}
export default Blog