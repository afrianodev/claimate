import React from 'react'

function ForecastCard({temp, overview}) {
  return (
    <div className='flex flex-col items-center'>
        <p className='text-4xl text-neutral-800'>{temp}°c</p>
        <p className='text-neutral-600'>{overview}</p>
    </div>
  )
}

export default ForecastCard