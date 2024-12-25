import React from 'react'

const Tracks = () => {
  return (
    <>
    <h1 className='justify-center flex text-4xl font-bold p-9 text-white bg-green-700'>Hackathon Tracks</h1>
      <div className='h-screen w-full bg-zinc-600 flex flex-col justify-center align-center px-8 '>
        <div className='w-full bg-pink-700 h-[30vh] flex gap-5 justify-center align-center '>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>
        </div>
        <div className='w-full bg-pink-700 h-[30vh] mt-4 flex gap-4 justify-center align-center'>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>
          <div className='bg-yellow-500 h-[29vh] w-[25vw] rounded-lg'></div>

        </div>
      </div>
    </>
  )
}

export default Tracks
