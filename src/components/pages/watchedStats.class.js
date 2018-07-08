import React, { Component } from 'react';
import CountUp from 'react-countup';
import { Watch } from 'scrollmonitor-react';

export default Watch(class StatsWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countup1 : <CountUp redraw={false} start={0} end={62} />,
      countup2: <CountUp className="account-balance" start={0} end={9.7} decimals={1} suffix={"M"} />,
      countup3: <CountUp start={0} end={15} />
    };
  }
  componentDidMount() {

  }
  componentDidUpdate() {
      if (this.props.isBelowViewport == true) {
        this.state.countup1 = <CountUp redraw={false} start={0} end={63} useEasing={true} />;
        this.state.countup2 = <CountUp className="account-balance" start={0} end={9.8} useEasing={true} decimals={1} suffix={"M"} />;
        this.state.countup3 = <CountUp start={0} end={16} useEasing={true} />;
    } 
  }
  render() {
    return (
      <section id="section1">
        <div className="sectionSubContainer">
          <div className="sectionHeaderHome">
            <h2>Who are we?</h2>
            <h4>We’re <strong>Render</strong>. A premium YouTube video production service for the gaming world</h4>
          </div>
          <div className="singleSectionContainer">
              <div className="trippleStatsContainer">
                <div>
                  <h2>{this.state.countup1}</h2>
                  <p>MONTHLY VIDEOS</p>
                </div>
                <div>
                  <h2>{this.state.countup2}</h2>
                  <p>MONTHLY VIEWS</p>
                </div>
                <div>
                  <h2>{this.state.countup3}</h2>
                  <p>TALENTED EDITORS</p>
                </div>
              </div>

          </div>
        </div>
      </section>
    );
  }
});
