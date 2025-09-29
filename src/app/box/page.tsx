import React from 'react'

export default function page() {
  return (
    <div className='felx flex-col justify-center items-center min-h-screen gap-4'>
      <input 
      type="text" 
      placeholder='Masukkan Nama' 
      className='border-2 rounded-lg px-3 py-2 mt-5 mx-auto block'/>

      <div className='bg-blue-900'></div>
    </div>

  )
}