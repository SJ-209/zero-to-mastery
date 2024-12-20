import React, { Component } from 'react';
// import Particles from 'react-particles-js'; 
import ParticlesBg from 'particles-bg'
// import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


// const app = new Clarifai.App({
//  apiKey: 'e3aee845766948ac9260f613e27189cf'
// });

    const returnClarifiRequestOptions = (imageUrl) => {
        // Your PAT (Personal Access Token) can be found in the Account's Security section
        const PAT = '79a63d3983084df98b1c50920769890c';
        // Specify the correct user_id/app_id pairings
        // Since you're making inferences outside your app's scope
        const USER_ID = 'clarifai';       
        const APP_ID = 'main';
        // Change these to whatever model and image URL you want to use  
        const IMAGE_URL = imageUrl;
    
        const raw = JSON.stringify({
            "user_app_id": {
                "user_id": USER_ID,
                "app_id": APP_ID
            },
            "inputs": [
                {
                    "data": {
                        "image": {
                            "url": IMAGE_URL
                        }
                    }
                }
            ]
        });
    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': ' ',
            },
            body: raw
        };
    
        return requestOptions
    };

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false 
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].regions_info.bounding_box;
    const image =document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height) 
    };
  }

  displayFacebox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value }); // Update input state
  }

  onButtonSubmit = () => {
      this.setState({imageUrl:this.state.input});
      //app.models.predict('face-detection',this.state.input)
      
      fetch("https://api.clarifai.com/v2/models/face-detection/outputs" + returnClarifiRequestOptions(this.state.input))
          .then(response => response.json())
          .then(response => {this.displayFacebox( 
            this.state.calculateFaceLocation(response));
            console.log('hi', response)
              
          })
          .catch(err => console.log('Error:', err));
    }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});
  }


  render()  {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
        <div className="App">
        <div>...</div>
            <ParticlesBg className='particles' color='#3ca9d1' blur='5' num={180} density type="cobweb" bg={true} />
            <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
            { route === 'home'
              ? <div>
                  <Logo />
                  <Rank />
                  <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                  />
                  <FaceRecognition box={box} imageUrl={imageUrl} />
                </div>
              : (
                  this.state.route === 'signin'
                  ? <Signin onRouteChange={this.onRouteChange}/>
                  : <Register onRouteChange={this.onRouteChange}/>
              )
            }
        </div>
    );
  }
}

export default App;