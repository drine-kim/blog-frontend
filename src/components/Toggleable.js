import React, { useState, useImperativeHandle } from 'react'
//import PropTypes from 'prop-types'

const Toggleable = React.forwardRef((props, ref) => {
//const Toggleable = (props) => {
    const [ visible, setVisible ] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : ''}
    const showWhenVisible = { display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    useImperativeHandle(ref, () => {
        return {
          toggleVisibility
        }
      })

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisibility} style={{marginBottom: '5px'}}>{props.buttonText}</button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisibility} >cancel </button>
            </div>
        </div>
    )
}
)


// Toggleable.propTypes = {
//     buttonText : PropTypes.string.isRequired
// }

export default Toggleable
