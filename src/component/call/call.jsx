import React, { useState } from 'react'

export default function Call({handleclick}) {
    const [input,SetInput]=useState("")


  return (
    <div>
       <input onChange={(e)=>SetInput(e.target.value)}/>
       <button onclick={handleclick(input)}>Submit</button>

    </div>
  )
}
