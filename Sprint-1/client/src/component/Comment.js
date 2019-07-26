import React from "react";
import Image from "../assets/image/Mohan-muruge.jpg";


function Comment() {
    return (
        <div className="container-comment">
            <h4 className="container-comment__default-comment">3 Comments</h4>
            <div className="container-comment__default-comment__join" >
                <h5 className="container-comment__default-comment__join__conversation">JOIN THE CONVERSATION</h5>
            </div>
            
            <div className="container-form">
                <form className="container-form__two">
                    <input type="texte" id="comment" placeholder="That was easily the most spectacular BMX moment ever."></input>
                    <button id="click">COMMENT</button>
                </form>
                <div>
                    <img id="image" src={Image} alt="portrait" />
                </div>
            </div>
            <div id="line"></div>

        </div>
    )
}

export default Comment;
