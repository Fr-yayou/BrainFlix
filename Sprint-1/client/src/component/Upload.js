import React from "react";
import thumbnail from "../assets/image/Upload-video-preview.jpg";


function Upload () {
    return (
        <div className="container-Upload">
            <h5 className="container-Upload__title">Upload Video</h5>
            <div>
                <h5>VIDEO THUMBNAIL</h5>
                <img src={thumbnail} alt="video"/>
            </div>
            <div>
                <form>
                    <div>
                        <label>TITLE YOUR VIDEO</label>
                        <input type="text" placeholder="Add a title to your video"/>
                    </div>
                    <div>
                        <label>ADD A VIDEO DESCRIPTION</label>
                        <input type="text" placeholder="Add a descrition of your video"/>
                    </div>
                </form>
            </div>

        </div>
        
    )
}

export default Upload;