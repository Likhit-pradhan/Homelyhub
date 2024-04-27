/*import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import DonationCenterList from './donationcenterlist';
import Navbar from './navbar';
function DonationCenter(props) {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    name: '',
    address: '',
    password: ''
  });

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);
  const [centers, setCenters] = useState([]);
  const [showAllCenters, setShowAllCenters] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    console.log(formData);
    // Perform geocoding to get coordinates from address
    geocodeAddress(formData.address);
    setCenters(prevCenters => [...prevCenters, formData]);
  };

  const geocodeAddress = address => {
    const { google } = props;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setMapCenter({ lat: location.lat(), lng: location.lng() });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
  };

  const onInfoWindowClose = () => {
    setSelectedPlace(null);
  };
  const handleShowCenter = () => {
    // Show all centers on the map
    // Here you can add code to handle displaying all centers
    console.log(centers);
    setShowAllCenters(prevState => !prevState);
  };
  return (
    <div>
       <Navbar/>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Map google={props.google} zoom={14} center={mapCenter}>
        {mapCenter && (
          <Marker
            onClick={onMarkerClick}
            name={formData.name}
            position={mapCenter}
          />
        )}
        <InfoWindow onClose={onInfoWindowClose}>
          <div>
            <h1>{selectedPlace && selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
      <DonationCenterList centers={centers} />
      <button onClick={handleShowCenter}>Show Centers</button>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 
})(DonationCenter);*/





import React, { useState, useEffect } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
//import Navbar from './navbar';

function ShowinMap(props) {
  const [mapCenter, setMapCenter] = useState(null);

  useEffect(() => {
    // Extract address data from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get('address');

    // Perform geocoding to get coordinates from address
    if (address) {
      geocodeAddress(address);
    }
  }, []);

  const geocodeAddress = (address) => {
    const { google } = props;
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setMapCenter({ lat: location.lat(), lng: location.lng() });
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };

  return (
    <div>
      <Map google={props.google} zoom={14} center={mapCenter}>
        {mapCenter && (
          <Marker name="Selected Location" position={mapCenter} />
        )}
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDJaFr-HFXGBOg8pUSdQfGjGwGdIwtbXhY"
})(ShowinMap);

