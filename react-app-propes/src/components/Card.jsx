import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className='card'>
      <h1>Title:{props.title}</h1>
      <p>{props.discription}</p>
    </div>
  )
}

export default Card
