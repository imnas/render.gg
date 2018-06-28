import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';
import Sticky from 'react-sticky-el';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      
        <div className="headerFlexContainer2"  id="section0">
          {/* <span className="glareHeader"></span> */}
          <Sticky stickyClassName={'stickyNav'}>
          <div className="heroTopContainer">
              <nav className="topNav">
                  <div className="navLeft">
                      <NavLink className="navLink" to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                      <NavLink className="navLink" to="/profile/jay" exact><ion-icon name="people"></ion-icon> Partners</NavLink>
                      <NavLink className="navLink" to="/careers" exact><ion-icon name="code-working"></ion-icon> Careers</NavLink>
                      <NavLink  to="/" exact className="quoteBtn"><ion-icon name="pricetag"></ion-icon> Quote</NavLink>
                  </div>
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
                  <div className="navRight">
                      <div className="topNavRightSub">
                          <a><ion-icon name="quote"></ion-icon> Slogan of the company.</a>
                      </div>
                  </div>
              </nav>
          </div>
          </Sticky>
        </div>

    );
  }
}

export default Header;