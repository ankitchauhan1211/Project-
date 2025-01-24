import React, {useEffect,useState, createContext } from 'react';
import { getLocalstorage, } from '../localstorage/localstorage';

export const AuthContext= createContext();
export default function Contextapi( {children}) {
  const [userData,setUserData]=useState(null)
  
  useEffect(()=>{
    const {data,number}=getLocalstorage()
     setUserData({data,number})
     console.log(userData)
    
  },[])

 
  
 
  return (
  
    <div>
     <AuthContext.Provider value={userData}>

         {children}
        
     </AuthContext.Provider>
    </div>
  )
}
