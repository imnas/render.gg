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
          <div className="curvedHeaderFlow">
            <span></span>
          </div>
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>Who are we?</h2>
                <h4>We’re <strong>Render</strong>. A premium YouTube video production service for the gaming world</h4>
              </div>
              <div className="singleSectionContainer">

              </div>
            </div>
          </section>
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h2>Who do we serve?</h2>
                <h4>Below are some of our more established <strong>clients</strong></h4>
              </div>
              <div className="singleServiceContainer">
                <a className="serviceIcon">
                  <ion-icon name="finger-print"/>
                </a>
                <h1 className="serviceTitle">Video Production</h1>
              </div>
              <div className="singleSectionContainer">

              </div>
            </div>
          </section>
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