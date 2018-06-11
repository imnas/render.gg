import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { NavLink } from 'react-router-dom';
import { Player } from 'video-react';
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
                    <NavLink to="/" exact><ion-icon name="home"></ion-icon> Home</NavLink>
                    <NavLink to="/" exact><ion-icon name="people"></ion-icon> Partners</NavLink>
                    <NavLink to="/" exact className="quoteBtn"><ion-icon name="pricetag"></ion-icon> Quote</NavLink>
                </div>
                <div className="navMid">
                    <NavLink to="/" exact><img src={logo}/></NavLink>
                </div>
                <div className="navRight">
                    <div className="topNavRightSub">
                        <a><ion-icon name="quote"></ion-icon> Slogan of the company.</a>
                    </div>
                </div>
            </nav>
        </div>
        <div className="heroContainer">
            <div className="showReelContainer">
              <div className="circleNav">
                <a className="active"></a>
                <a></a>
                <a></a>
              </div>
              <span className="overlayScreenHome">
                <Player id="Player"
                PlaysInLine
                muted
                autoPlay
                loop
                fluid={true}
                aspectRatio="16:9"
                src="https://video.wixstatic.com/video/646904_c9fc4ec5e29d456baa5731bbe8db2c70/1080p/mp4/file.mp4"
                />
                <span className="overlayVid"></span>
              </span>
              <div className="heroCtaContainer">
                <div className="heroLeft">
                  <div className="actualHeroItemContainer">
                    <h1>RENDER.GG</h1>
                    <h4>We Are <strong>Render</strong></h4>
                    <div className="ctaContainer">
                      <NavLink to="/products"><ion-icon name="videocam"></ion-icon> SHOWREEL</NavLink>
                    </div>
                  </div>
                </div>
                {/* <div>

                </div> */}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;