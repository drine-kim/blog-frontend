
const errorReducer = ( state, action) => {
    switch (action.type) {
        case 'SHOW_NOTI':
            return action.noti
        
        case 'HIDE_NOTI':
            return action.noti
    
        default:
            return null
    }
   
}

export const showNoti = (noti) => {
    return {
        type: 'SHOW_NOTI',
        noti
    }
}

export const hideNoti = () => {
    return {
        type: 'HIDE_NOTI',
        noti: null
    }
}

export default errorReducer
