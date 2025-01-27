import { useContext, useEffect, useState } from "react";
import Login from "./component/login";
import Otp from "./component/otp";
import Logout from "./component/logout";



function App(){

  const [log,setLog]=useState(false);
  const [user,setUser]=useState(null);
  const [num,setNum]=useState('')

  const number=localStorage.getItem('number')
  const otp=localStorage.getItem('otp')
  useEffect(()=>{
  if(number && otp){
    setLog(true)
    setUser("otp")
   
    
  }

  
},[])




  
 
  // condition for data entry is number and otp combination 

  const handlelogin =(number)=>{

  if(number.length==10){
    setUser('number')
    setNum(number)
    localStorage.setItem('number',number)
  
  }
  
  };
   
  const  handlelogin1 =(otp)=>{
     const otps=JSON.stringify(otp)
     if(otps.length===4){
      console.log('papa')
    
      setUser('otp')
      localStorage.setItem('otp',otp)
    }
     else{
      setUser('number')
     }

  };
  
   

  const handlelogout =(val)=>{
      if(val==null){
        setUser(null)
        localStorage.clear()
        console.log(val)
      }
    };

return(


  <>
{ !user ? <Login  handlelogin={handlelogin}/> : ''}
{user=='number' ? <Otp handlelogin1={handlelogin1}/> : ''}
{user=="otp"  ? <Logout handlelogout={handlelogout}/> : ''}


  </> );


 


 

   

    
    
   

  
  
}

export default App;

