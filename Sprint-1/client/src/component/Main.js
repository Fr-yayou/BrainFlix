import React from "react";
import Play from "../assets/icons/PNG/Icon-play.png";
import Volume from "../assets/icons/PNG/Icon-volume.png";
import Screen from "../assets/icons/PNG/Icon-fullscreen.png";
import Video from "../assets/image/video-list-0.jpg";

function Main(){
    return (
        
        <div className="container-video">
            <div className="container-video__playing">
            <video className="container-video__playing__biker" poster={Video} />
            
            <div className="container-video__playing__biker__control-bar">
                        <div className="container-video__playing__biker__control-bar__transparent">
                        <img  id="play"src={Play} alt="icon" />
                        </div>
                        <div className="container-video__playing__biker__control-bar__transparent__two">
                        <div id="playing-bar"></div>
                        </div>
                        <div id="transparent">
                            <img id="screen" src={Screen} alt="icon" />
                        <img src={Volume} alt="icon" />
                    </div>
                </div>
                
            </div>
            
        </div>


    
    )
}
export default Main ;