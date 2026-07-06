import React, { useEffect, useState } from 'react'
import ProductCard from './productcard'
import {getDocs,collection,query, where,deleteDoc,doc,updateDoc} from 'firebase/firestore'
import {onAuthStateChanged} from 'firebase/auth'
import {referencetoproductslist} from './productpage'
import {auth, db,} from './configuration/firebase'

const mylistings = () => {

   //Here I have implemented the functionality, such that only those products which have been uploaded by the user, he can only see those products which have
   //been upload by the loged in user, this is similar to the get functionality only nothing much different.

    const [mylisting,setmylistings] = useState([])
    const q = query(collection(db,'productcard'),where("firebaseuid","==",auth?.currentUser?.uid))
   
    const getmylistings = async() => {
        try{
            const data = await getDocs(q)

            const filterdata = data.docs.map((elem) => {
                return ({...elem.data(),id: elem.id})
            })

            setmylistings(filterdata)
        }catch(error){
            console.log(error.message)
        }  
    }

    useEffect(() =>{
       getmylistings()
    },[])

    // Implementing the delete functionality, by adding a button to each listing. 

    const deletelisting = async(id) => {
        try{
          await deleteDoc(doc(db,"productcard",id))
        }catch(error){
            console.log(error.message)
        }
        
    }

    //Implementing the update functionality.
    const [name,setname] = useState('')
    const [condition,setcondition] = useState('')
    const [quantity,setquantity] = useState('')
    const [description,setdescription] = useState('')
    const [price,setprice] = useState('')

    const updatelisting = async(id) => {
      try{
       await updateDoc(doc(db,"productcard",id),{
        name: name,
        condition: condition,
        description: description,
        price: price,
        qty: quantity
       })
      }catch(error){
        console.log(error.message)
      }
    }

  return (
    <div>
      <div className='text-5xl m-7'>MY LISTINGS</div>
      <div className='flex gap-2'>
        <div className='h-[80vh] m-7 border-2 overflow-y-auto p-[40px] justify-center flex gap-10 flex-wrap w-[70%]'>
          {mylisting.map((elem) => {
              return(
                  <div>
                  <ProductCard name = {elem.name} condition={elem.condition} description={elem.description} price={elem.price} img={elem.img} qty={elem.qty}/>
                  <div className='flex justify-between p-[3px] rounded-[8px] border-[2px] mt-2 items-center'>
                    <button className='border-[2px] p-2 mt-2 rounded-[5px] bg-red-400 text-white text-[10px]' onClick={() => {
                      deletelisting(elem.id)
                      getmylistings()
                    }}>DELETE</button>
                    <button className='border-[2px] p-2 text-[10px] mt-2 rounded-[5px] bg-red-400 text-white' onClick={() => {
                      updatelisting(elem.id)
                      getmylistings()
                      setname('')
                      setcondition('')
                      setquantity('')
                      setdescription('')
                      setprice('')
                    }}>UPDATE</button>
                  </div>
                
                  </div>
              )
          })}
        </div>

        <div className='h-[80vh] m-7 overflow-y-auto p-[40px] flex flex-col gap-10 flex-wrap w-[27%] bg-[#C1DCDC]'>
          <div className='border-b-2 w-[61%]'>ENTER UPDATE DETAILS</div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2'>
              <div className='w-[50%]'>NAME</div>
              <input type="text" className='border-2 rounded-[5px]' vlaue = {name} onChange={(e) => {
                  setname(e.target.value)
              }} />
            </div>
            <div className='flex gap-2'>
              <div className='w-[50%]'>CONDITION</div>
              <input type="text" className='border-2 rounded-[5px]' value={condition} onChange={(e) => {
                  setcondition(e.target.value)
              }} />
            </div>
            <div className='flex gap-2'>
              <div className='w-[50%]'>QUANTITY</div>
              <input type="text" className='border-2 rounded-[5px]' value={quantity} onChange={(e) => {
                  setquantity(e.target.value)
              }} />
            </div>
            <div className='flex gap-2'>
              <div className='w-[50%]'>DESCRIPTION</div>
              <input type="text" className='border-2 rounded-[5px]' value={description} onChange={(e) => {
                setdescription(e.target.value)
              }} />
            </div>
            <div className='flex gap-2'>
              <div className='w-[50%]'>PRICE</div>
              <input type="text" className='border-2 rounded-[5px]' value={price} onChange={(e) => {
                setprice(e.target.value)
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mylistings
