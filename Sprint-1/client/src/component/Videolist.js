import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class Videolist extends Component{
  render() {
    return this.props.videos.map((video) => (
      
      <div className=" container-nextVideo">
        <Link to={"/videos/" + video.id} ><img className="container-nextVideo__video" src={video.image} alt="video" /></Link>
          <div id="details-video">
            <h5 className="container-nextVideo__video__title">{video.title} </h5>
            <h5 className="container-nextVideo__video__title__channel">{video.channel} </h5>
          </div>
       </div>
    

      
    ));

  

  }

}

export default Videolist;