import React, { use, useState } from 'react'
import signlogo from './assets/signuplogo.png'
import {Link,useNavigate} from 'react-router-dom'
import {auth,provider} from './configuration/firebase'
import { createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth'

const signup = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const navigate = useNavigate()
    console.log(auth.currentUser?.email)
  return (
    <div className='flex items-center justify-center p-5'>
        <div className='h-[90vh] flex m-5 w-[80%]'>
            <div className='w-[50%] h-[100%]'>
              <div className='text-5xl font-bold'>Welcome Back</div>
              <div className='mt-2 mb-4'>Please Enter your details.</div>

              <div className='text-[17px] font-serif'>Email</div>
              <input type="text" className='border-1 rounded-[3px] mb-7 w-[60%]' value = {email} onChange={(e) => {
                setemail(e.target.value)
              }}/>
              <div className='text-[17px] font-serif'>Password</div>
              <input type="password" className='border-1 rounded-[3px] w-[60%] mb-10' value={password} onChange={(e) => {
                setpassword(e.target.value)
              }} />

              <button className='border-1 rounded-[3px] mb-3 w-[60%] bg-purple-500 text-white p-[5px]' onClick={async()=>{
                try{
                  await createUserWithEmailAndPassword(auth,email,password)
                  navigate('/')
                  setemail('')
                  setpassword('')
                  alert('User Logged in successfully.')
                }catch(error){
                   if(error.code == 'auth/email-already-in-use'){
                    alert('User already Exists, Please Login.')
                    navigate('/login')
                   }else if(error.code == 'auth/weak-password'){
                    alert('Password should be at least 6 characters')
                   }else if(error.code == 'auth/invalid-email'){
                    alert('Enter a valid Email')
                   }
                   else{
                    console.log(error.message)
                   }
                }
              }}>Sign Up</button>
              <button className='border-1 rounded-[3px] mb-7 w-[60%] flex justify-center mb-5'  onClick={async() => {
               try{
                 await signInWithPopup(auth,provider)
                 alert('User Logged in successfully.')
                 navigate('/')
               }catch(error){
                console.log(error.message)
               }
              }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10" alt="" className='h-[22px]'  />Sign in With Google</button>

              <div className='p-[4px]'>Already, have an account? <Link to='/login' className='text-blue-700 underline'>Login</Link></div>
            </div>

            <div className='w-[50%] h-[100%] bg-[#C1DCDC] rounded-2xl flex justify-between items-center'>
                <img src={signlogo} className='h-[100%] w-[100%] object-cover' alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default signup
