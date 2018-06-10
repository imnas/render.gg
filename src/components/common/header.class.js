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
              <Player id="Player"
                PlaysInLine
                muted
                autoPlay
                loop
                fluid={true}
                aspectRatio="16:9"
                src="https://video.wixstatic.com/video/646904_c9fc4ec5e29d456baa5731bbe8db2c70/1080p/mp4/file.mp4"
              />
            </div>
        </div>
      </div>
    );
  }
}

export default Header;