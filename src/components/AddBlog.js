import React from 'react'

const AddBlog = ({handleAddBlog}) => {

    // const dispatch = useDispatch()

    // const handleAddBlog = (e) => {
    //     e.preventDefault()
    //     const title = e.target.title.value
    //     const author = e.target.author.value
    //     const url = e.target.url.value
    //     const newBlog = {
    //       title: title,
    //       author: author,
    //       url: url,
    //       likes: 0
    //     }
    //     e.target.title.value = ''
    //     e.target.author.value = ''
    //     e.target.url.value = ''
    
    //     //blogRef.current.toggleVisibility()
    //     dispatch(addBlog(newBlog))
    
    //   }

    return (
        <div>
            <h3>Create New Blog</h3>
            <form onSubmit={handleAddBlog}>
                <div>
                    title
                    <input name="title" />
                </div>
                <div>
                    author
                    <input name="author" />
                </div>
                <div>
                    url
                    <input name="url"  />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default AddBlog
