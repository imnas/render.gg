import React, { Component } from 'react';
import { Player } from 'video-react';
import videop from '../../assets/media/profvid.mp4';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="profilePageContainer">
        <div className="profilePageS">
            <div className="profileSection">
                <div className="profileActual">
                    <div className="profileTop">
                        <div className="profileImageContainer">
                            <img src={this.props.profileImage}/>
                            <span class="frontTintP2"></span>
                        </div>
                        <div className="profileInfoContainer">
                            <div>
                                <h4>John Doe</h4>
                            </div>
                            <div>
                                <span>Vlogger</span>
                                <span>Live Streamer</span>
                                <span>Graphic Designer</span>
                            </div>
                            <div className="socialsContainerProfile">
                                <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                                <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitch"></ion-icon></a>
                                <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                            </div>
                            <div className="ctaProfile">
                                <a>View Latest Work</a>
                            </div>
                        </div>
                    </div>
                    <div className="profileDesc">
                        <div className="sectionHeaderProfile">
                            <h2>About Me</h2>
                        </div>
                        <p>I had the idea to create Render to ensure clients get the absolute best video content and editors get a fair infrastructure to learn and develop. During my career I have gained an invaluable experience of the digital media and esports industries. I also have strong skills in a variety of digital media programs and applications which allows me to teach and guide my employees. Furthermore, I have skills in marketing, brand management, graphic design and business, which I have developed during my time working within the creative industry.</p>
                    </div>
                    <div className="vidCont">
                        <Player id="Player"
                        // PlaysInLine
                        muted
                        autoPlay
                        loop
                        // fluid={true}
                        // aspectRatio="16:9"
                        src={videop}
                        />
                        <span class="frontTintP2"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};
