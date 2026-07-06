import React from 'react'
import {collection,addDoc} from 'firebase/firestore'
import {db,auth} from './configuration/firebase'

//Writing the add function so that when ever a user click add listing product is added to the cart
    const referencetoproductcart = collection(db,'cart')
     const adddatatofirebase = async(title,price,img,description,selleremail,sellerphone) => {
          try{
             await addDoc(referencetoproductcart,{
              title:title,
              price: price,
              img: img,
              description: description,
              selleremail: selleremail,
              sellerphone: sellerphone,
              useremail: auth.currentUser.email,
              useruid: auth.currentUser.uid
            })
          }catch(error){
            console.log(error)
          }
      } 

const productcard = ({name,condition,description,price,img,qty,selleremail,sellerphone}) => {
  return (
    <div className='w-[200px] border-2 p-3 rounded-2xl h-[370px]'>
      <img src={img} className='object-cover h-[150px] w-[165px] rounded-2xl text-center mb-2' alt="" />
      <div className='font-bold text-[15px] mb-2'>{name}</div>
      <div className='flex gap-3'>
         <div className='p-[5px] inline-block border-[1px] rounded-[6px] text-[12px]'>{condition}</div>
         <div className='p-[5px] inline-block border-[1px] rounded-[6px] text-[12px]'>Qty: {qty}</div>
      </div>
      <div className=' text-[12px] h-[70px] overflow-y-auto mt-[10px]'>{description}</div>
      <div className='flex justify-between mt-3'>
        <div>
          <div className='text-[12px]'>Price</div>
          <div className='text-[12px] font-bold'>${price}</div>
        </div>
        <button className='text-[12px] bg-red-400 p-[7px] rounded-[6px] text-white' onClick={() => {
          adddatatofirebase(name,price,img,description,selleremail,sellerphone)
          alert('product added succesfully!')
        }}>Add Listing</button>
      </div>
    </div>
  )
}

export default productcard
