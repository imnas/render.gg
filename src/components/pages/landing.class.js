import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import CountUp from 'react-countup';
import Slider from "react-slick";
import ScrollAnimation from 'react-animate-on-scroll';
import { Watch } from 'scrollmonitor-react';
import steelSeries from '../../assets/media/sseries.svg';
import exp from '../../assets/media/exp.svg';
import StatsWatch from './watchedStats.class';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {

  }
  render() {

    const pageName = "Home";
    const pageDescription = "We are Render, a premium YouTube video production service for the gaming&amp;nbsp;world. ​ We specialize in video editing, motion graphics and channel branding.";

    return (
      <div className="commonPageContainer">
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
              <meta property="og:url" content={`https://render.gg/`} />
          </Helmet>
          <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}>
            <StatsWatch/>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}> 
          <hr/>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}>
          <section id="section2">
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
                      <h4>Social Reach</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/MoawZVU.jpg"/>
                      <div>
                        <h4>Bjergsen</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>5,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/FriL1Ww.jpg"/>
                      <div>
                        <h4>MattHDGamer</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>500,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/Oc2gyNv.jpg"/>
                      <div>
                        <h4>CLG</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/3LWrI1H.jpg"/>
                      <div>
                        <h4>Aphromoo</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>10,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/QmwRDe3.png"/>
                      <div>
                        <h4>UOL</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/PFZJFEr.jpg"/>
                      <div>
                        <h4>GGS</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/X9KIGzJ.jpg"/>
                      <div>
                        <h4>GoldGloveTV</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
                      <img src="https://i.imgur.com/1aYGkX0.jpg"/>
                      <div>
                        <h4>Aimbotcalvin</h4>
                      </div>
                      <span className="frontTintP"></span>
                    </div>
                  <div className="clientStats">
                    <div>
                      <h4>Social Reach</h4>
                      <p>2,000,000 +</p>
                    </div>
                    <ion-icon name="contacts"></ion-icon>
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
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}>
          <hr/>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}>
          <section id="section3">
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>What do you do?</h2>
                <h4>See some of our <strong>strengths</strong> below</h4>
              </div>
              <div className="singleSectionContainer">
                <p className="pRender">Render is a professional online video production studio, comprised of the industries most valued and experienced video editors, content managers and graphic designers. We primarily work with established Twitch streamers and esports organisations on their YouTube channels. We offer professional video editing, consistently planned uploads, a guaranteed increase in ad-revenue and most of all, entertaining content that makes fans come back time and time again.</p>
                <div className="quadFeatures">
                  <div>
                    <ion-icon name="videocam"></ion-icon>
                    <h4>Video Production</h4>
                    <p>We provide professional video editing of stream highlights, sponsored content, montages and more. Each video is guaranteed to be full to the brim with memes to keep your audience PogChamping.</p>
                  </div>
                  <div>
                    <ion-icon name="images"></ion-icon>
                    <h4>Thumbnail Design</h4>
                    <p>We have dedicated designers in Render that have experience making hundreds of thumbnails. We guarantee your video will be very enticing to click on, which will give you more views and increase the channel revenue.</p>
                  </div>
                  <div>
                    <ion-icon name="cloud-upload"></ion-icon>
                    <h4>Upload Scheduling</h4>
                    <p>All of the channels we work on have a scheduled upload system at least a day in advance, so we're always ahead of the work. This means no last minute panicking to upload a video and your video always goes live on time.</p>
                  </div>
                  <div>
                    <ion-icon name="trending-up"></ion-icon>
                    <h4>Increased Revenue</h4>
                    <p>Longer videos, frequent uploads and strategically placed ads are only 3 of the ways we will help your channel revenue grow. Our team have years of experience and know the YouTube algorithm inside out.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr/>
          <section id="sectionPartner">
              <div className="partnersUnderVid">
              <div className="sectionHeaderHome">
                <h2>Partners</h2>
                <h4>We love our partners</h4>
              </div>
                <div className="partnerRibbon">
                  <a className="commonPartnersBlock steelSeriesBlock"><img src={steelSeries}/><span className="partnersOverlay"></span></a>
                  <a className="commonPartnersBlock wantToBecome">
                    <h4>Become a partner</h4>
                    <ion-icon name="rocket"></ion-icon>
                    {/* <p>Get in touch</p> */}
                  </a>
                  {/* <a><ion-icon name="logo-foursquare"></ion-icon></a>
                  <a><ion-icon name="logo-github"></ion-icon></a>
                  <a><ion-icon name="logo-steam"></ion-icon></a>
                  <a><ion-icon name="logo-vimeo"></ion-icon></a>
                  <a><ion-icon name="logo-slack"></ion-icon></a> */}
                </div>
              </div>
          </section>
          <hr/>
          <section>
            <div className="testimonialsContainer">
              <div className="sectionHeaderHome">
                <h2>Testimonials</h2>
                <h4>See what people are saying about us</h4>
              </div>
              <TestiSlider/>
            </div>
          </section>
          </ScrollAnimation>
          {/* <ScrollAnimation animateIn="fadeIn" offset={0} animateOnce={true}>
          <section id="section4">
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>Partners</h2>
                <h4>Check out some of our <strong>partnerships</strong> below</h4>
              </div>
              <div className="singleSectionContainer">
                <div className="partnerRibbon">
                  <a><ion-icon name="logo-twitch"></ion-icon></a>
                  <a><ion-icon name="logo-foursquare"></ion-icon></a>
                  <a><ion-icon name="logo-github"></ion-icon></a>
                  <a><ion-icon name="logo-steam"></ion-icon></a>
                  <a><ion-icon name="logo-vimeo"></ion-icon></a>
                  <a><ion-icon name="logo-slack"></ion-icon></a>
                </div>
              </div>
            </div>
          </section>
          </ScrollAnimation> */}
      </div>
    );
  }
};


class TestiSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={exp}/>
          <h3>“ If there's one thing I've learnt from my first month in @RenderGG, it's how important it is to look at what you're editing from a viewers point of view, not yours. The outcome of the video will be leaps and bounds better if you do that. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ If there's one thing I've learnt from my first month in @RenderGG, it's how important it is to look at what you're editing from a viewers point of view, not yours. The outcome of the video will be leaps and bounds better if you do that. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ If there's one thing I've learnt from my first month in @RenderGG, it's how important it is to look at what you're editing from a viewers point of view, not yours. The outcome of the video will be leaps and bounds better if you do that. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ If there's one thing I've learnt from my first month in @RenderGG, it's how important it is to look at what you're editing from a viewers point of view, not yours. The outcome of the video will be leaps and bounds better if you do that. ” </h3>
        </div>
        <div>
          <img src={exp}/>
          <h3>“ If there's one thing I've learnt from my first month in @RenderGG, it's how important it is to look at what you're editing from a viewers point of view, not yours. The outcome of the video will be leaps and bounds better if you do that. ” </h3>
        </div>
      </Slider>
    );
  }
}