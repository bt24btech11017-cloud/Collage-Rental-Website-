import React from 'react'
import pot from './assets/pot.png'

const card = ({img,title,description}) => {
  return (
    <div className='w-[30%] justify-center flex flex-col items-center border-2 rounded-2xl p-4 pb-10'>
        <img src={img} alt="pot" className='h-[100px] justify-center flex' />
        <div className='font-bold flex justify-center'>{title}</div>
        <div className='text-center'>{description}</div>
    </div>
  )
}

export default card
