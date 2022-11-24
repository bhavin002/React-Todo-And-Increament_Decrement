import React, { useState } from "react";
import './App.css'
import Listitem from "./Listitem";

const Todolist = () => {
    const [list, setlist] = useState('');
    const [items, setitems] = useState([])
    const inputevent = (event) => {
        setlist(event.target.value)
    }
    const addcart = () => {
        setitems((olditems) => {
            return [...olditems, list]
        })

        setlist('');
    }
    const deleteitem = (id) => {
        setitems((olditems) => {
            return olditems.filter((arrelem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main-div">
                <h1 className="my-md-2">Todo List</h1>
                <input type="text" placeholder="Add a Items" autoComplete="off" id="list" onChange={inputevent} value={list} />
                <button onClick={addcart} className="plus">+</button>
                <ul>{
                    items.map((itemvalue, index) => {
                        return (
                            <Listitem key={index} id={index} item={itemvalue} onSelect={deleteitem} />
                        )
                    })
                }</ul>
            </div>
        </>
    )
}

export default Todolist;