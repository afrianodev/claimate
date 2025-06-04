import React from 'react'

function AIBriefing() {
  return (
    <div className='p-2 flex flex-col h-full'>
      <div className='text-2xl text-neutral-600 p-6 mt-auto'>
        <span className='font-semibold text-3xl text-neutral-800'>It's 27°C in Mexico City.</span> No rain expected.<br/>Great weather for your night run!
      </div>
      <div className='mt-auto flex flex-col'>
        <p className='text-neutral-600 select-none mb-2 text-sm'>You can type any details you want, so I can make better and custom predictions for you.</p>
        <div className='bg-neutral-100 p-2 pb-12 rounded-md select-none'>
          <input type="text" placeholder='Type here...' className='w-[100%] outline-none bg-neutral-100' />
        </div>
      </div>
    </div>
  )
}

export default AIBriefing