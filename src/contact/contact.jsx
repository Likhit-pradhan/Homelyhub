import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import About from "../about/about";
//import Contact from "../contact/contact";
import SignUpForm from "../login/signup";

function Contact() {
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
          <button className="btn btn--turqouise btn--lg"><Link to={"/about"}>Donate</Link></button>
          </li>
        </ul>
      </nav>
      {/* <div className="site-content">
        <main className="contact">
          <div className="contact-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="contact-top__inner t-wysiwyg t-wysiwyg--sm t-center t-white">
                    <h1>Contact us</h1>
                    <p>We are here for you always. Call us, email us, or visit us for all your queries and suggestions. Alternatively, you can send us a message by filling the adjacent form, and we will get in touch with you asap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="contact-info">
            <div className="container">
              <div className="row gy-5">
                <div className="col-lg-5 col-xl-4 offset-xl-1">
                  <div className="-ml-xl-8">
                    <div className="row gy-5">
                      <div className="col-md-6 col-lg-12">
                        <div className="contact-info__group">
                          <h2>Visit us</h2>
                          <p>End Poverty <br />Plot No. 64, Institutional Area, Sector - 18, Sarhaul, Gurugram, Haryana - 122015</p>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-12">
                        <div className="contact-info__group">
                          <h2>Get in touch</h2>
                          <ul className="u-list-reset">
                            <li className="p-icon p-icon--tel">
                              <a href="tel:0124-4101200">0124-4101200</a> 
                              <a href="tel:0124-4101239">0124-4101239</a>
                            </li>
                            <li className="p-icon p-icon--mail">
                              <a href="mailto:contact@endpovertyindia.org">contact@endpovertyindia.org</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                  <div className="-mx-xl-8">
                    <div className="contact-form">
                      <div className="contact-form__part contact-form__part--form">
                        <h2>Leave us a message</h2>
                        <form action="https://endpoverty.org.in/wp-content/themes/endpoverty/script-contact-form-send.php" method="post" className="form form-contact validate">
                          <div className="form-row form-row--2col">
                            <div className="form-field">
                              <input name="firstname" type="text" placeholder="First Name" data-error-text="First name Error" className="req" />
                            </div>
                            <div className="form-field">
                              <input name="lastname" type="text" placeholder="Last Name" data-error-text="Last name is required" className="req" />
                            </div>
                          </div>
                          <div className="form-row form-row--2col">
                            <div className="form-field">
                              <input name="email" type="text" placeholder="Email" data-error-text="Email is required" className="email req" />
                            </div>
                            <div className="form-field">
                              <input name="phone" type="text" placeholder="Phone Number" data-error-text="Phone is required" />
                            </div>
                          </div>
                          <div className="form-field">
                            <textarea name="message" placeholder="Your Message" data-error-text="Message is required" className="req"></textarea>
                          </div>
                          <div className="form-field form-field--checkbox">
                            <label className="checkbox">
                              <input type="checkbox" name="agree" value="1" data-error-text="Your consent is required." className="req" />
                              <span className="checkmark"></span> EndPoverty will use all data provided hereunder in accordance with the <a href="privacy-policy-url">Privacy Policy</a>.
                            </label>
                          </div>
                          <div className="form-field form-field--captcha captcha_row">
                            <div className="g-recaptcha" data-sitekey="6LdHW5kbAAAAAIylBI2OmcyVsVq3H3AHA1Jtyr7o" data-callback="recaptcha_callback" data-error-text="Captcha is required"></div>
                          </div>
                          <button type="submit" className="btn btn--turqouise btn--rwd btn--md">Send message</button>
                        </form>
                      </div>
                      <div className="contact-form__part contact-form__part--success">
                        <p>Your message was sent. Thank you!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div> */}

      {/* NEW contactttt */}

      <div class="landing_page">
    <div class="responsive-container-block big-container">
      <img class="bg-img" id="iq5bf" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"></img>
      <div class="responsive-container-block container">
        <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left-one">
          <div class="content-box">
            <p class="text-blk section-head">
              Lorem ipsum amet dolor
            </p>
            <p class="text-blk section-subhead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis volupta
            </p>
            <div class="icons-container">
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"></img>
              </a>
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"></img>
              </a>
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"></img>
              </a>
              <a class="share-icon">
                <img class="img" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"></img>
              </a>
            </div>
          </div>
        </div>
        <div class="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 right-one" id="i1zj">
          <form class="form-box">
            <div class="container-block form-wrapper">
              <p class="text-blk contactus-head">
                <a class="link" href="">
                </a>
                Get a quote
              </p>
              <p class="text-blk contactus-subhead">
                We will get back to you in 24 hours
              </p>
              <div class="responsive-container-block">
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-7">
                  <input class="input" id="ijowk-7" name="FirstName" placeholder="First Name"></input>
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i1ro7">
                  <input class="input" id="indfi-5" name="Last Name" placeholder="Last Name"></input>
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-6 emial" id="ityct">
                  <input class="input" id="ipmgh-7" name="Email" placeholder="Email"></input>
                </div>
                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                  <input class="input" id="imgis-6" name="PhoneNumber" placeholder="Phone Number"></input>
                </div>
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-7">
                  <textarea placeholder="Type message here" aria-placeholder="Type message here" class="textinput" id="i5vyy-7" ></textarea>
                </div>
              </div>
              <button class="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>

    </div>
  );
}

export default Contact;
