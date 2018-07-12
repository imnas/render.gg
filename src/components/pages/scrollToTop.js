import { Component } from 'react';

export default class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }

  render() {
    return null
  }
}
