import React, {Component} from "react";
import View from "../assets/icons/PNG/Icon-views.png";
import Like from "../assets/icons/PNG/Icon-likes.png";

const date = (date) =>{
    return new Date(date).toLocaleDateString()
}


class Texte extends Component  {

    render() { 

        return (

           <div className="container-texte">
                <h1 className="container-texte__title">{this.props.videoInfos.title}</h1>
               <div className="container-providor">
                  <div id="tablet">
                      <div className="container-providor__source">
                            <h4 className="container-providor__source__name">{this.props.videoInfos.channel}</h4>
                            <p className="container-providor__source__name__date">{date(this.props.videoInfos.timestamp)}</p>
                        </div>
                     <div className="container-info">
                        <img className="container-info__eye" src={View} alt="eye" />
                            <p className="container-info__eye__number">{this.props.videoInfos.views}</p>
                        <img className="container-info__eye__number__like" src={Like} alt="thumb" />
                            <p class="container-info__eye__number__like__num">{this.props.videoInfos.likes}</p>
                      </div>
                  </div>
                  <div id="line"></div>
                   <div className="container-description">
                        <p className="container-description__paragraphe">{this.props.videoInfos.description}</p>

                 </div>
                 </div>


            </div>
        )
    
    }    

        
        
}

export default Texte;