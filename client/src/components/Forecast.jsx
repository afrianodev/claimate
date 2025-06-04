import React from 'react'
import ForecastCard from './ForecastCard'

function Forecast() {
  return (
    <div className='p-4 h-full flex flex-col justify-between gap-6'>
        <h2 className='text-xl text-neutral-800'>Week forecast</h2>
        <div className='flex justify-between'>
            <ForecastCard temp={27} overview={'Partly cloud'} />
            <ForecastCard temp={28} overview={'Partly cloud'} />
            <ForecastCard temp={32} overview={'Sunny'} />
            <ForecastCard temp={27} overview={'Cloudy'} />
            <ForecastCard temp={25} overview={'Partly cloud'} />
        </div>
    </div>
  )
}

export default Forecast