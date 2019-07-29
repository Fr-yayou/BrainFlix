import React, { Component } from 'react'
import NextVideo from './NextVideo';
import Video1 from '../assets/image/video-list-1.jpg';
import Video2 from '../assets/image/video-list-2.jpg';
import Video3 from '../assets/image/video-list-3.jpg';
import Video4 from '../assets/image/video-list-4.jpg';
import Video5 from '../assets/image/video-list-5.jpg';
import Video6 from '../assets/image/video-list-6.jpg';
import Video7 from '../assets/image/video-list-7.jpg';
import Video8 from '../assets/image/video-list-8.jpg';

class Videolist extends Component {
  render() {
    const videos = [
      {
        id: 1,
        author: 'Bernice Lambert',
        title: 'Become A Travel Pro In One Easy Lesson',
        thumbnail: Video1,
      },
      {
        id: 2,
        author: 'Bernard Patrick',
        title: 'Les Houches The Hidden Gem Of The Chamonix',
        thumbnail:Video2,
      },
      {
        id: 3,
        author: 'Lizzie Burton',
        title: 'Travel Health Useful Medical Information For',
        thumbnail:Video3,
      },
      {
        id: 4,
        author: 'Emily Harper',
        title: 'Cheap Airline Tickets Great Ways To Save',
        thumbnail:Video4,
      },
      {
        id: 5,
        author: 'Ethan Owen',
        title: 'Take A Romantic Break In A Boutique Hotel',
        thumbnail:Video5,
      },
      {
        id: 6,
        author: 'Lydia Perez',
        title: 'Choose The Perfect Accommodations',
        thumbnail:Video6,
      },
      {
        id: 7,
        author: 'Timothy Austin',
        title: 'Cruising Destination Ideas',
        thumbnail:Video7,
      },
      {
        id: 8,
        author: 'Scotty Cranmer',
        title: 'Train Travel On Track For Safety',
        thumbnail:Video8,
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