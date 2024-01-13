import React from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
const Admin = () => {
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
                <img className='img2' src="https://www.training.com.au/wp-content/uploads/admin-worker-vector.png" alt="" />
        
            </div>
            <div className='ca2'>
                <div className='t3'>
                    Admin Login
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

export default Admin