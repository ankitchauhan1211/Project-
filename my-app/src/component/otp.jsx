import React, { useEffect, useRef, useState } from 'react';
import './otp.css';
import login from './login.jpg';


export default function Otp({handlelogin1}) {

    const emptyinput=['','','','']
    const refs=[useRef(),useRef(),useRef(),useRef()]
    const [inputs,setInputs]=useState(emptyinput);
    const [Empty, setEmpty]=useState(emptyinput);
  
    
  // Use to focus particular input box  
    useEffect(()=>{
       
      refs[0].current.focus();

    },[]);

  const handlesubmit = (e)=>{
    e.preventDefault()
    const missed = inputs.map((item , i)=>{
      if(item === ''){
        return i;}
    
    }).filter((item ) => (item || item === 0));
    //  use to get missing box that we not enter any data
    setEmpty(missed);  

  
  //  use data to map data nad get a data in number form
    const data = inputs.map(Number)
    const num= parseInt(data.join(''))
  // use to send data to app.js file
    handlelogin1(num)
    
    
    
    
  }

   const handelinput=( e,index)=>{
    const value =e.target.value;
    

    if(!Number(value))
        return ;
    
  // use to render to next column
    if(index < inputs.length -1){
      refs[index + 1 ].current.focus();

    };
    

    const copyinputs=[...inputs];
    copyinputs[index]=value;
    setInputs(copyinputs)


   };

   const handonkeydown=(e,i)=>{
    
    
    if(e.keyCode===8){
      const copyinputs=[...inputs]
      copyinputs[i]='';
      setInputs(copyinputs)

      if (i > 0) {
        refs[i-1].current.focus();
      };
    };
   };

  const handlepast = (e) =>{

    const data = e.clipboardData.getData('text');
    
    
    if(!Number(data) || data.length !== inputs.length){
      return;
    }

 
    const pastcode = data.split('');
    setInputs(pastcode);
    refs[inputs.length - 1].current.focus();
   

  }



  return (
    <div className='otp_top'>
        <div className="otp_image">
            <img src={login} alt="" />
        </div>

        <div className="textarea">
            <h1>We've send you a code </h1>
            <h6>the code was sent to <b>ankit chuahan</b> </h6>

        </div>

        <div className="otpbox">
           <div className='timer'><p>Resend code in o.20 </p></div>
           <form onSubmit={(e)=>{handlesubmit(e)}}>
           <div className="input">
           { emptyinput.map((item, i)=>{

            return  <input 
            value={inputs[i]}
            key={i}
            type="text"
            ref={refs[i]} 
            maxLength={1} 
            onChange={(e)=> handelinput(e,i)}
            onKeyDown={(e)=>handonkeydown(e,i)}
            onPaste={handlepast}
            className = {Empty.includes(i) ? 'error1' : '' }
            />
           }

           )} </div>
          
           <button >Submit OTP</button> 
           <h6 ><a href='' >Click to Resend OTP</a></h6> 
           </form>
        </div>

        


      
    </div>
  )
}
