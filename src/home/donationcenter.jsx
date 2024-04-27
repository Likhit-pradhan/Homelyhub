import React, { useState } from 'react';
//import './App.css';

function Donationcenter() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve existing data from localStorage
    const existingDataString = localStorage.getItem('formData');
    let existingData = existingDataString ? JSON.parse(existingDataString) : [];
    // Make sure existingData is an array
    existingData = Array.isArray(existingData) ? existingData : [];
    // Append new data to existing data
    const updatedData = [...existingData, formData];
    // Store the updated data back into localStorage
    localStorage.setItem('formData', JSON.stringify(updatedData));
    console.log('Form Data Submitted:', formData);
    alert('form submitted successfully');
    window.location.href = "/thankyou";
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required /><br />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Donationcenter;
