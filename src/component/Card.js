import React from 'react'
import Heart from "./Heart.js"
import data from '../json-data/Data.js'

function Card(props) {
  const [cards] = React.useState(data)

  const heartElements = cards.map(card => {
    return <Heart key={card.id} 
                  id={card.id}
                  heart={card.heart}
            />
  })
        
    return (
        <>
          <div className="card">
            {props.offer !== "" && <div className="card-offer">{(props.offer)} off</div>}
            
            {heartElements}
            {/* {<i className="fa fa-heart " id="card-heart"  style={styles} ></i>} */}
            
            <img src={props.image} className="card-img" alt='card-img'/>
            <div className="card-main">
              <p className='card-title'>{props.name}</p> 
              <span className='card-category'>{props.category}</span>
            </div>
            <p className='card-desc'>`{(props.description).slice(0,40)}`</p>
            <p className='card-price'>₹ {props.price}-/</p>
          </div>
        </>
    )
}

export default Card



