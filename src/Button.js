import React from 'react'

const Button = props => {
    return (
        <button  style={{
            font: 'inherit',
            cursor: "pointer",
            border: '2px solid red',
            width: "100%",
        }}>
            {props.children}
        </button>

        

)

    }

export default Button

