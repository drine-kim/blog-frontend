import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
    const noti = useSelector( state => state.noti)
    return (
        <div>
            <p className={ noti ? "showErrorMessage" : "noneErrorMessage"}>{noti}</p>
        </div>
    )
}

export default Notification
