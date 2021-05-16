import React, { useState } from 'react'
import './Join.css'

function Join() {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState('');

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage('Email is valid, Full Send!');
    } else {
      setIsValid(false);
      setMessage('Your email is invalid, bro!');
      
    }
  };

  return (
    <>
    <div className="contain">

    
      <form  action="/">
        <div className="joinUs">
        <h3>You're Still Here? Join the Journey Bro</h3>
        <div className="submitForm">
        <input type="email" className='emailSubmit' placeholder='Your email...' onChange={validateEmail}/>
        <input type='submit' className='submitBro' variant="primary" />
        </div>
        <div className="para">
        <p className={`message ${isValid ? 'success' : 'error'} submission`}>
          {message}
        </p>
        
        </div>

        
      
        </div>
        </form>
        </div>
    </>
  )
}

export default Join
