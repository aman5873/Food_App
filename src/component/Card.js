import React from 'react'
import data from '../json-data/Data.js'

function Card() {
    return (
        <>
          <div className="card">
            <img src={data.image} />
            <div className="card-main">
              <p className='card-title'>{data.name}</p> 
              <span className='card-category'>{data.category}</span>
            </div>
            <p className='card-desc'>{data.description}</p>
            <p className='card-price'>{data.price}</p>
          </div>
        </>
    )
}

export default Card



