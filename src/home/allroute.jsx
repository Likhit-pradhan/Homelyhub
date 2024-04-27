import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../about/about";
import Contact from "../contact/contact";
import Home from "../home/home";
import SignUp from "../login/signup";
import SignIn from "../login/signin";
import ShowData from "../userpage/upload";
import Donationcenter from "./donationcenter";
import ThankYouPage from "../thankyou/thankyou";
function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/donationcenter" element={<Donationcenter />} />
      <Route path="/signup/signin" element={<SignIn />} />
      <Route path="/signin/upload" element={<ShowData />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
      <Route path="/thank" element={<ThankYouPage />} />
    </Routes>
  );
}

export default Allroute;

