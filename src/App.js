import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from 'particles-bg'


const authKey = 'e20b124f85624f9e95cf8d09930bfc9c';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonClicked = () => {
    this.setState({imageUrl: this.state.input})
    console.log(this.state.imageUrl);
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    )
  }
}

export default App;
