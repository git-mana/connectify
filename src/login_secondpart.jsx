import React from 'react'
import './index.css'
import './App.css'
import { useNavigate } from 'react-router-dom';

const Login_secondpart = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    // Assuming login is successful, navigate to home page
    navigate('/home');
  };

  return (
   <>
    {/* <div className='login_page absolute'> */}
    <div className=' relative login_secondpart flex flex-col gap-2 bg-white rounded w-56   '>
        <input className='rounded-md' type="text" placeholder='Email Address' />
        <input className='rounded-md' type="password" placeholder='Password'/>
        <button onClick={handleLogin} className='login_btton bg-customGreen text-white rounded-md font-semibold '>Log in</button>
        <span className='  font-normal text-xs text-customGreen self-center'>Forgotten Password?</span>
        <hr />
        <button className=' createAccount_btton text-white rounded-md font-semibold bg-customGold self-center text-xs'>Create new account</button> 
    </div>
   </>
  )
}

export default Login_secondpart
