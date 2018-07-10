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
                            <NavLink to="/profile/ben">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_85d43a33165c4bee929f9f8d880e37de~mv2.png/v1/crop/x_0,y_106,w_720,h_894/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_85d43a33165c4bee929f9f8d880e37de~mv2.png"/>
                        <h3>OSCAR "VULTAR" GRACIE</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>COO</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/oscar">View Profile</NavLink>
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
                            <NavLink to="/profile/floris">View Profile</NavLink>
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
                            <NavLink to="/profile/zane">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_07f3c199826f48e68735dcb20671e3c1~mv2.png/v1/crop/x_0,y_86,w_667,h_829/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_07f3c199826f48e68735dcb20671e3c1~mv2.png"/>
                        <h3>JASMIN "JHINXX" CROWTHER</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/jasmin">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_6238fa3e5e2541f9af9c685e1ae475dc~mv2.jpg/v1/crop/x_102,y_120,w_816,h_1014/fill/w_231,h_287,al_c,q_80,usm_0.66_1.00_0.01/646904_6238fa3e5e2541f9af9c685e1ae475dc~mv2.webp"/>
                        <h3>GABRIEL "4OUR" MATEO</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/gabriel">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_e1b288bde9a54035baf66aa7be601aa9~mv2_d_2322_4180_s_2.jpg/v1/crop/x_0,y_151,w_2322,h_2884/fill/w_231,h_287,al_c,q_80,usm_0.66_1.00_0.01/646904_e1b288bde9a54035baf66aa7be601aa9~mv2_d_2322_4180_s_2.webp"/>
                        <h3>JOÃO "ZERO INFINITY" BASTOS</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/joao">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_6515c72526054107b1b6b87283521812~mv2_d_4310_2868_s_4_2.jpg/v1/crop/x_1380,y_0,w_2310,h_2868/fill/w_231,h_287,al_c,q_80,usm_0.66_1.00_0.01/646904_6515c72526054107b1b6b87283521812~mv2_d_4310_2868_s_4_2.webp"/>
                        <h3>ANDREA "THEDARKTONGO" GOMEZ</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/andrea">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_ea26dc39580c4399be427131dd90b08f~mv2.png/v1/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_ea26dc39580c4399be427131dd90b08f~mv2.png"/>
                        <h3>BRIAN VAN VILSTEREN</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/brian">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_3f7ce392fe4443f59a1a5c562b2840e6~mv2.png/v1/crop/x_202,y_0,w_325,h_403/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_3f7ce392fe4443f59a1a5c562b2840e6~mv2.png"/>
                        <h3>KIM "SPLIFFIAM" NILSSON</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/kim">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_63f5e1f8be4a48a7b31d63c465453327~mv2.jpg/v1/crop/x_31,y_0,w_274,h_340/fill/w_231,h_287,al_c,q_80,usm_0.66_1.00_0.01/646904_63f5e1f8be4a48a7b31d63c465453327~mv2.webp"/>
                        <h3>SHANE "CLOUD" MURPH</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/shane">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_4b6bb83a629047cd849c42e5edcad52a~mv2_d_2942_3648_s_4_2.jpg/v1/fill/w_231,h_287,al_c,lg_1,q_80,usm_0.66_1.00_0.01/646904_4b6bb83a629047cd849c42e5edcad52a~mv2_d_2942_3648_s_4_2.webp"/>
                        <h3>LEVI "NIDALEVI" RIEKWEL</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/levi">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_47050451782c43eaae5c254cb32fb048~mv2_d_3024_4032_s_4_2.jpg/v1/fill/w_231,h_287,al_c,q_80,usm_0.66_1.00_0.01/646904_47050451782c43eaae5c254cb32fb048~mv2_d_3024_4032_s_4_2.webp"/>
                        <h3>NICHOLAS "DREAMS" RICE</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/nicholas">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <img src="https://static.wixstatic.com/media/646904_47355ce9e33e4466b61209afdaf54ffa~mv2.png/v1/fill/w_231,h_287,al_c,usm_0.66_1.00_0.01/646904_47355ce9e33e4466b61209afdaf54ffa~mv2.png"/>
                        <h3>ROBERT "SKROLL" CRISTEA</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Graphic Designer</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/robert">View Profile</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
};
