import React from 'react'
import Card from './card'
import Customer from './customerreview'

const home = (props) => {
  return (

    <div>
    <div className='bg-[#C1DCDC] ml-7 mr-7 p-[6%] rounded-3xl  flex'>
      <div className=' w-[50%]'>
       <div className='text-5xl font-bold font-serif flex-col'>
        <div>BUY/SELL</div>
        <div>ANYTHING</div>
       </div>
       <div className='flex mt-7 gap-4'>
        <div>
            <div className='text-3xl'>50+</div>
            <div>Customers</div>
        </div>
        <div className='text-5xl'> | </div>
        <div>
            <div className='text-3xl'>100+</div>
            <div>Products</div>
        </div>
       </div>
       <div></div>
       <input type="text" placeholder="what are you looking for?" className='bg-white mt-7 w-[45%] p-4 rounded-[8px] text-[20px]'/>
      </div>
      <div>
        <img className="h-[300px] rounded-3xl" src="https://images.unsplash.com/photo-1563020513-f41941becafa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHJlbnRhbCUyMG9iamVjdHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>
    </div>

     <div className='mt-15 font-serif'>
        <div className='flex justify-center font-serif font-bold text-4xl mb-2'>About Us</div>
        <div className='flex justify-center'>
         Register Today! and start buy/sell and renting
        </div>
        <div className='m-7 mt-10 mb-20 flex justify-center gap-7'>
         {props.data.map((elem) => {
             return(
               <Card img = {elem.img} title = {elem.title} description = {elem.description}/>
             )
         })}
        </div>
     </div>

     <div className='m-7 mt-10 mb-20'>
      <div className='font-bold text-2xl'>What Customers say about</div>
      <div className='font-bold text-2xl'>TRADEHIVE?</div>
      <div className='flex gap-7 m-4 mt-10 mb-15'>
        {props.custreviewdata.map((elem) => {
             return(
               <Customer des = {elem.des} img = {elem.img} name = {elem.name} proffession = {elem.proffession} rating = {elem.rating}/>
             )
          })} 
     </div>
     </div>

    </div>
  )
}

export default home
