import React from 'react'
import Cart from './assets/cart.png'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from './configuration/firebase'
import { useNavigate } from 'react-router-dom'

const header = (props) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between p-7'>
      <div className='flex gap-6 items-center'>
        <div className='text-2xl flex font-bodoni gap-3 pr-5'>
           <div>TRADEHIVE</div>
           <div>IITH</div>
        </div>
        <div className='flex font-serif gap-7 text-[15px] text-gray-700 justify-between items-center'>
             <Link to="/"><div className='hover:border-b-2 hover:border-black'>HOME</div></Link>
             <Link to="/products"> <div className='hover:border-b-2 hover:border-black'>PRODUCTS</div></Link>
             <Link to="/contacts"><div className='hover:border-b-2 hover:border-black'>CONTACTS</div></Link>  
        </div>
      </div>
      <div className='flex font-serif gap-7 text-[15px]  text-gray-700 justify-between items-center'>
        {
          props.user ? (
            <>
            <Link to="/sell"><div className='hover:border-b-2 hover:border-black'>SELL</div></Link>
            <Link to="/mylistings"><div className='hover:border-b-2 hover:border-black'>MyListings</div></Link>
             <Link to="/cart"><div><img src={Cart} alt="Cart" className='h-[40px]'/></div></Link>
            </>
          ) : (
          <>
             <Link to="/signup"><div className='hover:border-b-2 hover:border-black'>SELL</div></Link>
             <Link to="/signup"><div className='hover:border-b-2 hover:border-black'>MyListings</div></Link>
              <Link to="/signup"><div><img src={Cart} alt="Cart" className='h-[40px]'/></div></Link>
          </>
          )
        }

        {props.user ? (
          <>
            <div className='border-2 p-2 rounded-[8px]' onClick={async() =>{
              await signOut(auth)
              navigate('/')
            }}>LOGOUT</div>
            <div className='border-2 p-2 rounded-[8px]'>{props.user?.email}</div>
          </>  
         ) : (
          <>
           <Link to="/login"><div className='border-2 p-2 rounded-[8px]'>LOGIN</div></Link>
           <Link to="/signup"><div className='border-2 p-2 rounded-[8px]'>SIGN UP</div></Link>
          </>
         )}   
      </div>
    </div>
  )
}

export default header
