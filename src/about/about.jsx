import React from "react";
import "./about.css";
import "../home/home1.css";
import { Link } from "react-router-dom";
import Contact from "../contact/contact";
import SignUp from "../login/signup";
import Programs from "../home/home2";
import Support from "../support/support";
function About() {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">HomelyHub</label>
        <ul>
          <li>
            <a className="active" href="/">
              Home
            </a>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/support"}>Support</Link>
          </li>
          <li>
            <button className="btn btn--turqouise ">
              <Link to={"/about"}>Donate</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <p class="text-blk heading">
      About Us
    </p>
    <p class="text-blk subHeading">
    End Poverty (EP) is a civil society organization, started in the
              year 2009, based in India that designs and delivers innovative
              solutions for the poor of India in partnership with national and
              international organizations.
    </p>
    <p class="text-blk subHeading">
              EP’s approach is to enable and empower people for change and
              support them with identifying solutions and making informed
              choices. The programs are designed after meeting the targeted
              beneficiary groups, understanding their needs and aspirations,
              in-depth research, with scientific and strategic inputs from a
              team of experts and dedicated professionals.
            </p>
    <div class="social-icons-container">
      <a class="social-icon">
        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"></img>
      </a>
      <a class="social-icon">
        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"></img>
      </a>
      <a class="social-icon">
        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"></img>
      </a>
      <a class="social-icon">
        <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"></img>
      </a>
    </div>
  </div>
  <Programs />
      
    </div>
      
    </div>
  );
}

export default About;
