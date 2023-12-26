import React from 'react'
import './login.css'

const Login = () => (
    <div className="login">
        <div className="login-wrapper">

            <div className="login-left">
                <h3 className="login-logo">Shareify</h3>
                <span className="login-desc">
                    Connect with prnds and the world around u on Shareify
                </span>
            </div>

            <div className="login-right">
                <div className="login-box">
                    < input placeholder="Email" className="login-input" />
                    < input placeholder="Password" className="login-input" />
                    <span className="login-forgot">Forgot Password?</span>
                    <div className="flex w-[100%] justify-around">
                        <button className='login-btn w-[40%] '> Log In</button>
                        <button className='login-reg-btn w-[40%]'>Log up</button>
                    </div>
                </div>
            </div>
        </div >
    </div >
)

export default Login