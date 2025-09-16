import { useState,useEffect, use } from "react";
import React from 'react';
import Navber from "./Componentes/Navber";
import './App.css'
const App = () => {
  const[count,setCount]=useState(0);
  const [first,setFirst]=useState(0);
  const[color,setColor]=useState(0);


  useEffect(()=>{
    alert("count updated");
    setColor(color+1)
  },[count]);

  return (
    <div>
      <Navber color={"red" + color}/>
      <h1>Count={count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }
    }>  Update </button>
    
    </div>
  )
}

export default App
