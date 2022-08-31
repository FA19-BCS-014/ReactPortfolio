import React, { useState } from 'react'
import"./Contact.scss"

function Contact() {
  const myStyle={
    backgroundImage: 
"url('assets/bbb.png')",
    height:'89vh',
    backgroundSize: 'cover',
};

  const [message , setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault ()
    setMessage(true)
  }
  return (
    <div className='Contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt=''></img>
      </div>
      <div className='right'  style={myStyle}>
        <h2>contact...</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email'></input>
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Message Sent </span>}
        </form>
      </div>
    </div>
  )
}

export default Contact