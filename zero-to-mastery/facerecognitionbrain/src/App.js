import React from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>...</div>
      <ParticlesBg className='particles' color='#3ca9d1' blur='5' num={150} density type="cobweb" bg={true} />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm />
            {/*<FaceRecognition />*/ }
    </div>
  );
}

export default App;
