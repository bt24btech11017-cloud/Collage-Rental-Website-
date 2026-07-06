import React, { useEffect, useState } from 'react'
import Cartcard from './cartcard'
import {auth,db} from './configuration/firebase'
import {getDocs,collection,query,where} from 'firebase/firestore'
//const referencetoproductslist = collection(db,'cart')

const cart = () => {
  
  //FETCHING DATA FROM THE DATA BASE
  const [productslist,setproductslist] = useState([])

  const getproducts = async() => {
     const q = query(collection(db,'cart'),where("useruid","==",auth?.currentUser?.uid))
     try{
       const data =  await getDocs(q)
       const filterdata = data.docs.map((elem) => {
             return({...elem.data(),id: elem.id})
           })

       setproductslist(filterdata)
     }catch(error){
      console.log(error.message)
     }   
  }

  useEffect(() => {
     getproducts()
  },[])

  return (
    <div>
      <div className='text-4xl m-7 mt-2 p-5 border-b-2'>SHOPPING CART</div>
      <div className='border-2 w-[full] h-[100vh] m-7 p-14 flex flex-col gap-15 overflow-y-auto shrink-0'>
         {productslist.map((elem) => {
          return(<Cartcard title = {elem.title} img = {elem.img} price = {elem.price} description = {elem.description} selleremail = {elem.selleremail} sellerphone = {elem.sellerphone}/>)
         })}
      </div>
    </div>
  )
}

export default cart
