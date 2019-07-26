import React from 'react';
import "./styles/app.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Texte from "./component/Texte";
import Comment from "./component/Comment";


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Texte />
      <Comment/>
    </div>
  );
}

export default App;
