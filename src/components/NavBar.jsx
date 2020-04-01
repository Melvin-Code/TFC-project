import React, { Component } from "react";
import ListDrop from "./ListDrop";


class NavBar extends Component {
    state={
        action: false,
    
    }
    toggle=()=>{
        this.setState({
            action: !this.state.action
        })
        console.log(this.state.action)
    }
    reaction=()=>{
        if(this.state.action === true){
            this.setState({
                face:'down'
            })
            return <ListDrop/>
        }else{
            this.setState({
                face:'up'
            })
        }
        
    }
    // turn=()=>{
    //     if(this.state.action === false){
           
    //     }else{
            
    //     }
    // }
  render() {
      return (
          <nav className="navbar">
          
        <div className="logo-box">
          <img alt="Logo" src="/Assets/logo.png" className="logo"></img>
        </div>
        <div className="button-box">
          <div className="primary-button-box">
            <button className="btn-links">CLOSING COSTS</button>
            <button onClick={()=> this.toggle()} id="drop-dwn" className="btn-links">
              REALTOR RESOURCES
              <img
                id= {this.state.face} 
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
      </nav>
    );
  }
}

export default NavBar;
