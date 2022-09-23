import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from 'particles-bg'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ParticlesBg className='particles' color="#990000" num={250} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm/>
        {/* 
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
