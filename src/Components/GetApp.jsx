import React from 'react'

function GetApp() {
  return (
    <div className='  bg-red-100 flex  justify-center items-center'>
      <div >
      <h1 className='text-red-600 font-bold text-2xl'>DOWNLOAD APP</h1>
        <p className='py-4 font-bold text-6xl'>Get Started With <br/> Fudo Today!</p>
        <p className='py-8 text-xl'>Discover food wherever and whenever and get <br/> your food delivered quickly.</p>
        <div className='mt-8'>
        <a className='bg-red-600 py-4 px-10 text-xl rounded-full text-white' href=''>Get the App</a>
        </div>
      </div>
      <div>
          <img src='../public/images/getapp.png'/>
        </div>
    </div>
  )
}

export default GetApp