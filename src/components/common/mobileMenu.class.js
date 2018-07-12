import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      
        <div className="mobileMenuContainer">
            <a onClick={this.props.toggleMenuPass}><ion-icon name="menu"></ion-icon></a>
        </div>

    );
  }
}

export default MobileMenu;