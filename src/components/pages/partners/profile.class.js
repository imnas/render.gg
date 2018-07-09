import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    const pageName = "Jay";
    const pageDescription = "We are Render, a premium YouTube video production service for the gaming&amp;nbsp;world. ​ We specialize in video editing, motion graphics and channel branding.";

    return (
      <div className="profilePageContainer">
        <Helmet>
            <title>Render - {pageName}</title>
            <meta name="description" content={pageDescription} />
            {/* Twitter Card Meta Tags */}
            <meta name="twitter:site" content="@rendergg" />
            <meta name="twitter:title" content={`Render - ${pageName}`} />
            <meta name="twitter:description" content={pageDescription} />
            {/* Open Graph Meta Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`Render - ${pageName}`} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:url" content={`https://render.gg/profile/${pageName}`} />
        </Helmet>


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
                        {/* <Player id="Player"
                        muted
                        autoPlay
                        loop
                        src={"https://video.wixstatic.com/video/646904_e3f6ef16744046259bf0f6dcef61c8af/1080p/mp4/file.mp4"}
                        /> */}
                        <video autoplay="autoplay" loop="loop">
                            <source src="https://video.wixstatic.com/video/646904_c9fc4ec5e29d456baa5731bbe8db2c70/1080p/mp4/file.mp4" type="video/mp4"/>
                        </video>
                        <span class="frontTintP2"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};
