import blogService from '../services/blogs'
import commentsService from '../services/comment'
import { hideNoti, showNoti } from './notiReducer'

const blogReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'ADD_BLOG':{
            //console.log('after add ',state.concat(action.data));
            return state.concat(action.data)
        }
        
        case 'LIKE_UPDATE_BLOG':{
            return state.map( blog => blog.id === action.id ? action.data : blog)
        }

        case 'DELETE_BLOG':{
            //console.log('after delete ',state.filter ( blog => blog.id !== action.id));
            return state.filter ( blog => blog.id !== action.id)
        }

        case 'INIT_BLOGS':{
            return action.data
        }

        case 'ADD_COMMENT':{
            return state.map ( b => b.id === action.data.blog ? ( 
                {...b,comments: b.comments.concat(action.data)}
            ) 
            : b
            )
        }
            
        default:
            return state
    }
}

export const addBlog = newBlog => {
    return async dispatch => {
        try{
            const savedBlog = await blogService.create(newBlog)
            //console.log('savedBlog ',savedBlog);
            //newBlog.id = savedBlog.id
            dispatch({
                type: 'ADD_BLOG',
                data: savedBlog
            })
            dispatch(showNoti('new blog is added'))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }catch(error){
            dispatch(showNoti(error.response.data.error))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }

    }
}

export const updateBlog = (id, updateBlog) => {

    return async dispatch => {
        try{
            const updatedBlog = await blogService.update(id, updateBlog)
            dispatch({
                type: 'LIKE_UPDATE_BLOG',
                id: id,
                data: updatedBlog
            })
            dispatch(showNoti(`You liked this post ${id}`))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }catch(error){
            dispatch(showNoti(error.response.data.error))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }
    }

}

export const deleteBlog = (id) => {
  
    return async dispatch => {
        try{
            const deleted = await blogService.deletee(id)//eslint-disable-line
            dispatch({
                type:'DELETE_BLOG',
                id: id 
            })
            dispatch(showNoti(`You deleted ${id}`))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }catch(error){
            dispatch(showNoti(error.response.data.error))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }
    }
}

export const initializedBlogs = (blogs) => {
   return async dispatch => {
       
       dispatch({
            type: 'INIT_BLOGS',
            data: blogs
       })
   }
    // return async dispatch => {

     

    //     //   try{
    //     //     const blogs = await blogService.getAll()
    //     //     console.log('hellooooooooooo',blogs);
    //     //     blogs.sort( (a , b) => b.likes - a.likes )
    //     //     dispatch({
    //     //         type: 'INIT_BLOGS',
    //     //         data: blogs
    //     //     }) 
    //     //   }catch(error){
    //     //     dispatch(showNoti(error.response.data.error))
    //     //     setTimeout(() => {
    //     //         dispatch(hideNoti())
    //     //     }, 5000)
    //     //   }
    // }
}

export const addComment = newComment => {
    return async dispatch => {
        try{
           
            const savedComment = await commentsService.create(newComment)
            //newComment.id = savedComment.id
            dispatch({
                type: 'ADD_COMMENT',
                data: savedComment
            })
            dispatch(showNoti('new comment is added'))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }catch(error){
            dispatch(showNoti(error.response.data.error))
            setTimeout(() => {
                dispatch(hideNoti())
            }, 5000)
        }

    }
}

export default blogReducer