import React, { useEffect, useState } from 'react'
import ProductCard from './productcard'
import {auth, db} from './configuration/firebase'
import {getDocs,collection} from 'firebase/firestore'
// name,condition,description,price,img,qty
export const referencetoproductslist = collection(db,'productcard')

const productpage = () => {
 
    //READING DATA FROM FIREBASE DATABASE  
    const [productslist,setproductslist] = useState([]) //contains all the data from the database
    const [search,setsearch] = useState('')
    
    //THIS FILTERDATASEARCH IS USED TO IMPLEMENT THE SEARCH FUNCTIONALITY 
    const filteredsearch = productslist.filter((elem) => {
      return elem.name.toLowerCase().includes(search.toLowerCase())
    })

    const getproductslist = async() => {
         try{
           const data = await getDocs(referencetoproductslist)
           const filterdata = data.docs.map((elem) => {
             return({...elem.data(),id: elem.id})
           })

           setproductslist(filterdata)
         }catch(error){
            console.log(error)
         }
    }
    
    //USE EFFECT AUTOMATICALLY LOADS ALL THE DATA
    useEffect(() => {
      getproductslist()
    },[])

  return (
    <div>
      <div className='bg-[#C1DCDC] h-[8vh] w-[full] m-7 mt-0 rounded-2xl flex items-center justify-between pl-[2vw] pr-[2vw]'>
        <div className='flex flex-col gap-[3px]'>
            <div className='border-[1.6px] w-[22px] border-white'></div>
            <div className='border-[1.6px] w-[22px] border-white'></div>
            <div className='border-[1.6px] w-[22px] border-white'></div>
        </div>
        <input type="text" placeholder='Search for shoes,watches....' className='bg-white w-[37vw] p-2 rounded-2xl' value={search} onChange={(elem) => {
            setsearch(elem.target.value)
        }}/>
        <div className='flex gap-2 justify-center items-center'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZIQXpTyQZXZSMrmz6hegwAzFbeI9BrAFN02nlA-3bA&s=10" className='h-[25px] rounded-[4px]'></img>TRADEHIVE IITH</div>
      </div>

      <div className='h-[80vh] m-7 border-2 overflow-y-auto p-[40px] justify-center flex gap-10 flex-wrap'>
        {filteredsearch.map((elem) => {
            return(
                <ProductCard name = {elem.name} condition={elem.condition} description={elem.description} price={elem.price} img={elem.img} qty={elem.qty} selleremail={elem.selleremail} sellerphone={elem.sellerphone}/>
            )
        })}
       
      </div>
    </div>
  )
}

export default productpage
