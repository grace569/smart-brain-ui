import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ParticlesBg from 'particles-bg'

//import Clarifai from 'clarifai';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonClicked = () => {
    this.setState({imageUrl: this.state.input});
    this.predictImageByUrl(this.state.input);
  }

  calculateFaceRecognitionBox = (data) =>{
    
  }

  predictImageByUrl(imageUrl) {
    console.log(imageUrl)

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "clarifai",
        "app_id": "main"
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": `${imageUrl}`
                  }
              }
          }
      ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + '8784f7189b344bc280178f127c7c4a7a'
        },
        body: raw
    };

    fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)
        .then(resp => resp.json())
        .then(result => console.log(result.outputs[0].data.regions))
        .catch(error => console.log('error', error));
  
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
