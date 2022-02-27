import React from 'react'
import navLogo from "../images/logo192.png"

function Navbar() {
  return (
    <>
        <nav>
            <div className='navbar'>
                <img src={navLogo} alt="logo" className='logo' width="40px"/>
                <h3>React Facts</h3>
            </div>
            <h4>React Course - Project 1</h4>
        </nav>
    </>
  )
}

export default Navbar