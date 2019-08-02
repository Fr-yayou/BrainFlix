import React,{Component} from "react";
import "./styles/app.css";
import Header from "./component/Header";
import { Route, Switch, Redirect } from "react-router-dom"
import Upload from './component/Upload';
import VideoContainer from "./component/VideoContainer";


class App extends Component {

  render() {
  
    return (
      <div className="App">
        <Header />
        <Switch>
          <Redirect from="/" exact to="/videos/1af0jruup5gu"></Redirect>
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={VideoContainer} />
        </Switch>

        
          </div>
    
      
    );
  }
}


  export default App;
