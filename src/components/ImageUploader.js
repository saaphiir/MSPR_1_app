import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageChange = (e) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleRecognition = () => {
    // Implement your image recognition logic here
    alert('Recognition functionality will be implemented here!');
  };

  return (
    <div className="">
      <input placeholder='Choose an image' type="file" onChange={handleImageChange} />
      <div>
        <img src={selectedImage} alt="Selected" />
        <button onClick={handleRecognition}>Recognize Animal</button>
      </div>
    </div>
  );
}

export default ImageUploader;
