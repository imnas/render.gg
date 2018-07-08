import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
    // <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}>
        <div className="footerContainer2">
            <div className="footerSub">
            <div>
                <div>
                <NavLink className="navLink" to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                        <NavLink className="navLink" to="/profile/jay" exact><ion-icon name="people"></ion-icon> Partners</NavLink>
                        <NavLink className="navLink" to="/careers" exact><ion-icon name="code-working"></ion-icon> Careers</NavLink>
                        <NavLink  to="/faq" exact><ion-icon name="help-circle-outline"></ion-icon> FAQ</NavLink>
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
    // </ScrollAnimation>
    );
  }
}

export default Footer;