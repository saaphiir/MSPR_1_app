import React, { useState } from 'react';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="image-uploader">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
      {/* Add more functionality as needed */}
    </div>
  );
}

export default ImageUploader;
