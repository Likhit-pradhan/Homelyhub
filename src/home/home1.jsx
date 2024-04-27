import React from "react";
import "./home1.css";
import Programs from "./home2";
import About from "../about/about";
import Contact from "../contact/contact";
import SignIn from "../login/signin";
import SignUp from "../login/signup";
import Support from "../support/support";
import { Link } from "react-router-dom";
function Homepage() {
  function hover() {
    // Add your hover logic here
  }

  function out() {
    // Add your out logic here
  }

  return (
    <div className="main-content">
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">HomelyHub</label>
        <ul>
          <li>
            <a className="active" href="#">
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
          <button className="btn btn--turqouise btn--lg"><Link to={"/signup"}>Donate</Link></button>
          </li>
        </ul>
      </nav>
      <div className="container1">
        <div className="text1">
          <h1 className="home-heading">
            Overcoming Poverty is not a gesture of charity, it is an act of{" "}
            <span style={{ color: "chocolate" }}>JUSTICE</span>
          </h1>
          <p style={{ margin: "3% 0%" }}>
            Tackling poverty, and Building Resilience
          </p>
          <a className="btn btn--turqouise btn--lg" href="/">
            Start donating</a>
        </div>
        <div className="p-img-shape">
          <img
            src="https://endpoverty.org.in/wp-content/themes/endpoverty/static/images/doodles/hero-1.svg"
            alt="hero-1"
          />
          <svg
            width="600"
            height="480"
            viewBox="0 0 647 610"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M475.558 109.284C539.882 159.398 605.502 203.086 632.267 264.764C659.465 326.014 647.377 404.825 609.387 460.934C571.397 517.044 507.073 550.453 448.793 574.867C390.944 599.281 338.708 614.701 291.22 608.704C243.733 602.708 200.994 574.867 157.392 545.742C114.221 516.616 70.1875 485.777 39.9681 439.518C9.31705 393.688 -7.51942 332.01 3.2732 273.331C14.0658 214.651 52.0559 158.541 103.86 104.573C156.097 50.6048 221.284 -2.07845 285.177 0.0631468C349.069 2.20474 411.666 58.7428 475.558 109.284Z"
              fill="url(#patternHero)"
            ></path>
            <defs>
              <pattern id="patternHero" x="0" y="0" width="1" height="1">
                <image
                  xlinkHref="https://www.undp.org/sites/g/files/zskgke326/files/2023-04/UNDP-Bangladesh-2020-distribution-COVID19-3047_4.jpg"
                  preserveAspectRatio="xMaxYMax slice"
                  width="859"
                  height="620"
                ></image>
              </pattern>
            </defs>
          </svg>
        </div>
      </div>
      <div className="container1">
        <div className="p1-shape">
          <svg
            width="647"
            height="610"
            viewBox="0 0 647 610"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <pattern id="patternHero1" x="0" y="0" width="1" height="1">
                <image
                  xlinkHref="https://cdn.pixabay.com/photo/2017/07/22/20/40/girl-2529907_1280.jpg"
                  preserveAspectRatio="xMaxYMax slice"
                  width="647"
                  height="610"
                />
              </pattern>
              <clipPath id="clipPathHero1">
                <path d="M475.558 109.284C539.882 159.398 605.502 203.086 632.267 264.764C659.465 326.014 647.377 404.825 609.387 460.934C571.397 517.044 507.073 550.453 448.793 574.867C390.944 599.281 338.708 614.701 291.22 608.704C243.733 602.708 200.994 574.867 157.392 545.742C114.221 516.616 70.1875 485.777 39.9681 439.518C9.31705 393.688 -7.51942 332.01 3.2732 273.331C14.0658 214.651 52.0559 158.541 103.86 104.573C156.097 50.6048 221.284 -2.07845 285.177 0.0631468C349.069 2.20474 411.666 58.7428 475.558 109.284Z" />
              </clipPath>
            </defs>
            <path
              d="M475.558 109.284C539.882 159.398 605.502 203.086 632.267 264.764C659.465 326.014 647.377 404.825 609.387 460.934C571.397 517.044 507.073 550.453 448.793 574.867C390.944 599.281 338.708 614.701 291.22 608.704C243.733 602.708 200.994 574.867 157.392 545.742C114.221 516.616 70.1875 485.777 39.9681 439.518C9.31705 393.688 -7.51942 332.01 3.2732 273.331C14.0658 214.651 52.0559 158.541 103.86 104.573C156.097 50.6048 221.284 -2.07845 285.177 0.0631468C349.069 2.20474 411.666 58.7428 475.558 109.284Z"
              fill="url(#patternHero1)"
              clipPath="url(#clipPathHero1)"
            />
          </svg>
        </div>
        <div className="pl-lg-10" style={{ marginTop: "60px",textAlign:"left" }}>
          <span className="t-label">A Little On Who We Are</span>
          <div className="t-wysiwyg t-wysiwyg--lg">
            <h2>Welcome To HomelyHub!</h2>
            <p>
              End Poverty is a civil society organization which aim to work towards the economic
              development of the poor and needy people in its operational areas.
              We are a professionally managed, forward-looking catalyst
              organization that focuses on uplifting rural communities through
              customized, innovative, and self-sustaining development programs.
            </p>
            <a className="btn btn--turqouise btn--lg" href="/">
              Join & Support
            </a>
          </div>
        </div>
      </div>
      <Programs/>
    </div>
  );
}

export default Homepage;
