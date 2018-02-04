import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {
  color: '#007f00'
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
      <div style={{...defaultStyle, width:'30%', display:'inline-block'}}>
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
      <h1>Title</h1>
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
