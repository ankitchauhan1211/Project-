import { useContext, useEffect, useState } from "react";
import Login from "./component/login";
import Otp from "./component/otp";
import Logout from "./component/logout";



function App( {numberdash}){

  const [log,setLog]=useState(false);
  const [user,setUser]=useState(null);
  const [num,setNum]=useState('')

  const number=localStorage.getItem('number')
  const otp=localStorage.getItem('otp')
  console.log(number,otp,"snbadv")
  useEffect(()=>{
   if(number && otp){
      setUser("otp") 
  }
  else if(number){
    setUser('number')
  }
  
 
},[])




  
 
  // condition for data entry is number and otp combination 

  const handlelogin =(number)=>{

if(number.length==10){
    setUser('number')
    localStorage.setItem('number',number)
  
  }
  
  };
   
  const  handlelogin1 =(otp)=>{
    
     if(otp==9999){
      console.log('papa')
      setUser('otp')
      localStorage.setItem('otp',otp)
    }
  
    else if(otp.length==4){
       localStorage.setItem('otp',otp)
       setUser('otp')

     };

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
   

return(


  <>
{ !user ? <Login  handlelogin={handlelogin} /> : ''}
{user=='number' ? <Otp handlelogin1={handlelogin1} Numberdash={Numberdash}/> : ''}
{user=="otp"  ? <Logout handlelogout={handlelogout}/> : ''}


  </> );


 


 

   

    
    
   

  
  
}

export default App;

