import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="commonPageContainer">
          {/* <div className="curvedHeaderFlow">
            <span></span>
          </div> */}
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>Who are we?</h2>
                <h4>We’re <strong>Render</strong>. A premium YouTube video production service for the gaming world</h4>
              </div>
              <div className="singleSectionContainer">
                <div className="trippleStatsContainer">
                  <div>
                    <h2>63</h2>
                    <p>MONTHLY VIDEOS</p>
                  </div>
                  <div>
                    <h2>9.8M</h2>
                    <p>MONTHLY VIEWS</p>
                  </div>
                  <div>
                    <h2>16</h2>
                    <p>TALENTED EDITORS</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>Who do we serve?</h2>
                <h4>Below are some of our more established <strong>clients</strong></h4>
              </div>
              <div className="singleSectionContainer">
                <div className="establishedClientsContainer">
                  <div className="clientProfile">
                    <div> 
                      <img src="https://vignette.wikia.nocookie.net/youtube/images/8/89/Cizzorz.jpg/revision/latest?cb=20180516211530"/>
                      <div>
                        <h4>Cizzorz</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Youtube Subscribers</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </div>
                  <div className="clientSocials">
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitch"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                  </div>
                  </div>
                  <div className="clientProfile">
                    <div> 
                      <img src="https://static.wixstatic.com/media/646904_e13c307bf9ad4c6697b9ecd3f91afb0a~mv2.jpg/v1/fill/w_188,h_196,al_c,q_80,usm_0.66_1.00_0.01/646904_e13c307bf9ad4c6697b9ecd3f91afb0a~mv2.webp"/>
                      <div>
                        <h4>Sp4zie</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Youtube Subscribers</h4>
                      <p>5,000,000 +</p>
                    </div>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </div>
                  <div className="clientSocials">
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitch"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                  </div>
                  </div>
                  <div className="clientProfile">
                    <div> 
                      <img src="https://static.wixstatic.com/media/646904_c2ff3b46f69143798ee95f845c7181c2~mv2.png/v1/fill/w_188,h_196,al_c,usm_0.66_1.00_0.01/646904_c2ff3b46f69143798ee95f845c7181c2~mv2.png"/>
                      <div>
                        <h4>Golden Guardians</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Youtube Subscribers</h4>
                      <p>500,000 +</p>
                    </div>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </div>
                  <div className="clientSocials">
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitch"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                  </div>
                  </div>
                  <div className="clientProfile">
                    <div> 
                      <img src="https://static.wixstatic.com/media/646904_27e71784e5ea4a809cad70ed6ce9f103~mv2.png/v1/fill/w_188,h_196,al_c,usm_0.66_1.00_0.01/646904_27e71784e5ea4a809cad70ed6ce9f103~mv2.png"/>
                      <div>
                        <h4>Unicorns of Love</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Youtube Subscribers</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </div>
                  <div className="clientSocials">
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitch"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                  </div>
                  </div>
                  <div className="clientProfile">
                    <div> 
                      <img src="https://pbs.twimg.com/profile_images/549001300596097024/oO1xEpPt_400x400.png"/>
                      <div>
                        <h4>Ninja</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Youtube Subscribers</h4>
                      <p>10,000,000 +</p>
                    </div>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </div>
                  <div className="clientSocials">
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-twitch"></ion-icon></a>
                    <a className="footer-icon" href="/" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>What do you do?</h2>
                <h4>See some of our <strong>recent work</strong> below</h4>
              </div>
              <div className="singleSectionContainer">

              </div>
            </div>
          </section>
      </div>
    );
  }
}

export default Landing;