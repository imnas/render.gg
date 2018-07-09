import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default class IndividualCareer extends Component {
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
                    <NavLink to="/careers" className="goBack">Go Back</NavLink>
                    <h2>{this.props.jobTitle}</h2>
                    <h4>Render is always looking for <strong>talented</strong> people to join our growing team</h4>
                </div>
                <div className="individualJobD">
                    <section>
                        <h4>You will</h4>
                        <ul>
                            <li>Edit raw content into a captivating video that will engage and entertain the audience, then add spicy After Effects to boost a video's flavor when necessary.</li>
                            <li>Collaborate with the rest of the team to inspire video projects and achieve extraordinary results.</li>
                            <li>Be punctual and deliver on time, every time.</li>
                            <li>Work with and learn from some of the best editors in the industry.</li>
                            <li>Stay current with the latest trends and software applications to keep pace with audience expectations.</li>
                        </ul>
                    </section>
                    <section>
                        <h4>You are</h4>
                        <ul>
                            <li><span>An editing suite samurai</span> your skills with post-production tools are as sharp as a Hattori Hanzo sword, honed by your previous editing experience; you precisely slice and edit raw content to create entertaining and engaging narratives.</li>
                            <li><span>A problem assassin</span> like a double-0 agent, you bring your deadly skills and knowledge to terminate post-production problems with efficient ruthlessness.</li>
                            <li><span>Organized</span> you may be an artist, but you're able to activate your left brain to keep everything prioritized and on time.</li>
                            <li><span>A dedicated gamer</span> you live and breathe video games and are driven to craft content that connects with that audience; you effectively evaluate how different people might perceive your content to find the right angle, and steer clear of gaffes that could create difficult situations.</li>
                            <li><span>Team oriented</span> you're a flexible collaborator who makes it safe for others to provide you with feedback and different perspectives; you develop productive relationships thanks to your impeccable workplace sportsmanship and your preference for no-bullshit communication.</li>
                        </ul>
                    </section>
                    <section>
                        <h4>Perks</h4>
                        <ul>
                            <li>Access to multiple opportunities, including working with some of the biggest names on YouTube. </li>
                            <li>Be a part of an exclusive team with some of the best editors in the community.</li>
                            <li>A minimum flat payment is provided to all our editors, enjoy the security of being paid a fair price no matter how many views your video gets.</li>
                            <li>All VODs and highlights are provided by our management team, no need to watch hours and hours of a stream. We like saving time.</li>
                            <li>All our long term employees are under official contracts, enjoy the security that a contract provides in employment.</li>
                        </ul>
                    </section>
                    <div className="applyJobContainer">
                        <NavLink to="/apply">Apply</NavLink>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
};
