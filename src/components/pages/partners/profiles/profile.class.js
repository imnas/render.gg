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
            <title>Render - {this.props.name}</title>
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
                        <div className="profileInfoContainer">
                            <div>
                                <h4>{this.props.name}</h4>
                            </div>
                            <div>
                                <span>{this.props.role}</span>
                            </div>
                            <div className="socialsContainerProfile">
                                {this.props.instagram ? <a className="footer-icon" href={this.props.instagram} target="_blank"><ion-icon name="logo-instagram"></ion-icon></a> : null }
                                {this.props.twitter ? <a className="footer-icon" href={this.props.twitter} target="_blank"><ion-icon name="logo-twitter"></ion-icon></a> : null }
                                {this.props.twitch ? <a className="footer-icon" href={this.props.twitch} target="_blank"><ion-icon name="logo-twitch"></ion-icon></a> : null }
                                {this.props.youtube ? <a className="footer-icon" href={this.props.youtube} target="_blank"><ion-icon name="logo-youtube"></ion-icon></a> : null }
                            </div>
                            <div className="ctaProfile">
                                <a href={this.props.latestWork} target="_blank">View Latest Work</a>
                            </div>
                        </div>
                    </div>
                    <div className="profileDesc">
                        <div className="sectionHeaderProfile">
                            <h2>About Me</h2>
                        </div>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="vidCont">
                        {/* <Player id="Player"
                        muted
                        autoPlay
                        loop
                        src={"https://video.wixstatic.com/video/646904_e3f6ef16744046259bf0f6dcef61c8af/1080p/mp4/file.mp4"}
                        /> */}
                        <video autoPlay="autoplay" loop="loop">
                            <source src={this.props.video} type="video/mp4"/>
                        </video>
                        <span className="frontTintP2"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
};
