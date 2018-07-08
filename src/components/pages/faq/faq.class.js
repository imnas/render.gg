import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

export default class Landing extends Component {
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
                    <h2>Help & Knowledgebase</h2>
                    <h4>Find <strong>answers</strong> to commonly asked questions here</h4>
                </div>
                <div className="faqBlockContainer">
                    <Accordion>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>How can I update my legal name?</h3>
                                <ion-icon name="arrow-dropright"></ion-icon>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Body content</p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>Managing Google Authenticator</h3>
                                <ion-icon name="arrow-dropright"></ion-icon>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Body content</p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>I can't remember my password</h3>
                                <ion-icon name="arrow-dropright"></ion-icon>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Body content</p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>How do I change my country or state?</h3>
                                <ion-icon name="arrow-dropright"></ion-icon>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Body content</p>
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h3>How do I set up 2-factor authentication?</h3>
                                <ion-icon name="arrow-dropright"></ion-icon>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>Body content</p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
      </div>
    );
  }
};
