import React from "react";
import './App.css';
import Calc from "./Calc";
import Todolist from "./Todolist";

const App = () =>{
  return(
    <>
      <center>
      <Todolist/>
      <Calc/>
      </center>
    </>
  )
}
export default App;