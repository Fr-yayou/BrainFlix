import React from "react";
import thumbnail from "../assets/image/Upload-video-preview.jpg";


function Upload () {
    return (
        <div className="container-upload">
            <h5 className="container-upload__title">Upload Video</h5>
            <div id="line-two"></div>
            <div className="container-thumbnail">
                <h5 className="container-thumbnail__title">VIDEO THUMBNAIL</h5>
                <img className="container-thumbnail__title__video" src={thumbnail} alt="video"/>
            </div>
            <div>
                <form>
                    <div className="container-formTwo"> 
                        <label className="container-formTwo__title">TITLE YOUR VIDEO</label>
                        <input id="color" className="container-formTwo__title__com" type="text" placeholder="Add a title to your video"/>
                    </div>
                    <div>
                        <label className="container-formTwo__title__com__titleTwo">ADD A VIDEO DESCRIPTION</label>
                        <input id="color" className="container-formTwo__title__com__titleTwo__description" type="text" placeholder="Add a description of your video"/>
                    </div>

                    <div className="container-button">
                        <div id="line-two"></div>
                        <div id="h">
                        <button id="btn" className="container-button__publish">PUBLISH</button>
                        <div id="center">
                        <h5 className="container-button__publish__cancel">Cancel</h5>
                        </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        
    )
}

export default Upload;