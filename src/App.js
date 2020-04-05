import React, { Component } from "react";
import NavBar from './components/NavBar';
import './App.css';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer'
import Submit from './components/Submit';


class App extends Component {
  resolution = () => {
    if (window.screen.width <= 450) {
      return <Submit/>;
    } else {
  
    }
  }
  render() {
    return (
      <div className='App'>
        
        <NavBar/>
          <Section1/>
          {this.resolution()}
          <Section2/>
          <Section3/>
          <Section4/>
          <Footer/>
      </div>
    );
  }
}

export default App;
  
    
 
