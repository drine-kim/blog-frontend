import React, { useEffect } from 'react'
import './App.css'
import Blog from './components/Blog'
import { useDispatch, useSelector } from 'react-redux'
import {  initializedBlogs } from './reducers/blogReducer'
import Notification from './components/Notification'
import blogService from './services/blogs'
import Users from './components/Users'
import { Route, Switch, useRouteMatch } from 'react-router'
import User from './components/User'
import Blogs from './components/Blogs'
import Container from './components/Container'

const App = () => {


  const dispatch = useDispatch()

  const blogs = useSelector( state => state.blogs)
  blogs.sort( (a , b) => b.likes - a.likes )

  const user = useSelector( state => state.user)

  const math = useRouteMatch("/user/:id")
  
  const userBlogs = math 
  ? blogs.filter( blog => blog.user.id === math.params.id)
  : null
  //console.log('userblogsss',userBlogs);

  const math1 = useRouteMatch("/blog/:id")

  const blog = math1
  ? blogs.find( blog => blog.id === math1.params.id)
  : null
  //console.log('param blogss',blog);

  
 


  useEffect(() => {
      
      blogService.getAll().then(blogs =>{
        dispatch(initializedBlogs(blogs))
      })
  }, [])//eslint-disable-line

  useEffect(() => {
    
    const loggedUser = window.localStorage.getItem('loggedBlogAppUser')
    if(loggedUser){
      const user = JSON.parse(loggedUser)
      dispatch({
        type: 'STORE_USER_REDUX',
        user: user
      })
      blogService.setToken(user.token)
     
    }
  }, [])//eslint-disable-line

  return (
    <div>
     <Notification/>
      <Switch>
        <Route exact path = "/" >
          <Container>
            <Blogs/>
          </Container>
        </Route>
        <Route path ="/blog/:id">
          <Container>
            <Blog blog={blog}/>
          </Container>
        </Route>
        <Route path = "/user/:id">
        <Container>
          <User user = {user} blogs = {userBlogs}/>
        </Container>
          
        </Route>
        <Route path = "/users" >
          <Container>
            <Users />
          </Container>
        </Route>
      </Switch>
    </div>
  )
}

export default App