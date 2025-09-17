import React from 'react'
import { useState,useEffect,useRef } from 'react'
const Exmple = () => {
    const {count,setCount}=useState;

  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={()=>{setCount((count)=>count+1)}}>Click to update</button>
    </div>
  )
}

export default Exmple
