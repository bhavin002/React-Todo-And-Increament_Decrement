import React, { useState } from "react";
import './App.css'
import AddItem  from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Calc = () => {
    const [num, setnum] = useState(0)
    const inc = () => {
        setnum(num + 1)
    }
    const dec = () =>{
        if(num === 0){
            alert("Your Limit Is Finished");
        }
        else
        {
            setnum(num-1)
        }
    }
    return (
        <>
            <div className="main-div-2">
                <h1 className="my-md-2">{num}</h1>
                <div className="btn-div">
                    <Button className="calc" variant="contained" onClick={inc}><AddItem/></Button><span> </span>
                    <Button className="calc" variant="contained" onClick={dec}><DeleteIcon/></Button>
                </div>
            </div>
        </>
    )
}

export default Calc;