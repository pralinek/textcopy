import React from 'react';
import Header from "./Header"
import "./App.css"
import Navmybar from "./Navmybar"
import 'bootstrap/dist/css/bootstrap.min.css';
import TextArea from './gettext.js'

function App() {
  return (
    <div 
    style={{
      
      border: "1px solid red",
      color: "black",
  }}
    
    >
      <Header/>
      <Navmybar/>
     <TextArea />
      
      
    
    </div>
  );
}

export default App;
