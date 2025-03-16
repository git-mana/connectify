import React from 'react'
import './index.css'
import './App.css'

const Login_firstpart = () => {
  return (
    <>
    <div className='login_page absolute'>
      <div className='login_first flex flex-col relative'>
        <div className=' background_first bg-slate-400'>
        <span className='absolute font-bold align-top  '>connectify</span>
        <span className=' absolute top-12 text-base font-normal '>Recent logins</span>
        <span className='absolute top-20 font-normal '>Click your picture or add an account.</span>
        <div className="user absolute">
            <div className="usertop absolute hidden sm:block sm:min-w-[110px] min-h-[150px]">
               <img className=' absolute' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSLg1lPdEzJLlxU7HAamWIpzZMfjw72o6Cka4cFHXolD_7Ov9oqm_ni_2bQIxO4HDFkA&usqp=CAU" alt="" />
            </div>
            <div className="userbottom absolute hidden sm:block sm:min-w-[110px] ">
              <span className=' text-sm bottom-2 absolute '>Add Account</span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Login_firstpart