import React, { Component } from 'react';

class MobSection3 extends Component {
    render() {
        return (
            <div className="section3">
            <div className="up-box">
              <div className="up-box-controller">
                <div className="left-up-box">
                  <h4 className="left-upbox-title">
                    Productive realtors get more time for new business & the best
                    shot at that referral.
                  </h4>
                  <p className="left-upbox-content">
                    Title Leap was designed by realtors for realtors giving them
                    the tools to work the way they want to work. Title Leap was
                    built by James Brown Law, an award winning law firm/title
                    agent, based on decades of experience serving the realtor
                    community and closing thousands of Florida home sales. Now you
                    can offer your buyers and sellers an efficient state of the
                    art closing experience that will linger in their minds long
                    after the sale.
                  </p>
                  
                </div>
                <div className="rigth-up-box">
                  <img
                    className="rigth-upbox-img"
                    alt="real state agent"
                    src="/Assets/real-estate-agent-e1440795671229.png"
                  />
                </div>
              </div>
            </div>
            <div className="centered-box">
              <div className="cbox-dwn">
                  <div id='vbox-organizer'>
                <div className="cbox-dwn-video">
                  <img
                    className="dwn-video-img"
                    alt="video"
                    src="/Assets/screen1.png"
                  ></img>
                  <div className="dwn-video-overlay">
                    <img
                      className="overlay-img"
                      alt="play circle"
                      src="/Assets/play-circle-1.svg"
                    />
                    <div className='overlay-text-box'>
                      <h5 className='overlay-main-text'>PABLO</h5>
                      <p className="overlay-sub-text">Realtor</p>
                    </div>
                  </div>
                  <p className="dwn-video-coment">
                    “One click away to being{" "}
                    <span className="video-coment-bold">stress free”</span>
                  </p>
                </div>
                
                <div className="cbox-dwn-video">
                  <img
                    className="dwn-video-img"
                    alt="video2"
                    src="/Assets/screen2.png"
                  ></img>
                  <div className="dwn-video-overlay">
                    <img
                      className="overlay-img"
                      alt="play circle"
                      src="/Assets/play-circle-1.svg"
                    />
                    <div className='overlay-text-box'>
                      <h5 className="overlay-main-text">DARREN</h5>
                      <p className="overlay-sub-text">Realtor</p>
                    </div>
                  </div>
                  <p className="dwn-video-coment">
                    “It really{" "}
                    <span className="video-coment-bold">
                      simplifies the process”
                    </span>
                  </p>
                </div>
                </div>
                <div className="cbox-rigth">
                  <p className="cbox-rigth-text">
                    “It’s so nice to <span>manage my deals on my time.”</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="cbox-down-box">
              <div className="down-left-box">
                <h4 className="dlbox-main-text">
                Are you a Title Company?
                </h4>
                <p className="dlbox-sub-text">
                Title Leap gives Title Agents the tools they need to make their job easier, clients happier, and beat big box title companies.
                </p>
                <button className="dlbox-button">Request Demo</button>
              </div>
              <div className="down-rigth-box">
                <img
                  className="drbox-img"
                  alt="mac book"
                  src="/Assets/ipad.png"
                />
              </div>
            </div>
          </div>
        );
    }
}

export default MobSection3;