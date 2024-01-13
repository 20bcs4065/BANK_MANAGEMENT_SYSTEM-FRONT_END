import React from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Page2 = () => {
    const navigation= useNavigate()
  return (
    <div>
        <div>
            <nav>
                <div className='cont'>
                    <div className='title'>
                        <span className='t1'>Bank</span> 
                        <span className='t2'> Mangement</span>
                    </div>
                    <div className='title2'>
                        <ul className='nav2'>
                        <Link to='/'>Home</Link>
                        <Link to='/Page2'>Create Account</Link>
                        <Link to='/Page3'>User Login</Link>
                        <Link to='/Page4'>Admin Login</Link>
                        </ul>
                    </div>
                </div>
                
            </nav>
        </div>
        <div className='crecont'>
            <div >
                <img className='img2' src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
            </div>
            <div className='ca'>
                <div className='t3'>
                    Create New Account
                </div>
                <div className='fie'>
                    <input className='fies' placeholder='Accoun No' type="number" name="" id="" /><br /><br />
                    <input className='fies' placeholder='Email' type="email" name="" id="" /><br /><br />
                    <input className='fies' placeholder='Phone Number' type="number" name="" id="" /><br /><br />
                    <input className='fies' placeholder='Username' type="text" name="" id="" /><br /><br />
                    <input className='fies' placeholder='Password' type="password" name="" id="" /><br /><br />
                    <input className='fies' placeholder='Confirm Password' type="password" name="" id="" /><br /><br />

                    <div>
                        <button className='red1' onClick={()=>
                        {
                            navigation("/Page3")
                        }}>Create Account</button>
                    </div>
                    <div>
                        <h3>or</h3>
                    </div>
                    <div className='iconss'>
                    <FcGoogle />
                    <FaApple />
                    <FaSquareFacebook />
                    </div>
                    <div className='loo'>
                        <h3 className='head'>Already a user ?</h3>
                        <div>
                        <button className='red2' onClick={()=>
                        {
                            navigation("/Page4")
                        }}>Login</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Page2