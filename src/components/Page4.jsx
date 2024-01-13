import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom'
const Page4 = () => {
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
                            <Link to='/Page4'>Balance</Link>
                            <Link to='/Page3'>Remove Account</Link>
                            <Link to='/Page4'>Logout</Link>
                            <div className='ic1'>
                            <IoIosLogOut />
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
          
        
    </div>
  )
}

export default Page4