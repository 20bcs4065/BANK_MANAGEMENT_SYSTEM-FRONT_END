import React from 'react'
import { Link } from 'react-router-dom'
const Page1 = () => {
  return (
    <div>
        <nav>
            <div className='cont'>
                <div className='title'>
                    <span className='t1'>Bank</span> 
                    <span className='t2'> Mangement</span>
                </div>
                <div className='title2'>
                    <ul className='navl'>
                        <Link to='/'>Home</Link>
                        <Link to='/Page2'>Create Account</Link>
                        <Link to='/Page3'>User Login</Link>
                        <Link to='/Admin'>Admin Login</Link>
                    </ul>
                </div>
            </div>
            
        </nav>
        <div>
            <img className='bg' src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/What-is-Consumer-Banking.jpg" alt="" />
            <div className='pop'>
                <div className='topp'>
                        
                </div>
                <div className='title3'>
                    <h1 className='ft'>Welcome to Bank Management System</h1>
                </div>
                <div className='para'>
                    <p>
                    Online banking, also known as online banking, 
                    e-banking or virtual banking, is an electronic 
                    payment system that enables customers of a bank 
                    or other financial institution to conduct a range 
                    of financial transactions through the financial 
                    institution's website
                    </p>
                </div>
                <div>
                    <button className='red1'>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page1