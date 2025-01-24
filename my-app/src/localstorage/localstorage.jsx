const OTP = [
    {
        "otp1": '9999',  
        "otp2": '3333'
    },
    
]

const number=[
    {
        "number1" : '9999999999',
        "number2" : '3333333333'
    },
]

export const setLocalstorage=()=>{
    localStorage.setItem("OTP",JSON.stringify(OTP))
    localStorage.setItem("number",JSON.stringify(number))
  

}

export const getLocalstorage=()=>{
    
   const data = JSON.parse(localStorage.getItem('OTP'))
   const number=JSON.parse(localStorage.getItem('number'))
   return {data,number} ;
}

