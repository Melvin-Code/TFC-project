import React, { Component } from "react";

class MobListDrop extends Component {
  render() {
    return (
      
        <ul id={this.props.mobChoice()} className="drop-dwn-list">
          <li className="list-item">Live Transactional Support</li>
          <li className="list-item">Title Talk</li>
          <li className="list-item">Tutorials</li>
          <li className="list-item">Blog</li>
        </ul>
      
    );
  }
}

export default MobListDrop;
