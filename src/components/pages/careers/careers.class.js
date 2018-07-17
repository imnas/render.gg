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
                    <h2>Current Vacancies</h2>
                    <h4>Render is always looking for <strong>talented</strong> people to join our growing team</h4>
                </div>
                <div className="careersBlockContainer">
                    <div>
                        <h3>Video Editor</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Full-time</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/editor">Go to listing</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Graphics Designer</h3>
                        <p>Ontario, Canada, Canada</p>
                        <div className="tagsContainer">
                            <span>Full-time</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/graphics">Go to listing</NavLink>
                        </div>
                    </div>
                    <div>
                        <h3>Content Manager</h3>
                        <p>London, England, United Kingdom</p>
                        <div className="tagsContainer">
                            <span>Full-time</span>
                        </div>
                        <div className="ctaContainerJob">
                            <NavLink to="/job/content">Go to listing</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
};
