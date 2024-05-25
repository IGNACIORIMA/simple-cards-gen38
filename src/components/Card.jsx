import React from 'react'
import  './styles/card.css'

const Card = ({color, text}) => {

    const borderColor = {
        vorderColor: color,
    }

    const textColor = {
        color: color,
    }

  return (
    <article style={borderColor} className='card'>
        <h2 className='card_header'>Header</h2>
        <h3 className='card_title'>{text} card title</h3>
        <p style={textColor} className='card_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laudantium quas ea? Soluta cum odit atque exercitationem expedita, nisi itaque saepe rerum quas culpa, fugit quidem minima, commodi doloribus magni!</p>
    </article>
  )
}

export default Card
