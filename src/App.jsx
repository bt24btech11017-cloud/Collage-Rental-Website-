import React, { useEffect, useState } from 'react'
import Header from './header'
import Home from './home'
import Footer from './footer'
import pot from './assets/pot.png'
import call from './assets/call.png'
import box from './assets/box.png'
import cus1 from './assets/cus1.png'
import cus2 from './assets/cus2.png'
import Sell from './sell'
import Contacts from './contacts'
import Error from './ERROR'
import Signup from './signup'
import { Route,Routes } from 'react-router-dom'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './configuration/firebase'
import Login from './login'
import Productpage from './productpage'
import MyListings from './mylistings'
import Cart from './cart'

const App = () => {
  const data = [
    {
      img : pot,
      title: "Large Assortment",
      description: "we offer many different types of products with fewer variations in each category."
    },
        {
      img : call,
      title: "Fast & Free Shipping",
      description: "4-day or less delivery time, free shipping and an expedited delivery option."
    },
        {
      img : box,
      title: "24/7 Support",
      description: "answers to any business related inquiry 24/7 and in real-time."
    }
  ]

  const custreviewdata = [
    {
     des: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
     img : cus1,
     name: "John Doe",
     proffession: "Youtuber",
     rating: "4.5/5"
    },
    {
     des: "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. ",
     img : cus2,
     name: "Emilly Kellerman",
     proffession: "Jornalist",
     rating: "4.7/5"
    }
  ]

  const [user,setuser] = useState(null)
  useEffect(() =>{
    return onAuthStateChanged(auth,(logindetails) => {
      setuser(logindetails)
    })
  },[]) 

  return (
    
    <div>
      <Header user = {user}/>
      <Routes>
        <Route path = "/" element = {<Home data = {data} custreviewdata = {custreviewdata}/>}></Route>
        <Route path = "/sell" element = {<Sell/>}></Route>
        <Route path = "/contacts" element = {<Contacts/>}></Route>
        <Route path = "*" element = {<Error/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/login" element = {<Login/>} ></Route>
        <Route path="/products" element = {<Productpage/>}></Route>
        <Route path="/mylistings" element = {<MyListings/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
