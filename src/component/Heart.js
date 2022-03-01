import React from 'react'

function Heart(props) {
  const [hearts, setHeart] = React.useState(props)
  
  const styles = {
    color : hearts.heart ? "white" : "red"
  }
  
  function toggleHeart(){
      setHeart(preHeart => ({
        ...preHeart, heart: !preHeart.heart
        }))
  }
  return (
    <>
      <i className="fa fa-heart " id="card-heart"
        style={styles}  
        onClick={toggleHeart}>
      </i> 
     
    </>
  )
}

export default Heart
