import React from "react";
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  Image,
  Text,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import "./donationcenter";
import About from "../about/about";
import Contact from "../contact/contact";
import SignIn from "../login/signin";
import homeless from "../images/homeless.png";
import SignUp from "../login/signup";
import donation from "../images/donation.png";
 import icon from "../images/icon1.png";
import food from "../images/food.png";
import support from "../images/support.png"
import support1 from "../images/support1.png"
import support2 from "../images/support2.png"
import home from "../images/home.png"
import whatsapp from "../images/whatsapp.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
const theme = extendTheme({
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Poppins, sans-serif",
  },
});

function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div className="home-page">
        <nav className="navbar">
        <div className="icon" style={{ borderRadius: '50%', backgroundColor: 'white', padding: '5px' }}>
  <img src={icon} alt="Icon" height="50px" width="30px"/>
</div>

          <div className="logo">
            <h1>HomelyHub</h1>
          </div>
          <div className="nav-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/signin"}>Sign In</Link>
            <Link to={"/adminlogin"}>Admin Sign In</Link>
            <Link to="/donationcenter">
                Join with us
              </Link>
          </div>
        </nav>

        <Box w="100%" mt="4">
          <Carousel
            infiniteLoop
            autoPlay
            interval={3000}
            showThumbs={false}
            showStatus={false}
          >
            {/* <div>
              <Image
                src={child}
                alt="Carousel Image 1"
                h="1000px"
                objectFit="cover"
              />
              <Text textAlign="center" mt="2">
                Home
              </Text>
            </div> */}
            <div>
              <Image
                src={donation}
                alt="Carousel Image 2"
                h="700px"
                objectFit="cover"
              />
              
            </div>
            <div>
              <Image
                src={food}
                alt="Carousel Image 2"
                h="700px"
                objectFit="cover"
              />
             
            </div>
            <div>
              <Image
                src={homeless}
                alt="Carousel Image 2"
                h="700px"
                
                objectFit="cover"
              />
              
            </div>
          </Carousel>
        </Box>

        <div className="content-section">
          <div className="content-image">
            <img
              src={home}
              alt="Food"
            />
          </div>
          <div className="content-text">
            <h1>Welcome To Our Website</h1>
            <p>
            Here we unite in the fight against poverty through the generosity of people like you. Your donations are the lifeblood of our mission, empowering us to provide essential resources, support, and opportunities to those struggling with poverty. Together, we can make a tangible difference in the lives of individuals and families in need, offering them hope for a brighter future. Thank you for joining us on this journey toward a more equitable and compassionate society.
            </p>
          </div>
        </div>

        <div className="section">
          <div className="section-content">
            <p>
            Poverty support encompasses various programs and services aimed at assisting individuals and families experiencing financial hardship. This includes direct financial assistance, social services like counseling and job training, education and skill development programs, employment support, and community development initiatives. The goal is to alleviate immediate needs, address underlying causes of poverty, and empower individuals to achieve long-term economic stability and improve their quality of life.
            </p>
          </div>
          <div className="section-image">
            <img
              src={support}
              alt="Image"
            />
          </div>
        </div>

        <div className="section">
          <div className="section-image">
            <img
              src={support1}
              alt="Image"
            />
          </div>
          <div className="section-content">
            <p>
            Our site serves as a crucial online resource, providing easy access to financial aid programs, social services directories, job boards, and educational resources. We offer inspirational success stories, news updates, and a comprehensive resource library to empower individuals facing economic hardship. Through multilingual support and accessibility features, the website aims to reach a diverse audience and foster economic empowerment within communities.
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
    </ChakraProvider>
  );
}

export default Home;
