import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import blogReducer from "./reducers/blogReducer"
import notiReducer from './reducers/notiReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    blogs: blogReducer,
    noti: notiReducer,
    user: userReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store