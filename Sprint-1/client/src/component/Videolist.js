import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class Videolist extends Component{
  render() {
    return this.props.videos.map((video) => (
      <div className=" container-nextVideo" >
        <h5 className="container-nextVideo__title">{video.title} </h5>
        <h5 className="container-nextVideo__title__channel">{video.channel} </h5>
        <Link to={"/videos/" + video.id} ><img className="container-nextVideo__title__channel__video"  src={video.image} alt="video"/></Link>
      </div>

      
    ));

  

  }

}

export default Videolist;