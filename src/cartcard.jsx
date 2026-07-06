import React from 'react'

const cartcard = ({title,img,price,description,selleremail,sellerphone}) => {
  return (
    <div>
      <div className='w-[full] h-[25vh] bg-[#C1DCDC] rounded-2xl shrink-0 flex p-6 gap-8'>

           <div>
            <div className='text-[13px] mb-2'>PRODUCT DETAILS</div>
            <div className='flex'>
                <img className='h-[120px] w-[120px] object-cover mr-4' src={img} alt="" />
                <div>
                    <div className='font-bold mb-2 border-b-2'>{title}</div>
                    <div className='w-[15vw] text-[13px]'>{description}</div>
                    <div className='text-[13px] font-bold mt-2 border-2 w-[40%] p-1'>{price}</div>
                </div>
            </div>
            </div>

            <div>
            <div className='text-[13px] mb-2'>SELLER EMAIL ADDRESS</div>
            <div className='flex border-2 p-2 rounded-[8px] justify-center'>
               {selleremail}
            </div>
           </div>

           <div>
            <div className='text-[13px] mb-2'>SELLER PHONE NUMBER</div>
            <div className='flex border-2 p-2 rounded-[8px] justify-center'>
               {sellerphone}
            </div>
           </div>


         </div>
    </div>
  )
}

export default cartcard
