import React from 'react'
import bg_img from '../images/Food.jpeg'

function Main1() {

  return (
    <div className='main'>
        <img src={bg_img} alt="bg" className='bg_img' />
            <div className="main-container">
                <h2 className='main-header'> Online Delicious</h2>  
                    <p className='main-text'>Order and enjoy without leaving home.</p>
                    <button className='order-btn'>Order</button>
            
            </div>
    </div>
  )
}

export default Main1

