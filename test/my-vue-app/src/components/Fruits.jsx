import React from 'react'
import Fruit from './Fruit'

export default function Fruits() {
    let fruits = [
        {Name : "Orange", Price :40},
        {Name : "Apple", Price :200},
        {Name : "Banana", Price :60},
        {Name : "Grapes", Price :120},
    ]
  return (
    <div>
      {fruits.map((fruit)=>(
        <Fruit name={fruit.Name} price={fruit.Price}/>
      ))}
    </div>
  )
}
