import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Allroute from "./home/allroute";
/*import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";*/
//import Location from "./Location/location"; 
//import Mapintegration from "./Location/mapinte";
//import Donationcenter from "./Location/map";
//import DonationCenterList from "./Location/donationcenterlist";
function App() {
  return (
    <div className="App">
      {<Allroute/>}
      {/*<Location/>*/}
      {/*<Mapintegration/>*/}
      {/*<Donationcenter/>*/}
      {/*<DonationCenterList/>*/}
    </div>
  );
}

export default App;