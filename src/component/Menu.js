import React from 'react'
import Card from "./Card.js";
import data from '../json-data/Data.js'

function Menu() {

  const dataCards = data.map(item => {
      return <Card  key = {item.id}
                    {...item}/>
  })
  return (
        <div className="card-container">
          {dataCards}
        </div>
  )
}

export default Menu