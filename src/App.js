import React, { Component } from 'react';
import './App.css';

let defaultStyle = {
  color: '#2a2a2a'
};

class Aggregate extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width:"40%", display:"inline-block"}}>
        <h2 style={defaultStyle}>Number text</h2>
      </div>
      );
  }
}

class Filter extends Component{
  render(){
    return(
      <div>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return (
      <div style={{...defaultStyle, width:'20%', display:'inline-block'}}>
        <img/>
        <h3>List Songs</h3>
        <ul>
            <li>song 01</li>
            <li>song 02</li>
            <li>song 03</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{...defaultStyle, 'font-size':'54px'}}>Title</h1>
       <Aggregate/>
       <Aggregate/>
       <Filter/>
       <Playlist/>
       <Playlist/>
       <Playlist/>
      </div>
    );
  }
}

export default App;
