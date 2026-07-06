import React, { useState } from 'react'

const contacts = () => {
    const [Name,SetName] = useState('')
    const [Email,SetEmail] = useState('')
    const [text,Settext] = useState('')

    const [data,Setdata] = useState([])
  return (
    <div>
      <div className='pr-[12vw] pl-[12vw] pt-[5vh]'>
      <div className='text-[40px] font-bold'>CONTACT US</div>
      <div className='text-[15px]'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </div>
      </div>

      <div className='pr-[12vw] pl-[12vw] pt-[5vh] h-[75vh] flex'>
       {/* LEFT */}

     <div className='w-[50%]'>
      <div className='flex justify-between'>
        <div className='p-[7px] rounded-[4px] w-[45%] bg-black text-white flex justify-center'>VIA SUPPORT CHAT</div>
        <div className='p-[7px] rounded-[4px] w-[45%] bg-black text-white flex justify-center'>VIA CALL</div>
      </div>
      <div className='border-2 rounded-[4px] p-[7px] mt-[15px] flex justify-center'>VIA EMAIL FORM</div>
      <form className='flex flex-col mt-[15px]'>
         <input className = 'border-2 rounded-[4px] mt-[15px] p-[5px]' value={Name} type="text" placeholder='Name' onChange={(elem) => {
            SetName(elem.target.value);
         }} />
         <input className = 'border-2 rounded-[4px] mt-[30px] p-[5px]' value={Email} type="text" placeholder='E-Mail' onChange={(elem) => {
            SetEmail(elem.target.value);
         }} />
         <input className = 'border-2 rounded-[4px] h-[17vh] mt-[30px] p-[5px]' value={text} type="text" placeholder='TEXT' onChange={(elem) => {
            Settext(elem.target.value);
         }}/>
         <button className='border-2 rounded-[4px] mt-[30px] p-[5px] bg-black text-white w-[50%]' onClick={(elem) => {
             elem.preventDefault();
             Setdata([...data,{name: {Name}, email: {Email}, text: {text}}]);
             SetName('');
             SetEmail('');
             Settext('');
             console.log(data);
         }}>SUBMIT</button>
      </form>
    </div>

    {/* RIGHT */}
      <div className='w-[50%] pl-[6vw]'>
      <img className = 'h-[80%] object-cover rounded-2xl' src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVsZXBob25lJTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" />
    </div>
    </div>
    </div>
  )
}

export default contacts
