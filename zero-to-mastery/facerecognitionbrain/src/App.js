import React from 'react';
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank';
import './App.css';
import { useState } from 'react';

function App() {
  const [,setInput] = useState('');
      const onInputChange = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
      }
  return (
    <div className="App">
      <div>...</div>
      <ParticlesBg className='particles' color='#3ca9d1' blur='5' num={150} density type="cobweb" bg={true} />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm onInputChange={onInputChange}/>
            {/*<FaceRecognition />*/ }
    </div>
  );
}


export default App;
