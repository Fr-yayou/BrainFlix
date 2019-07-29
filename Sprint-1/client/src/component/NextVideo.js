import React from 'react'

const nextVideo = props => (
  <div className="NextVideo">
    <div
      className="NextVideo__video"
      style={{
        backgroundImage: 'url(' + props.thumbnail + ')'
        
      }}
    />
    <div className="NextVideo__video__text">
      <h2 className="NextVideo__video__text__title">{props.title}</h2>
      <h4 className="NextVideo__video__text__title__author">{props.author}</h4>
    </div>
  </div>
)

export default nextVideo;