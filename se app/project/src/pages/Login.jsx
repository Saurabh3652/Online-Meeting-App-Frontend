import React from 'react'
import profile from '../img/profile.jpg'
import email from '../img/email.png'
import pass from '../img/pass.png'
import './login.css'

const Login = () => {
  return (
    <div className = "main">
        <div className='sub-main'>
            <div>
                <div className='imgs'>
                    <div className='container-img'>
                        <img src={profile} alt="logo" className='profile'/>
                    </div>
                </div>
                <div>
                    <h1>Login Page</h1>
                    <div>
                        <img src={email} alt="email"  className='email'/>
                        <input type="text" placeholder='user name' className='name'/>
                    </div>
                    <div className='pass-input'>
                        <img src={pass} alt="pass" className='pass' />
                        <input type="text" placeholder='pass' className='name'/>
                    </div>
                    <div className='login-button'>
                        <button ><a href="./">Login</a></button>
                    </div>
                    <div className='link'>
                        <p><a href="#">Forgot Password ? </a>Or <a href="./signup"> Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login