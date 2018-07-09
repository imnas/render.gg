import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Redirect } from 'react-router-dom';

export default class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    const pageName = "Careers";
    const pageDescription = "We are Render, a premium YouTube video production service for the gaming&amp;nbsp;world. ​ We specialize in video editing, motion graphics and channel branding.";

    return (
      <div className="commonPageMain">
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
            <meta property="og:url" content={`https://render.gg/${pageName}`} />
        </Helmet>


        <div className="careersPage">
            <section>
                <div className="sectionHeaderHome">
                    <h2>Our Team</h2>
                    <h4>Render is always looking for <strong>talented</strong> people to join our growing team</h4>
                </div>
                <div className="teamBlockContainer">
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_ced16fac671548619215cb005a1922f3~mv2.png/v1/crop/x_258,y_80,w_596,h_742/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_ced16fac671548619215cb005a1922f3~mv2.png"/>
                        <h3>BEN "SECTOR" WATSON</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>CEO</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/editor">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_85d43a33165c4bee929f9f8d880e37de~mv2.png/v1/crop/x_0,y_106,w_720,h_894/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_85d43a33165c4bee929f9f8d880e37de~mv2.png"/>
                        <h3>OSCAR "VULTAR" GRACIE</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/editor">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_66cfaaea65dc4a28a71fec9656ed0910~mv2.jpg/v1/crop/x_0,y_0,w_435,h_540/fill/w_231,h_287,al_c,q_80,usm_0.66_1.00_0.01/646904_66cfaaea65dc4a28a71fec9656ed0910~mv2.webp"/>
                        <h3>FLORIS "FROSTURNE" VAN DER HEIDE</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/editor">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_1d46caba5ff24243a5dcab51c1252274~mv2.png/v1/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_1d46caba5ff24243a5dcab51c1252274~mv2.png"/>
                        <h3>ZANE "VOIDGIMMICK" TILLEY</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/editor">View Profile</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
};
