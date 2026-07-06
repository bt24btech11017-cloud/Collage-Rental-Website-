import React from 'react'

const customerreview = ({des,img,name,proffession,rating}) => {
  return (
    <div className='bg-[#C1DCDC] p-10 rounded-2xl'>
      <div>
        {des}
      </div>
      <div className='flex justify-between mt-4'>
        <img src={img} alt="" className='h-[150px]'/>
        <div>
           <div className='font-bold'>{name}</div>
           <div className='text-[12px]'>{proffession}</div>
        </div>
        <div className='font-bold'>{rating}</div>
      </div>
    </div>
  )
}

export default customerreview
