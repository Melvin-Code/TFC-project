import React, { Component } from "react";
import MobListDrop from "./MobListDrop";

class MobNav extends Component {
  state = {
    show: "show",
    hide: "hide",
    onLoad: "static",
    choice: 1,
    act: true,
    menuLoad: true
    
  };

  mobChoice=()=>{
    
    if(this.state.menuLoad === true){
      return 'firstload'
    }else if (this.state.act === true){
      return 'hided'
    }else if (this.state.act === false){
      return 'expand'
    }
  }

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
      menuLoad: true,
      act: true,
    })

    this.setState({
      choice: num
    });

  };

  toggle = () => {
    this.setState({
      act: !this.state.act
    });
    this.setState({
      menuLoad: false
    })
  };

  change = () => {
    if (this.state.act === true) {
      return "up";
    } else {
      return "down";
    }
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
        <div id={this.showOrHide()}>
          <div className="navbar">
            <div className="logo-box">
              <img alt="Logo" src="/Assets/logo.png" className="logo"></img>
            </div>
            <div onClick={() => this.choice(3)} className="exit-box">
              <button className="exit-btn">
                <img
                  className="exit-btn-img"
                  alt="exit burguer"
                  src="/Assets/exit.svg"
                />
              </button>
            </div>
          </div>
          <div className="mob-nav-box">
            <button className="mob-btn-link">
              <p>SIGN IN</p>
            </button>
            <button
              onClick={() => this.toggle()}
              className="mob-btn-link"
              id="RR-btn"
            >
              <p>
                REALTOR RESOURCES
                <img
                  id={this.change()}
                  className="dark-arrow"
                  alt="drop arrow"
                  src="/Assets/carrot(1).svg"
                />
              </p>
            </button>
            
                <MobListDrop mobChoice={this.mobChoice}/>
           
            <button className="mob-btn-link">
              <p>CONTACT</p>
            </button>
            <button id='demo' className="mob-btn-link">
              <p>REQUEST DEMO</p>
            </button>
            <div className='bug-cover'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobNav;
