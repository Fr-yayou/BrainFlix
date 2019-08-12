import React from "react";
import thumbnail from "../assets/image/Upload-video-preview.jpg";
import axios from "axios"

const newApi = `http://localhost:8080/videos`;



class Upload extends React.Component{

    state = {
            title: '',
            description: ''
        };

	postNew = () => {
		axios
			.post(newApi, {
                title: this.state.title,
				description: this.state.description
			})
			.then(response => {
                console.log(response);
                console.log(this.state.title)
                console.log(this.state.description)
			});
    };
    onSubmit = event => {
        event.preventDefault()
    }

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
    render() {
        return (
            <div className="container-upload">
            <h5 className="container-upload__title">Upload Video</h5>
            <div id="line-two"></div>
            <div className="container-thumbnail">
                <h5 className="container-thumbnail__title">VIDEO THUMBNAIL</h5>
                <img className="container-thumbnail__title__video" src={thumbnail} alt="video"/>
            </div>
            <div>
                <form onSubmit={this.onSubmit} >
                    <div className="container-formTwo"> 
                        <label className="container-formTwo__title">TITLE YOUR VIDEO</label>
                        <input id="color" className="container-formTwo__title__com" type="text" placeholder="Add a title to your video" name="title" onChange={this.onChange}/>
                    </div>
                    <div>
                        <label className="container-formTwo__title__com__titleTwo">ADD A VIDEO DESCRIPTION</label>
                        <input id="color" className="container-formTwo__title__com__titleTwo__description" type="text" placeholder="Add a description of your video" name="description" onChange={this.onChange}/>
                    </div>

                    <div className="container-button">
                        <div id="line-two"></div>
                        <div id="h">
                        <button id="btn" className="container-button__publish" onClick={this.postNew}>PUBLISH</button>
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
}


export default Upload;