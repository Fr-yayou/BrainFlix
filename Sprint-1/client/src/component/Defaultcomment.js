import React, { Component } from 'react';

class Defaultcomment extends Component {
    render() {
        
        return this.props.defaults.map((Default) => (
            <div className="container-default">
                <div className="container-profile">
                    <div className="container-profile__portrait"></div>
                     <div className="container-profile__portrait__person">{Default.name}</div>
                     <div className="container-profile__portrait__person__time">{Default.date}</div>
                </div>
                <div className="container-sentence">
                    <div className="container-sentence__para">{Default.comment}</div>
                   <div className="container-sentence__para__bottom-line"></div>
               </div>
            </div>
        ));
        
    }
}

export default Defaultcomment;