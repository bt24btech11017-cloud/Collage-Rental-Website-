import React, { useState } from 'react'
import ProductCard from './productcard'
import { useNavigate } from 'react-router-dom';
import {db} from './configuration/firebase'
import {addDoc} from 'firebase/firestore'
import {referencetoproductslist} from './productpage'
import {auth} from './configuration/firebase'

const sell = () => {

    //CREATING DATA FROM FIREBASE DATABASE.
    const [name,setname] = useState('');
    const [condition,setcondition] = useState('');
    const [description,setdescription] = useState('');
    const [price,setprice] = useState(0);
    const [img,setimg] = useState('');
    const [qty,setqty] = useState(0);
    const [selleremail,setselleremail] = useState('')
    const [sellerphone,setsellerphone] = useState('')

    const [details,setdetails] = useState([]);
    const navigate = useNavigate();

    const adddatatofirebase = async(name,price,qty,img,description,condition) => {
      try{
         await addDoc(referencetoproductslist,{
          name:name,
          price: price,
          qty: qty,
          img: img,
          description: description,
          condition: condition,
          firebaseuid: auth?.currentUser?.uid,
          useremail: auth?.currentUser?.email,
          selleremail: selleremail,
          sellerphone: sellerphone
        })
      }catch(error){
        console.log(error)
      }
    } 

  return (
    <div className='h-[100vh] m-7 flex gap-4'>
      <div className='w-[50%] bg-[#C1DCDC] h-[100%] p-7'>
        <div className='text-4xl font-serif border-b-2'>ADD ITEMS</div>
        <form className='flex flex-col mt-5 w-[70%]' onSubmit={(e) =>{
            e.preventDefault();

             setdetails([...details,{
                    name:name,
                    condition:condition,
                    description:description,
                    price:price,
                    img:img,
                    qty:qty
                }])
                console.log(details)
                setname('')
                setcondition('')
                setdescription('')
                setprice()
                setimg('')
                setqty()
        }}>
            <div className='font-bold'>Name of the Product?</div>
            <input type="text" className='border-2 p-2 h-[30px] mb-4' value={name} onChange={(e) => {
               setname(e.target.value);
            }}/>
            <div className='font-bold'>Quantity?</div>
            <input type="text" className='border-2 p-2 h-[30px] mb-4' value={qty} onChange={(e) => {
               setqty(e.target.value);
            }}/>
            <div className='font-bold'>Condition.</div>
            <input type="text" className='border-2 p-2 h-[30px] mb-4' value={condition} onChange={(e) => {
               setcondition(e.target.value)
            }}/>
            <div className='font-bold'>Description</div>
            <input type="text" className='border-2 p-2 h-[50px] mb-4' value={description} onChange={(e) => {
                setdescription(e.target.value)
            }}/>
            <div className='font-bold'>Price?</div>
            <input type="text" className='border-2 p-2 h-[30px] mb-4' value={price} onChange={(e) => {
                setprice(e.target.value)
            }}/>
            <div className='font-bold'>Seller Email:</div>
            <input type="text" className='border-2 p-2 h-[30px] mb-4' value={selleremail} onChange={(e) => {
                setselleremail(e.target.value)
            }}/>
            <div className='font-bold'>Seller Phone Number</div>
            <input type="text" className='border-2 p-2 h-[30px] mb-4' value={sellerphone} onChange={(e) => {
                setsellerphone(e.target.value)
            }}/>
            <div className='font-bold'>Upload Image</div>
            <input type="text" className='border-2 p-2 h-[30px]' placeholder='Upload URL' value={img} onChange={(e) => {
               setimg(e.target.value)
            }}/>

            <button className='mt-10 border-2 p-2 bg-red-400 text-white'>SUBMIT</button>
        </form>
      </div>

      <div className='w-[50%] h-[95%] p-7'>
        <div className='flex justify-between'>
           <div className='text-4xl font-serif'>RECENT LISTINGS</div>
           <div className='border-[2px] bg-red-400 text-white flex justify-center items-center p-2 rounded-[10px]' onClick={() => {
            details.map((elem) =>{
              adddatatofirebase(elem.name,elem.price,elem.qty,elem.img,elem.description,elem.condition)
            })
            navigate('/')
           }}>UPLOAD All</div>
        </div>
       <div className='flex gap-4 mt-4 flex-wrap overflow-y-auto h-[100%]'>
         {details.map((elem) => {
           return (<ProductCard name = {elem.name} condition = {elem.condition} description = {elem.description} price = {elem.price} img={elem.img} qty = {elem.qty}/>)
        })}
       </div>
      </div>
    </div>
  )
}

export default sell
