import React from 'react'

 function Animals() {
  let animals = ["Dog", "Cat", "Horse"]
  return (
    <div> 
      {animals.map((animal)=> (
        <h1>{animal}</h1>
    ))}
    </div>
  )
}
export default Animals
