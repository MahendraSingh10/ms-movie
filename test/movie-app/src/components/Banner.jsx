import React from 'react'

function Banner() {
  return (
    <div className='h-[40vh] md:h[100vh] bg-cover bg-center bg-cover flex items-end' style={{backgroundImage:`url(https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00361924-upplmandsj-portrait.jpg)`}}>
      <div className='text-white text-2xl  text-center w-full bg-blue-900/60 p-4'>Fantastic Movie</div>
    </div>
  )
}

export default Banner
