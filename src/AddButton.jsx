import React from 'react'

export default function AddButton(props) {
    return (
        <button className="button" onClick={props.handleClick}>
            Add new food
        </button>
    )
}
