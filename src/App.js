import React from 'react';
import './App.css';
import ImageUploader from './components/ImageUploader';

function App() {
  return (
    <div className="App">
      <h1>Wild Lens</h1>
      <div className="image-uploader">
        <label htmlFor="upload">Choose an image</label>
        <ImageUploader />
      </div>
    </div>
  );
}

export default App;
