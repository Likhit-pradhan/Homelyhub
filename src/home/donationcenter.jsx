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
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Donation Center Form</h1>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '60%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />

        <label style={{ display: 'block', marginBottom: '10px' }}>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} style={{ width: '60%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />

        <label style={{ display: 'block', marginBottom: '10px' }}>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '60%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />

        <label style={{ display: 'block', marginBottom: '10px' }}>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '60%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />

        <button type="submit" style={{ width: '60%', backgroundColor: '#007bff', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default Donationcenter;
