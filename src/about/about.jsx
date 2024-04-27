import React from "react";
import "./about.css";
import "../home/home.css";
import vision from "../images/vision.png";
import goal from "../images/goal.png";
import mission from "../images/mission.png";
import { Link } from "react-router-dom";
import whatsapp from "../images/whatsapp.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
//import HomePage from "../homepage/homepage";
import Contact from "../contact/contact";
import SignUp from "../login/signup";

function About() {
  return (
    <div className="about-container">
      <nav className="about-nav animate-slide-down">
        <Link to="/">Home</Link>
        <Link to="/about">About Page</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <h1 className="animate-fade-in">About Us</h1>
      <div className="about-content">
        <div className="about-card animate-scale">
          <h4>Our Vision</h4>
          <img src={vision} alt="Vision" />
          <p>
          The vision of a poverty-focused website is to create a world where every individual has access to basic needs, opportunities for sustainable livelihoods, and a pathway out of poverty through empowerment, education, and community support.
          </p>
        </div>
        <div className="about-card animate-scale">
          <h4>Our Goal</h4>
          <img src={goal} alt="Goal" />
          <p>
            The goal of a poverty-focused website is to raise awareness, provide resources, and facilitate action towards alleviating poverty through education, advocacy, and support.
          </p>
        </div>
        <div className="about-card animate-scale">
          <h4>Our Mission</h4>
          <img src={mission} alt="Mission" />
          <p>
          The mission of a poverty-focused website is to empower individuals and communities by providing resources, advocating for systemic change, and fostering collaboration to address the root causes of poverty and create sustainable solutions for economic and social well-being.
          </p>
        </div>
      </div>
    <footer className="new_footer_area bg_color">
    <div className="new_footer_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                        <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate={true} _lpchecked="1">
                            <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                            <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                            <p className="mchimp-errmessage" style={{display: "none"}}></p>
                            <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                        </form>
                    </div>
                </div>
                <div className="new-footer">
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Pages</h3>
                        <ul className="list-unstyled f_list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">SignIn</a></li>
                            <li><a href="#">SignUp</a></li>
                            <li><a href="#">Landing Page</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                        <ul className="list-unstyled f_list">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Term &amp; conditions</a></li>
                            <li><a href="#">Reporting</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Support Policy</a></li>
                            <li><a href="#">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft"}}>
                        <h3 className="f-title f_600 t_color f_size_18">Join us in social media.</h3>
                        { <div className="f_social_icon">
                            <img src={insta} alt="" />
                            <img src={whatsapp} alt="" />
                            <img src={twitter} alt="" />
                        </div> }
                    </div>
                </div>
            </div>
        </div>
        <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
        </div>
    </div>
    <div className="footer_bottom">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                    <p className="mb-0 f_400">© HomelyHub 2024 All rights reserved.</p>
                </div>
                
            </div>
        </div>
    </div>
</footer>
    </div>
  );
}

export default About;
