import React from 'react'
import { useEffect } from 'react'


const Navber = ({color}) => {
    //Case 1 : run on every  render
    useEffect(() => {
        alert("Every render");
    })

    //Cse 2:
    useEffect(() => {
  alert("only run first time");
    }, [])
    
    //Case 3: run only when color is change
    useEffect(() => {
      alert("color is chaged ,did you notice?")
    }, [color])
    
  return (
    <div>
      <h2>I am Navber of {color} color .I am just learning useEffect .</h2>
    </div>
  )
}

export default Navber
