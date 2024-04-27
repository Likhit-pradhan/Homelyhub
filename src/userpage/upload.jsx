import React, { useState } from 'react';
import './upload.css'; 
import ThankYouPage from '../thankyou/thank';
function ShowData() {
  const [storedData, setStoredData] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleShow = () => {
    // Fetch data from JSON file or local storage
    const data = JSON.parse(localStorage.getItem('formData'));
    setStoredData(data);
  };
  {/*const handleDelete = (index) => {
    // Remove the item at the specified index from storedData
    const newData = [...storedData];
    newData.splice(index, 1);
    setStoredData(newData);
    // Update localStorage with the new data
    localStorage.setItem('formData', JSON.stringify(newData));
  };*/}

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prevImages => [...prevImages, ...imageUrls]);
  };

  const handleSelect = (index) => {
    // Retrieve the selected user's address
    const selectedAddress = storedData[index].address;
    // Display a message with the selected address
    alert(`You have selected the address: ${selectedAddress}`);
    window.location.href = "/thank";

  };

  return (
    <div className="container">
      <h1>Stored Data</h1>
      <input type="file" onChange={handleImageChange} accept="image/*" multiple />
      <div className="image-preview">
        {selectedImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
        ))}
      </div>
      <button className="btn btn-primary" onClick={handleShow}>Show</button>
      {storedData && (
        <div>
          {storedData.map((user, index) => (
            <div key={index} className="card">
              <div className="card-body">
                <div className="box-layout">
                  <p><strong>Donation Center Name:</strong> {user.name}</p>
                  <p><strong>Address:</strong> {user.address}</p>
                  <button onClick={() => handleSelect(index)}>Select</button>
                  {/*<button onClick={() => handleDelete(index)}>Delete</button>*/}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowData;
