import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-up">
          <div className="footer-box">
            <div>
              <img className="f-logo" alt="logo" src="/Assets/logo2.png" />
            </div>
            <ul id="aligner" className="fbox-list">
              <li className="fbox-list-item">
                powered by <a href="#">James Brown Law</a>
              </li>
              <li className="fbox-list-item">support@titleleap.com</li>
              <li className="fbox-list-item">(561) 955-0128</li>
              <li className="fbox-list-item">
                1110 N. Olive Ave. West Palm Beach, FL 33401
              </li>
            </ul>
          </div>
          <div className="footer-box">
            <h5 className="fbox-heading">Resources</h5>
            <ul className="fbox-list">
              <li className="fbox-list-item">Closing Cost Calculator</li>
              <li className="fbox-list-item">Blog</li>
              <li className="fbox-list-item">FAQs</li>
              <li className="fbox-list-item">Request Demo</li>
              <li className="fbox-list-item">Sign In</li>
            </ul>
          </div>
          <div className="footer-box">
            <h5 className="fbox-heading">Discover</h5>
            <ul className="fbox-list">
              <li className="fbox-list-item">Privacy Policy</li>
              <li className="fbox-list-item">Terms Of Use</li>
              <li className="fbox-list-item">Contact </li>
              <li className="fbox-list-item">Need Help?</li>
            </ul>
          </div>
          <div className="footer-box">
            <h5 className="fbox-heading">News Letter</h5>
            <form className="fbox-form">
              <input
                className="fbox-input"
                type="email"
                placeholder="   Your Email"
              ></input>
              <button className="fbox-button">
                <img
                  className="fbox-button-check"
                  alt="checkmark"
                  src="/Assets/check.svg"
                />
              </button>
            </form>
            <div>
              <img
                className="social-icon"
                alt="Facebook"
                src="/Assets/Path9.svg"
              />
              <img
                className="social-icon"
                alt="LinkedIn"
                src="/Assets/Group11.svg"
              />
            </div>
          </div>
        </div>
        <div className="footer-dwn">
          <p className="fdwn-text">
            Title Leap, LLC is a Florida Limited Liability Company. All rights
            reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
