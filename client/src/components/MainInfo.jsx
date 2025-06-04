import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function MainInfo() {
  return (
    <div className='flex flex-col p-4 h-full'>
        <div className='flex gap-2 items-center text-white'>
            <FaLocationDot />
            Mexico city
        </div>
        <div className='flex justify-between mt-auto items-center'>
            <div>
                <div className='text-4xl text-white'>Partly cloudy</div>
                <div className='flex gap-6 text-white'>
                    <div>Tuesday, april 24</div>
                    <div>7:00 pm</div>
                </div>
            </div>
            <div className='text-4xl text-white'>27°C</div>
        </div>
    </div>
  )
}

export default MainInfo