import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Footer2 from './footer2.class';
import Header2 from './header2.class';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="mainAppContainer">
            <Header2/>
            {this.props.children}
            <Footer2/>
      </div>
    );
  }
}

export default Container;