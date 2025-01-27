import React, { useEffect, useState } from 'react'
import './login.css';
import  login from'./login.jpg';


export default function Login({handlelogin}) {
 
  const [number,setNumber]=useState('');
  const [color,setColor]=useState('#1c1c1c66');
  const [error,setError]= useState(null);

  
  // const numstart = number.split('')
  // if(numstart[0]<=5){
  //    setNumber('')
  // }
  

  const Change=(e)=>{
    const  newnumber= e.target.value
    setNumber(newnumber)
         if(newnumber.length==10){
            setColor('rgba(255,166,0,0.821)')
          }
          else{
            setColor('#1c1c1c66')
          }
   
  }


 


  

  const submithandler=(e)=>{
    e.preventDefault()
    
  
    setNumber('')
    
  }
  
  const submit =()=>{
   
    
    
    if (isNaN(number)){
       setError("error: input should me a number")
    }
    else{
    
      handlelogin(number)
    }

  // localStorage.setItem('number',number)
  // localStorage.setItem('otp',JSON.stringify(otp))
    
  
  };

  return (
  <div className="loginmaintop">

    <div className='login_top'>
        <div className="image">
            <img src={login} alt="login image" />    
        </div>
        
        <div className="textbox">
            <h1>Welcome back!</h1>
            <h6>Once verified, the next time you log in, you will <div className='text'>be required to enter the verification code</div> </h6>
        </div>
        
        <form onSubmit={(e)=>submithandler(e)} className='buttonform'>
                <div className="inputbox">
                    <h5>Phone Number</h5>
                  <input required  type='tel'  id='phone' pattern="[6-9]\d{9}"  value={number}  onChange={Change} placeholder='Enter your Number' maxLength = {10} />
                   {error && <p className='border' >{error}</p>}
                    <button onClick={submit} style={{backgroundColor: color}}>Send OTP</button>
                 </div>
        </form>
     
    </div>
    </div>
  )
}
