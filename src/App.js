import { useContext, useEffect, useState } from "react";
import Login from "./component/login";
import Otp from "./component/otp";
import Logout from "./component/logout";
import Call from "./component/call/call";



function App( {numberdash}){

  const [log,setLog]=useState(false);
  const [user,setUser]=useState(null);
  const [num,setNum]=useState('')

  const number=localStorage.getItem('number')
  const otp=localStorage.getItem('otp')
  
  useEffect(()=>{
   if(number && otp){
      setUser("otp") 
  }
  else if(number){
    setUser('number')
  }
  
 
},[])




  
 
  // condition for data entry is number and otp combination 

  const handlelogin = (number)=>{
    
       



if(number.length==10){
    setUser('number')
    localStorage.setItem('number',number)
  
  }
  
  };
   
  const  handlelogin1 =(otp)=>{
    
     if(otp==1234){
      // console.log('papa')
      setUser('otp')
      localStorage.setItem('otp',otp)
    }
  
    // else if(otp==6666){
    //    localStorage.setItem('otp',otp)
    //    setUser('otp')

    //  };

  };
  
const handlelogout =(val)=>{
      if(val==null){
        setUser(null)
        localStorage.clear()
        console.log(val)
      }
    };

    const Numberdash=(value)=>{
      localStorage.clear()
      setUser(null)
      

    }

const handleclick=(val)=>{

 const  value=parseInt(val)
//  console.log(typeof(value))

   if(isNaN(value)){
    console.log('your input is invalid or not a numbar')

   }
   else{
       console.log(value*2)
   }


}



   

return(


  <>
{ !user ? <Login  handlelogin={handlelogin} /> : ''}
{user=='number' ? <Otp handlelogin1={handlelogin1} Numberdash={Numberdash}/> : ''}
{user=="otp"  ? <Logout handlelogout={handlelogout}/> : ''}
{/* <Call handleclick={handleclick}></Call> */}



  </> );


 


 

   

    
    
   

  
  
}

export default App;

