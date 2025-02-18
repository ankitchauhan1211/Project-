import React, { useEffect, useRef, useState } from 'react';
import './otp.css';
import login from './login.jpg';


export default function Otp({handlelogin1,Numberdash}) {

    const emptyinput=['','','','']
    const refs=[useRef(),useRef(),useRef(),useRef()]
    // console.log(refs)
    const [inputs,setInputs]=useState(emptyinput);
    const [Empty, setEmpty]=useState(emptyinput);
    const [time, setTime] = useState(20);
    const [style,setStyle]=useState('black');
    const [border,setColor]=useState('1px solid #1c1c1c23');
    
    const numberdata=localStorage.getItem('number');

    
   const Changeotp = ()=>{

    if(time==0){
      console.log('ankit')
      // localStorage.setItem('otp',JSON.stringify(6666))
      alert('resend otp is 6666')
      window.location.href='/otp.jsx'
        }
     

     }
    

    // Use to focus particular input box  
    useEffect(()=>{
       
      refs[0].current.focus();

    },[]);

  const handlesubmit = async (e)=>{
    e.preventDefault()
    const empty = Empty.join('')
    // console.log(empty)
   
    Empty.forEach((i)=>{
      // console.log(i)
      console.log([i]) 
      if (inputs[i] === ''){
           setColor('1px solid red')
      }
      else{

         setColor('1px solid  green')
         }
      }
    ); 

  //  use data to map data nad get a data in number form
    
    
  
    const num= parseInt(inputs.join(''))


  // use to send data to app.js file
  const token=localStorage.getItem('token')
  console.log(token)
  if(num.toString().length==4){
  try {
    const response = await fetch('http://vts.techveda.consulting/api/auth/user/submit_otp', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json'}, //no content type for body of type FormData
        body: JSON.stringify({ identification_token : token,
        otp:  num.toString() ,
        })
    });
    const data = await response.json();
    console.log(data)
    
    if(!response.ok){
        throw new Error(alert(data.message) || alert("Invalid response"));
    }
    // localStorage.setItem('token1', data.json.data.identification_token);
    localStorage.setItem('otp',num)
    // console.log(data);
    handlelogin1()
} catch (error) {
    console.log(error.message);
}

}
   
    
};

const handelinput=( e,index)=>{
    const value =e.target.value ;
    
    if(!Number(value))
        return ;
    
  // use to render to next column
    if(index < inputs.length -1){
      refs[index + 1 ].current.focus();

    };
    
    const copyinputs=[...inputs];
    copyinputs[index]=value;
     setInputs(copyinputs)

    const missed = inputs.map((item, i)=>{
         if(item=== ''){
             return i ;
            }
    
    }).filter((item)=>( item || item === 0));

    //  use to get missing box that we not enter any data
    
    // console.log('missed items is ', missed)
     setEmpty(missed) 
   


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
   

  };


useEffect(()=>{
  const intervalid=setInterval(()=>{
    if(time==0){
      setStyle('red')
    }

    if(time> 0){
      setTime(time -1);

    }
    else{
       clearInterval(intervalid)
    }
  },1000);
  return ()=>{
    clearInterval(intervalid)
  }
 
},[time])



 const changenumber=()=>{
   Numberdash(null)
 }


  return (
      <>
  <div className="topmain">
    <div className='otp_top'>
        <div className="otp_image">
            <img src={login} alt="" />
        </div>

        <div className="textarea">
            <h1>We've send you a code </h1>
            <h6>the code was sent to <b>{numberdata}</b> </h6>

        </div>


        <div className="otpbox">
           <div className='timer' onClick={Changeotp} ><p style={{ color : style} } >Resend code in {time}</p></div>
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
            style={{border: border}}
            />
           }

           )} </div>
          
           <button  >Submit OTP</button> 
           <div className="resend"  onClick={changenumber}><h6>Click to change phone number</h6> </div>
           </form>
        </div>

        


      
    </div>
    </div>
    </>
  )
}
