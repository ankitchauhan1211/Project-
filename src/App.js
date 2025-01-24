import { useContext, useEffect, useState } from "react";
import Login from "./component/login";
import Otp from "./component/otp";
import Logout from "./component/logout";
import { AuthContext } from "./context/contextapi";
import { setLocalstorage } from "./localstorage/localstorage";




 
function App(){
// use to get data from local storage
  useEffect(()=>{
    setLocalstorage();
  },[])
 
  const [user,setUser]=useState(null);
  const data = useContext(AuthContext) ;

  console.log()

  
 
  // condition for data entry is number and otp combination 

  const handlelogin =(number)=>{

     if(number==`${data.number[0].number1}`){
       setUser('number')
         
         alert("OTP is 9999")
      }

     if(number==`${data.number[0].number2}`){
      setUser('number')
       
       alert("OTP is 3333")
     }
     
     else {
       alert("invalid credentials")
    }
};
 

  const  handlelogin1 =(otp)=>{
      
     if(otp==`${data.data[0].otp1}`){
      setUser('otp')
      console.log(otp)
     }
     if(otp==`${data.data[0].otp2}`){
      setUser('otp')
      console.log(otp)
     }
  } 
  const handlelogout =(val)=>{
      if(val==null){
        setUser(null)
        console.log(val)
      }
  
    }



  


return(


  <>
{ !user ? <Login  handlelogin={handlelogin}/> : ''}
{user=='number' ? <Otp handlelogin1={handlelogin1}/> : ''}
{user=="otp" ? <Logout handlelogout={handlelogout}/> : ''}


 

 



  </>
  );


 


 

   

    
    
   

  
  
}

export default App;

