import React from 'react'

const Card = ({mainText, text, src, }) => <div className="card">
  <h3>{mainText}</h3>
  <p>{text}</p>
  <img src={src} alt=""/>
</div>

export default Card
