import React, { useState } from 'react'
import './login.css';
import  login from'./login.jpg';

export default function Login({handlelogin}) {
 
  const [number,setNumber]=useState('');

  const submithandler=(e)=>{
    e.preventDefault()
    console.log("number is ",number)
    
    setNumber('')
  }
  
  const submit =()=>{
    handlelogin(number)
  }

  
  return (
    <div className='login_top'>
        <div className="image">
            <img src={login} alt="login image" />    
        </div>
        
        <div className="textbox">
            <h1>Welcome back!</h1>
            <h6>Once verified, the next time you log in, you will <div>be required to enter the verification code</div> </h6>
        </div>
        
        <form onSubmit={(e)=>submithandler(e)}>
                <div className="inputbox">
                    <h5>Number</h5>
                    <input   required  type='tel'  id='phone' pattern='[0-9]{3} - [0-9]{2}-[0-9]{3}'  value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='Enter your Number' maxLength = {10}/>
                    <button onClick={submit}>Send OTP</button>
                 </div>
        </form>

      
    </div>
  )
}
