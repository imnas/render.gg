import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export default class IndividualCareerManager extends Component {
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
                            <li>Carry out set tasks and goals on a day by day basis and help maintain the team with helping where needed.</li>
                            <li>Keep in close contact with our editors and designers ensuring work is completed at the agreed time and iron out any problems that may come your way.</li>
                            <li>Collaborate with our clients to discuss monthly growth targets and come up with ideas on how to ensure healthy and consistent increase in viewership.</li>
                            <li>Work with and learn from some of the best editors in the industry.</li>
                            <li>Stay current with the latest trends to make sure we are one step ahead of the competition.</li>
                        </ul>
                    </section>
                    <section>
                        <h4>You are</h4>
                        <ul>
                            <li><span>A YouTube Veteran</span> you have experience managing Youtube channels and have a clear understanding on how the audience thinks, what they want and how to maintain a successful brand.</li>
                            <li><span>Initiative is key</span> managing people and working independently is second nature to you. There is always tasks to be done so going the extra mile is key!</li>
                            <li><span>Experienced</span> you have multiple years designing for clients, you can use all relevant software applications to be as efficient as possible with your work.</li>
                            <li><span>Expert problem solver</span> naking sure our editors and designers are on time with delivery of work and expert initiative to tackle problems head on.</li>
                            <li><span>Meme Spotter</span> you can spot a meme a mile away! You are active with all social medias and understand what makes people click.</li>
                        </ul>
                    </section>
                    <section>
                        <h4>Perks</h4>
                        <ul>
                            <li>Work with high profile sponsors and receive free goodies as a bonus!</li>
                            <li>Flexible hours that meet your needs and clear time management scheduling set up personal to you.</li>
                            <li>Gain experience dealing with a variety of contacts from a wide range of online video content.</li>
                            <li>Set monthly goals with employee salary bonuses accessible through consistently achieving targets.</li>
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
