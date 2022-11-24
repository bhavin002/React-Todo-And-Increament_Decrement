import React from "react";
import './App.css'

const Listitem = (props) => {
    return (
        <>
            <span><button onClick={() => { props.onSelect(props.id) }}>X</button></span>
            <span>{props.item}</span>
            <br />
        </>
    )
}

export default Listitem;