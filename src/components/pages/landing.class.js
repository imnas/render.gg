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
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h4>Example Section</h4>
              </div>
              <div className="singleSectionContainer">

              </div>
            </div>
          </section>
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h4>Example Section</h4>
              </div>
              <div className="singleSectionContainer">

              </div>
            </div>
          </section>
          <section>
            <div className="sectionSubContainer">
              <div className="sectionHeaderHome">
                <h4>Example Section</h4>
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