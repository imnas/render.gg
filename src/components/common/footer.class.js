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
            <NavLink className="navLink" to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                    <NavLink className="navLink" to="/" exact><ion-icon name="people"></ion-icon> Partners</NavLink>
                    <NavLink  to="/" exact className="quoteBtn"><ion-icon name="pricetag"></ion-icon> Quote</NavLink>
            </div>
        </div>
        <div>
            <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
            <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
            <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
        </div>
        <div>
            <div>
            &copy; 2018 Render.gg
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