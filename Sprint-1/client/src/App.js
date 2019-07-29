import React,{Component} from "react";
import "./styles/app.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Texte from "./component/Texte";
import Comment from "./component/Comment";
import Defaultcomment from "./component/Defaultcomment";
import Videolist from "./component/Videolist"



class App extends Component {

  state = {
    defaults: [
      
      {
        name: 'Michael Lyon',
        date: '18/12/2018',
        comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going.This is still simply the greatest opening of a concert I have EVER witnessed'
      },
      {
        name: 'Gary Wrong',
        date: '12/12/2018',
        comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
      },
      {
        name: 'Theodore Duncan',
        date: '11/13/2017',
        comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
      },
    
    ]
    
  }



  render() {
  
    return (
      <div className="App">
        <Header />
        <Main />
      <div className="row">
      <div className="column">
        <Texte/>
        <Comment/>
        <Defaultcomment defaults={this.state.defaults} />
      </div>
        < Videolist />
        </div>
      </div>
    );
  }
}



export default App;
