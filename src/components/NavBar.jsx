import React, { Component } from "react";
import ListDrop from "./partials/ListDrop";
import MobNav from "./partials/MobNav";

class NavBar extends Component {
  state = {
    action: false,
    
  };
  
  toggle = () => {
    this.setState({
      action: !this.state.action
    });
    console.log(this.state.action);
  };
  reaction = () => {
    if (this.state.action === true) {
      return <ListDrop />;
    } else {
    }
  };
  turn = () => {
    if (this.state.action === false) {
      return "down";
    } else {
      return "up";
    }
  };
  resolution = () => {
    if (window.screen.width <= 450) {
      return <MobNav  />;
    } else {
      return (
        <div className="navbar">
          <div className="logo-box">
            <img alt="Logo" src="/Assets/logo.png" className="logo"></img>
          </div>
          <div className="button-box">
            <div className="primary-button-box">
              <button id="closing-cost" className="btn-links">
                CLOSING COSTS
              </button>
              <button
                onClick={() => this.toggle()}
                id="drop-dwn"
                className="btn-links"
              >
                REALTOR RESOURCES
                <img
                  id={this.turn()}
                  className="arrow"
                  alt="drop-down arrow"
                  src="/Assets/arrow.svg"
                />
                {this.reaction()}
              </button>
              <button className="btn-links">CONTACT</button>
            </div>
            <div className="sub-button-box">
              <button className="contract-submission">SUBMIT CONTRACT</button>
              <button className="signin">SIGNIN</button>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <nav>{this.resolution()}</nav>;
  }
}

export default NavBar;
