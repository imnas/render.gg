import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';
import Sticky from 'react-sticky-el';
import MobileMenu from './mobileMenu.class';
import ScrollToTopOnMount from '../pages/scrollToTop';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.scrollBarHandlerMenu = this.scrollBarHandlerMenu.bind(this);
    this.state = {
      mobileMenuActive : false
    };
  }

  toggleMobileMenu = () => {
    this.setState({mobileMenuActive: !this.state.mobileMenuActive})
    this.scrollBarHandlerMenu();
  }

  scrollBarHandlerMenu = () => {
    if(this.state.mobileMenuActive == false) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }


  render() {
    return (
      
        <div className="headerFlexContainer2"  id="section0">
          <ScrollToTopOnMount/>
          <Sticky stickyClassName={'stickyNav'}>
          <div className="heroTopContainer">
              <nav className="topNav">
                  <div className="navLeft">
                      <NavLink className="navLink" to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                      <NavLink className="navLink" to="/team" exact><ion-icon name="people"></ion-icon> Team</NavLink>
                      <NavLink className="navLink" to="/careers" exact><ion-icon name="code-working"></ion-icon> Careers</NavLink>
                      <NavLink  to="/faq" exact><ion-icon name="help-circle-outline"></ion-icon> FAQ</NavLink>
                  </div>
                  <div className="navMid">
                      <NavLink to="/" exact>
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.09 46.09">
                          <defs>
                            <style dangerouslySetInnerHTML={{__html: "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: #f15a24;\n        opacity: 0.41;\n      }\n\n      .cls-3 {\n        fill: #f36925;\n      }\n    " }} />
                          </defs>
                          <title>renderl</title>
                          <g>
                            <polygon className="cls-1" points="0 0 0 46.09 14.82 46.09 14.82 14.85 46.09 14.85 46.09 0 0 0" />
                            <rect className="cls-2" x="46.07" y="31.02" width="0.02" height="15.08" />
                            <rect className="cls-2" x="46.07" y="31.02" width="0.02" height="15.08" />
                            <rect className="cls-2" x="31.45" y="31.02" width="14.62" height="15.08" />
                            <rect className="cls-2" x="31.45" y="31.02" width="14.62" height="15.08" />
                            <rect className="cls-3" x="31.45" y="31.02" width="14.62" height="15.08" />
                          </g>
                        </svg>
                      </NavLink>
                  </div>
                  <div className="navRight navRightDesktop">
                      <div className="topNavRightSub">
                          <a><ion-icon name="quote"></ion-icon> Slogan of the company.</a>
                      </div>
                  </div>
                  <div className="navRight mobileNavRight">
                    <MobileMenu toggleMenuPass={this.toggleMobileMenu}/>
                  </div>
              </nav>
          </div>
          </Sticky>

          <div className={this.state.mobileMenuActive ? "showMobileMenu" : "hideMobileMenu"}>
            <div className="fullScreenMenuMobile">
              <a className="closeMenuMobile" onClick={this.toggleMobileMenu}><ion-icon name="close"></ion-icon></a>
              <div className="menuMobileToggleCont">
                  <div className="topLogoContainerMobileMenu">
                      <NavLink to="/" exact className="mmMenuLogo">
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.09 46.09">
                          <defs>
                          <style dangerouslySetInnerHTML={{__html: "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        fill: #f15a24;\n        opacity: 0.41;\n      }\n\n      .cls-3 {\n        fill: #f36925;\n      }\n    " }} />
                          </defs>
                          <title>renderl</title>
                          <g>
                          <polygon className="cls-1" points="0 0 0 46.09 14.82 46.09 14.82 14.85 46.09 14.85 46.09 0 0 0" />
                          <rect className="cls-2" x="46.07" y="31.02" width="0.02" height="15.08" />
                          <rect className="cls-2" x="46.07" y="31.02" width="0.02" height="15.08" />
                          <rect className="cls-2" x="31.45" y="31.02" width="14.62" height="15.08" />
                          <rect className="cls-2" x="31.45" y="31.02" width="14.62" height="15.08" />
                          <rect className="cls-3" x="31.45" y="31.02" width="14.62" height="15.08" />
                          </g>
                      </svg>
                      </NavLink>
                  </div>
                  <div className="menuFlexMobile">
                      <NavLink className="navLink" to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                      <NavLink className="navLink" to="/team" exact><ion-icon name="people"></ion-icon> Team</NavLink>
                      <NavLink className="navLink" to="/careers" exact><ion-icon name="code-working"></ion-icon> Careers</NavLink>
                      <NavLink className="navLink" to="/faq" exact><ion-icon name="help-circle-outline"></ion-icon> FAQ</NavLink>
                  </div>
                </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Header;