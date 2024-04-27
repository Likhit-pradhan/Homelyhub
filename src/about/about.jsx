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
            <button className="btn btn--turqouise btn--lg">
              <Link to={"/about"}>Donate</Link>
            </button>
          </li>
        </ul>
      </nav>
      <div className="aboutbody">
        <div className="aboutinfo">
          <div
            className="t-wysiwyg t-wysiwyg--lg"
            style={{ marginTop: "100px", textAlign: "left" }}
          >
            <p>
              End Poverty (EP) is a civil society organization, started in the
              year 2009, based in India that designs and delivers innovative
              solutions for the poor of India in partnership with national and
              international organizations.
            </p>
            <p>
              EP’s approach is to enable and empower people for change and
              support them with identifying solutions and making informed
              choices. The programs are designed after meeting the targeted
              beneficiary groups, understanding their needs and aspirations,
              in-depth research, with scientific and strategic inputs from a
              team of experts and dedicated professionals.
            </p>
          </div>
          <div
            className="p-img-shape"
            style={{ marginTop: "80px", position: "relative" }}
          >
            <img
              src="https://endpoverty.org.in/wp-content/themes/endpoverty/static/images/doodles/hero-1.svg"
              alt="hero-1"
              style={{ width: "750px", height: "400px" }}
            />
            <svg
              width="300"
              height="280"
              viewBox="0 0 647 610"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M475.558 109.284C539.882 159.398 605.502 203.086 632.267 264.764C659.465 326.014 647.377 404.825 609.387 460.934C571.397 517.044 507.073 550.453 448.793 574.867C390.944 599.281 338.708 614.701 291.22 608.704C243.733 602.708 200.994 574.867 157.392 545.742C114.221 516.616 70.1875 485.777 39.9681 439.518C9.31705 393.688 -7.51942 332.01 3.2732 273.331C14.0658 214.651 52.0559 158.541 103.86 104.573C156.097 50.6048 221.284 -2.07845 285.177 0.0631468C349.069 2.20474 411.666 58.7428 475.558 109.284Z"
                fill="url(#patternHero)"
              ></path>
            </svg>
            <div className="about-overlay">About</div>
          </div>
        </div>
      </div>
      <Programs />
      <div className="contributor">
        <div class="t-wysiwyg t-wysiwyg--md t-center" style={{marginTop:"50px"}}>
          <h2 style={{ marginTop: "30px" }}>Donors &amp; Contributors</h2>
          <p style={{ textAlign: "center" }}>
            Strategic partnerships and close cooperation with our donors and
            leading organizations around the globe makes us stronger and helps
            us in creating sustainable social impact
          </p>
        </div>
      <div className="contributor-image">
        <img
          src="https://st2.depositphotos.com/3643473/6205/i/450/depositphotos_62059745-stock-photo-man-with-chart-financial.jpg"
          width="500px"
          height="500px"
        />
      </div>
      </div>
    </div>
  );
}

export default About;
