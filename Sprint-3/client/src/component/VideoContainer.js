import React,{ Component } from 'react';
import Main from "./Main";
import Texte from "./Texte";
import Defaultcomment from "./Defaultcomment";
import Videolist from "./Videolist"
import Comment from './Comment'
import axios from "axios";


const videoUrl = 'http://localhost:8080/videos';
const Mykey = '?api_key=c67d4d3d-660e-499e-9caf-5f1c2376a124'
const playing = id =>`http://localhost:8080/videos/${id}`

class VideoContainer extends Component {

    state = {

    videos: [],
    videoId: '',
    videoInfos: [],
    videoComments: [],
    videoThumbnail:[],
    loopingVideo: [],
    loading: true,
}
  componentDidMount() {
    axios
      .get(videoUrl + Mykey)
      .then(response => {
        this.setState({ videos: response.data })
        this.setState({ videoId: response.data[0].id })
      })
      .then(() => {
        axios
          .get(playing(this.state.videoId))
          .then(response => {
            this.setState({
              videoComments: response.data.comments,
              videoInfos: response.data,
              videoThumbnail: response.data.image,
              loopingVideo: response.data.video + Mykey



            })
          })
      })
  }
 componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      axios
      .get(playing(this.props.match.params.id))
        .then(response => {
          console.log(this.props.match.params.id)
          this.setState({
            videoComments: response.data.comments,
            videoInfos: response.data,
            videoThumbnail: response.data.image,
            loopingVideo: response.data.video + Mykey
          })
        })
    }
  }
    

    
    render() {
        const videoList = this.state.videos.filter(video => {
        return video.id !== this.props.match.params.id
    })

        return (
        <div>
        <Main videoThumbnail={this.state.videoThumbnail} loopingVideo={this.state.loopingVideo} />
             <div className="row">
          <div className="column-one">    
            <Texte videoInfos={this.state.videoInfos} />
            <Comment/>
            <Defaultcomment videoComments={this.state.videoComments} />
              </div> 
              <div className="column-two">
                <h5 id="title">NEXT VIDEO</h5>
              <Videolist videos={videoList} />
              </div>
           </div> 
           </div>
         
        )
        
    }
}

export default VideoContainer;

