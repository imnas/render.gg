import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/media/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="headerFlexContainer">
        <div className="heroTopContainer">
            <nav className="topNav">
                <div className="navLeft">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/" exact>Partners</NavLink>
                    <NavLink to="/" exact>Quote</NavLink>
                </div>
                <div className="navMid">
                    <NavLink to="/" exact><img src={logo}/></NavLink>
                </div>
                <div className="navRight">
                    <div className="topNavRightSub">
                        <a>Slogan of the company.</a>
                    </div>
                </div>
            </nav>
        </div>
        <div className="heroContainer">
            <div className="showReelContainer">
              
            </div>
        </div>
      </div>
    );
  }
}

export default Header;