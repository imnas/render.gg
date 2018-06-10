import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    <div className="footerContainer">
        <div className="footerSub">
        <div>
            <div>
            <NavLink to="/"><ion-icon name="pricetag"></ion-icon> Products</NavLink>
            <NavLink to="/"><ion-icon name="information-circle"></ion-icon> About</NavLink>
            <NavLink to="/"><ion-icon name="help-buoy"></ion-icon> Contact</NavLink>
            </div>
        </div>
        <div>
            <div>
            <a href="/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
            <a href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
            </div>
            <div>
            &copy; 2018 RENDER.GG
            </div>
            {/* <div>
            powered by
            </div> */}
        </div>
        </div>
    </div>
    );
  }
}

export default Footer;