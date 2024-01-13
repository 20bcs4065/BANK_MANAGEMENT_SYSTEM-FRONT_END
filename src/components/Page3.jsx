import React from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
const Page3 = () => {
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
                        <Link to='/Admin'>Admin Login</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className='crecont'>
            <div >
                <img className='img2' src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        
            </div>
            <div className='ca2'>
                <div className='t3'>
                    User Login
                </div>
                <div className='fie2'>
                    <input className='fies' placeholder='Username' type="text" name="" id="" /><br /><br />
                    <input className='fies' placeholder='Password' type="password" name="" id="" /><br /><br />
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
  )
}

export default Page3