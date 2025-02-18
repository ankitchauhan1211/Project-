import React, { useEffect, useState } from 'react'
import './login.css';
import  login from'./login.jpg';


export default function Login({handlelogin}) {
 
  const [number,setNumber]=useState('');
  const [color,setColor]=useState('#1c1c1c66');
  const [error,setError]= useState(null);
  const [token,setToken]=useState('')
  
  
  const numstart = number.split('')
  if(numstart[0]<=5){
     setNumber('')
  }

  if(isNaN(number)){
    setNumber('')
  }
  

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
  
  const submit =async ()=>{
  // localStorage.setItem('number',number)
  // localStorage.setItem('otp',JSON.stringify(otp))
 if( number.length==10){

            try {
                  const response = await fetch('http://vts.techveda.consulting/api/auth/user/login', {
                      method: 'POST',
                      headers: { 'Content-Type' : 'application/json'}, //no content type for body of type FormData
                      body: JSON.stringify({phone_number : number})
                  });
                  const data = await response.json();
                  console.log(data)
                  
                  if(!response.ok){
                      throw new Error(alert(data.message) || alert("Invalid response"));

                  }

                  handlelogin(data.json.data.identification_token,number) ;
                  
              
              } catch (error) {
                  console.log(error.message);
              }
            }
        

              // 9999223772 phone number to call

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
