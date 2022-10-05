import React from 'react'
import './Char.css'

const CharRectorOne = () => {
  return (
    <span>
     <div className="main-container">
        <div className="header">
        <h1>Guess The Chracter</h1>
        </div>
        <h3>The charecter has following details</h3>
        <p className='score'>score-1</p>
      <div>
        <p className='role'>Roll:Controller</p>
        <p className='role'>toxic,screen,snake bite,posion cloud viper o</p>
      </div>
      <span className="first-box">
      <p>Roze</p>
      </span>
      <span className="second-box">
      <p>sova</p>
      </span>
      <span className="third-box">
      <p>breach</p>
      </span>
      <span className="fourth-box">
     <p>wipe</p>
      </span>
     </div>
    </span>
  )
}

export default CharRectorOne