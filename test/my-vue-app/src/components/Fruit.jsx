import React from 'react'

export default function Fruit({name, price}) {
  return ( 
      <li key={name}>{name} - {price > 100 ? <h1>{price}</h1> : price}</li> 
  )
}
