import React from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
const Deposite = () => {
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
                    <div className='title3'>
                        <ul className='nav3'>
                            <div className='ic1'>
                            <FaUserAlt />
                            </div>
                            <Link to='/Page3'>jayanthignanavel1978@gmail.com</Link>
                            <Link to='/Deposite'>Deposite</Link>
                            <Link to='/Withdraw'>Withdraw</Link>
                            <Link to='/Balance'>Balance</Link>
                            <Link to='/Remove'>Remove Account</Link>
                            <Link to='/Page4'>Logout</Link>
                            <div className='ic1'>
                            <IoIosLogOut />
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>




        <div className='crecont'>
            
            <div className='ca2'>
                <div className='t3'>
                    Deposite
                </div>
                <div className='fie2'>
                <input className='fies' placeholder='Accoun No' type="number" name="" id="" /><br /><br />
                <input className='fies' placeholder='₹ : Amount' type="number" name="" id="" /><br /><br />
                    <div>
                        <button className='red2' onClick={()=>
                        {
                            navigation("/Page4")
                        }}>Pay</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Deposite