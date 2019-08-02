import React, { Component } from 'react';


const date = (date) =>{
    return new Date(date).toLocaleDateString()
}

class Defaultcomment extends Component {
    render() {
        
        return this.props.videoComments.map((comment) => (
            <div className="container-default">
                <div className="container-profile">
                    <div className="container-profile__portrait"></div>
                    <div className="container-profile__portrait__person">{comment.name}</div>
                    <div className="container-profile__portrait__person__time">{date(comment.timestamp)}</div>
                </div>
                <div className="container-sentence">
                    <div className="container-sentence__para">{comment.comment}</div>
                    <div className="container-sentence__para__bottom-line"></div>
                </div>
            </div>

        ))
        
    }
}

export default Defaultcomment;