import React from 'react'
import Google from '../img/google-logo.png'
import images from '../img/images.jpg'
import github from '../img/github.png'
import profile from '../img/profile.jpg'
import email from '../img/email.png'
import pass from '../img/pass.png'
import './login.css'

const singup = () => {
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
                    <h1>Sign Up</h1>
                    <div>
                        <img src={email} alt="email"  className='email'/>
                        <input type="text" placeholder='user name' className='name'/>
                    </div>
                    <div className='pass-input'>
                        <img src={pass} alt="pass" className='pass' />
                        <input type="text" placeholder='pass' className='name'/>
                    </div>
                    <div className='login-button'>
                        <button> <a href="./">Sign Up</a></button>
                    </div>
                    <div className='link'>
                        <p><a href="./login">Alreay have account? </a></p>
                </div>
                <div className="footer">
                        < img  src={Google} alt="google" className='footimg'/>
                        < img  src={images} alt="facebook" className='footimg' />
                        < img  src={github} alt="github" className='footimg'/>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default singup