import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import LoginForm from './LoginForm'
import Toggleable from './Toggleable'

const Container = (props) => {
    const user = useSelector( state => state.user)

    return (
        <div>
            { user === null 
            ? (
                <Toggleable buttonText='login'>
                    <LoginForm />
                </Toggleable>
            )
            : (
                <>
                    <Header /> 
                    {props.children}
                </>
            )  }
        </div>
    )
}

export default Container
