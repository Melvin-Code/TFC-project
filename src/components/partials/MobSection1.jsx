import React, { Component } from "react";

class MobSection1 extends Component {
  state = {
    popUp: false,
  };
  popToggle = () => {
    this.setState({
      popUp: !this.state.popUp,
    });
  };
  renderPop = () => {
    if (this.state.popUp === true) {
      return (
        <div onClick={this.popToggle} className="popUp">
          <iframe
            className="video-popUp"
            src="https://www.youtube.com/embed/RZyXU1L3JXk"
          ></iframe>
        </div>
      );
    } else {
    }
  };

  render() {
    return (
      <div>
        {this.renderPop()}
        <section className="section1">
          <div className="sec1-left-box">
            <h1 className="left-box-main">
              <p className="upper">Click To</p>
              <p className="below"> Close</p>
            </h1>
          </div>
          <div id="mob-c-box" className="sec1-center-box">
            <img
              className="mob-left-phone"
              alt="left phone"
              src="/Assets/transactions@2x.png"
            ></img>
            <img
              className="mob-rigth-phone"
              alt="rigth phone"
              src="/Assets/dashboard@2x.png"
            ></img>
          </div>
          <div onClick={this.popToggle} className="sec1-rigth-box">
            <p id="mob-rbox-main" className="rigth-box-main">
              <span className="bold-navy">Title Leap</span> makes closing a home
              sale fast & easy with mobile title & escrow.
            </p>
            <div  className="demo-box">
              <button className="demo demo-btn">Request Demo</button>
              <div className="video-link">
                <img
                  className="play-circle"
                  alt="play circle"
                  src="/Assets/play-circle.svg"
                ></img>
                Watch how Title Leap works (1:10)
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MobSection1;
