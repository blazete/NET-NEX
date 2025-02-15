import React from 'react'
import { StickyScrollRevealDemo } from '../other/scrolls'

const Event = () => {
  return (
    <div className='h-screen bg-black flex flex-col sm:flex-row items-center justify-center'>
        <div className='text-5xl text-white'>Digiton 2.0</div>
        <StickyScrollRevealDemo/>
    </div>
  )
}

export default Event