import React, { Component } from 'react'
import NextVideo from './NextVideo'

class Videolist extends Component {
  render() {
    const videos = [
      {
        id: 1,
        author: 'Bernice Lambert',
        title: 'Become A Travel Pro In One Easy Lesson',
        thumbnail:('../assets/image/video-list-6.jpg'),
      },
      {
        id: 2,
        author: 'Bernard Patrick',
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        thumbnail:('../public/assets/video-list-2.jpg'),
      },
      {
        id: 3,
        author: 'Lizzie Burton',
        title: 'Travel Health Useful Medical Information For',
        thumbnail:('../assets/image/video-list-3.jpg'),
      },
      {
        id: 4,
        author: 'Emily Harper',
        title: 'Cheap Airline Tickets Great Ways To Save',
        thumbnail:('../assets/image/video-list-4.jpg'),
      },
      {
        id: 5,
        author: 'Ethan Owen',
        title: 'Take A Romantic Break In A Boutique Hotel',
        thumbnail:('../assets/image/video-list-5.jpg'),
      },
      {
        id: 6,
        author: 'Lydia Perez',
        title: 'Choose The Perfect Accommodations',
        thumbnail:('../assets/image/video-list-6.jpg'),
      },
      {
        id: 7,
        author: 'Timothy Austin',
        title: 'Cruising Destination Ideas',
        thumbnail:('../assets/image/video-list-7.jpg'),
      },
      {
        id: 8,
        author: 'Scotty Cranmer',
        title: 'Train Travel On Track For Safety',
        thumbnail:('../assets/image/video-list-8.jpg'),
      },
    ]

    let listvideo = videos.map(nextVideo => {
      return (
        <NextVideo
          key={nextVideo.id}
          author={nextVideo.author}
          title={nextVideo.title}
          thumbnail={nextVideo.thumbnail}
        />
      )
    })

    return (
      <div className="NextVideos">
        <h5 className="NextVideos__title">NEXT VIDEO</h5>
        <div className="NextVideos__title__list">{listvideo}</div>
      </div>
    )
  }
}

export default Videolist;