import React from 'react'
import './logout.css'

export default function Logout({handlelogout}) {
  const outtohome = (e)=>{
    
    e.preventDefault()
      handlelogout(null)
  }

  return (
    <div className='logout_top'>
        <div className="logout">
          <form onSubmit={(e)=>{outtohome(e)}}>
            <div className="logout_button"><button >Log out </button> <div><h1>WELCOME</h1></div> </div></form>
        </div>
       
        <h1>Welcom to main dashboard</h1>
    </div>
  )
}
