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

    const pageName = "Team";
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
                        <h3>Sector</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>CEO</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/sector">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Vultar</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>COO</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/vultar">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Frosturne</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/frosturne">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Bijon</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/bijon">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Skyvz</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/skyvz">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Kenosaurr</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/kenosaurr">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>StevoTevo</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/stevotevo">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Edir</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/edir">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Jhinxx</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/jhinxx">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Kevin</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/kevin">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Rockit</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/rockit">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Roemme</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/roemme">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Spliffiam</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/spliffiam">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Brian</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/brian">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Baesd</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/baesd">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Dreams</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/dreams">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Echo Motions</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/echo">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Ethan</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/ethan">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Haylox</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/haylox">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>JoshA</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/josha">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Kruzer</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/kruzer">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Levi</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/levi">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Zero Infinity</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/zero">View Profile</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Void</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Video Editor</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/profile/void">View Profile</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
};
