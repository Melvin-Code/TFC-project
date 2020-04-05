import React, { Component } from "react";
import MobSection1 from "./partials/MobSection1";


class Section1 extends Component {
  state={
    popUp: false,
  }
  popToggle=()=>{
    this.setState({
      popUp: !this.state.popUp
    })
  }
  renderPop=()=>{
    if(this.state.popUp === true){
    return (
      <div onClick={this.popToggle} className='popUp'>
        <iframe className='video-popUp'
src="https://www.youtube.com/embed/RZyXU1L3JXk">
</iframe>
      </div>
    )
  }else {

  }
}
    resolution = () => {
        if (window.screen.width <= 450) {
          return <MobSection1 />;
        } else {
          return(<section className="section1">
              {this.renderPop()}
          <div className="sec1-left-box">
            <h1 className="left-box-main">
              <p className="upper">Click<br/> To</p>
              <p className="below"> Close</p>
            </h1>
            <p className="left-box-sub">Mobile Title & Escrow</p>
            <button className="demo demo-btn">Request Demo</button>
            <div onClick={this.popToggle} className="video-link">
              <img
                className="play-circle"
                alt="play circle"
                src="/Assets/play-circle.svg"
              ></img>
              Watch how Title Leap works (1:10)
            </div>
          </div>
          <div className="sec1-center-box">
            <img
              className="left-phone"
              alt="left phone"
              src="/Assets/transactions@2x.png"
            ></img>
            <img
              className="rigth-phone"
              alt="rigth phone"
              src="/Assets/dashboard@2x.png"
            ></img>
          </div>
          <div className="sec1-rigth-box">
            <p className="rigth-box-main">
              <span className="bold-navy">Title Leap</span> makes closing a home
              sale fast & easy with mobile title & escrow.
            </p>
            <p className="rigth-box-sub">
              See the Title Leap advantage for yourself:
            </p>
            <button className="rigth-desktopApp">
              <img
                className="pointer"
                alt="pointer"
                src="/Assets/googleplay.svg"
              />
              
            </button>
          </div>
        </section>)
        }
    }
  render() {
    return (
        <div>
        {this.resolution()}
      </div>
    );
  }
}

export default Section1;
