import React, { Component } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink, Redirect } from 'react-router-dom';
import { Player } from 'video-react';
import Sticky from 'react-sticky-el';
import MobileMenu from './mobileMenu.class';
import logo from '../../assets/media/logo.svg';
import ScrollToTopOnMount from '../pages/scrollToTop';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      mobileMenuActive : true
    };
  }

  toggleMobileMenu = () => {
    this.setState({mobileMenuActive: !this.state.mobileMenuActive})
  }

  render() {
    const scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
      }); 
    }
    const location = window.location.hash
    return (
      
        <div className="headerFlexContainer"  id="section0">
          <ScrollToTopOnMount/>
          {/* <span className="glareHeader"></span> */}
          <Sticky stickyClassName={'stickyNav'}>
          <div className="heroTopContainer">
              <nav className="topNav">
                  <ScrollAnimation animateIn="slideInLeft" offset={0} animateOnce={true} initiallyVisible={true}>
                  <div className="navLeft">
                      <NavLink className="navLink" to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                      <NavLink className="navLink" to="/team" exact><ion-icon name="people"></ion-icon> Team</NavLink>
                      <NavLink className="navLink" to="/careers" exact><ion-icon name="code-working"></ion-icon> Careers</NavLink>
                      <NavLink  to="/faq" exact><ion-icon name="help-circle-outline"></ion-icon> FAQ</NavLink>
                  </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="zoomIn" offset={0} delay={0} animateOnce={true} initiallyVisible={true}>
                  <div className="navMid">
                      <NavLink to="/" exact>
                      {/* <img src={logo}/> */}
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
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="slideInRight" offset={0} animateOnce={true} initiallyVisible={true}>
                  <div className="navRight">
                      <div className="topNavRightSub">
                          <a><ion-icon name="quote"></ion-icon> Slogan of the company.</a>
                      </div>
                  </div>
                  <div className="navRight mobileNavRight">
                    <MobileMenu toggleMenuPass={this.toggleMobileMenu}/>
                  </div>
                  </ScrollAnimation>
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

          <div className="heroContainer">
              {/* <div className="circleNav">
                <NavHashLink className={location == ("") || location == ("#section0") ? "active" : null }  scroll={el => scrollWithOffset(el, 0)} to="/#section0"></NavHashLink>
                <NavHashLink className={location == ("#section1") ? "active" : null }  scroll={el => scrollWithOffset(el, 0)} to="/#section1"></NavHashLink>
                <NavHashLink className={location == ("#section2") ? "active" : null }  scroll={el => scrollWithOffset(el, 0)} to="/#section2"></NavHashLink>
                <NavHashLink className={location == ("#section3") ? "active" : null }  scroll={el => scrollWithOffset(el, 0)} to="/#section3"></NavHashLink>
              </div> */}
                <div className="heroCtaContainer">
                  <div className="heroLeft">
                    <div className="actualHeroItemContainer">
                      {/* <h1>RENDER.GG</h1> */}
                      <h4>We Are <strong>Render</strong></h4>
                      {/* <div className="ctaContainer">
                        <NavLink to="/products"><ion-icon name="videocam"></ion-icon> <span>SHOWREEL</span></NavLink>
                      </div> */}
                    </div>
                  </div>
                  {/* <div>

                  </div> */}
                </div>
              <ScrollAnimation animateIn="zoomIn" className="showReelContainer" animateOnce={true}>
                {/* <span className="overlayVid"></span> */}
                <span className="overlayScreenHome">
                  <video controls>
                    <source src="https://video.wixstatic.com/video/646904_c9fc4ec5e29d456baa5731bbe8db2c70/1080p/mp4/file.mp4" type="video/mp4"/>
                  </video>
                  {/* <Player id="Player"
                  PlaysInLine
                  fluid={true}
                  aspectRatio="16:9"
                  src="https://video.wixstatic.com/video/646904_c9fc4ec5e29d456baa5731bbe8db2c70/1080p/mp4/file.mp4"
                  /> */}
                </span>
              </ScrollAnimation>
          </div>
        </div>

    );
  }
}

export default Header;