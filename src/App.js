import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from 'particles-bg'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonClicked = () => {
    console.log('Detect clicked');
  }

  render() {
    return (
      <div className='App'>
        <ParticlesBg className='particles' color="#990000" num={200} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
            onInputChange={ this.onInputChange }
            onButtonClicked={ this.onButtonClicked }/>
        <FaceRecognition />
      </div>
    )
  }
}

export default App;
