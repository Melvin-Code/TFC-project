import React, { Component } from "react";

class MobNav extends Component {
  state = {
    show: "show",
    hide: "hide",
    onLoad: "static",
    choice: 1
  };

  showOrHide = () => {
    if (this.state.choice === 1) {
      return this.state.onLoad;
    } else if (this.state.choice === 2) {
      return this.state.show;
    } else if (this.state.choice === 3) {
      return this.state.hide;
    }
  };

  choice = num => {
    this.setState({
      choice: num
    });
  };

  render() {
    return (
      <div id="mobnav" className="navbar">
        <div className="logo-box">
          <img alt="Logo" src="/Assets/logo.png" className="logo"></img>
        </div>
        <div className="mob-btn-box">
          <button className="left-btn">
            <img alt="left button" src="./Assets/calculator.svg" />
          </button>
          <button onClick={() => this.choice(2)} className="burguer">
            <img
              className="burguer-img"
              alt="hamburguer menu"
              src="./Assets/Hamburgermenu.svg"
            />
          </button>
        </div>
        <div id={this.showOrHide()} >
        <div className="navbar">
          <div className="logo-box">
            <img alt="Logo" src="/Assets/logo.png" className="logo"></img>
          </div>
          <div onClick={() => this.choice(3)} className='exit-box'>
              <button className='exit-btn'><img className='exit-btn-img' alt='exit burguer' src='/Assets/exit.svg'/></button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="button-box">
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
</div> */
}
export default MobNav;
