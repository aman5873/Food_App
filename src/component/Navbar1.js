import React from 'react'
import logo from '../images/food-logo.jpeg'

function Navbar1() {
  return (

        <div className='navbar'>
            <img src={logo} alt="logo" className='logo'/>
            <div className="menu">
                <ul>
                    <li>Category</li>
                    <li>Order</li>
                    <li>checkout</li>
                </ul>
            </div>
        </div>
  )
}

export default Navbar1