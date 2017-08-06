import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  componentDidMount() {
    const nav = document.querySelector('nav');
    const navTexts = document.querySelectorAll('.nav-link');
    const navLogo = document.querySelector('.brand-logo');
    const navButton = document.querySelector('.button-collapse');
    const textDarkColor = 'blue-grey-text text-darken-4';

    window.addEventListener('scroll', () => {
      const scrollPos = document.body.scrollTop;
      if (scrollPos > this.props.scrollPos) {
        nav.classList = 'center grey lighten-5';
        navButton.classList = `button-collapse ${textDarkColor}`;
        navLogo.classList = `brand-logo center ${textDarkColor}`;
        navTexts.forEach(text => {
          text.classList = `nav-link ${textDarkColor}`;
        });
      } else {
        nav.classList = 'center transparent';
        navLogo.classList = 'brand-logo center';
        navButton.classList = 'button-collapse';
        navTexts.forEach(text => {
          text.classList = 'nav-link';
        });
      }
    });
  }

  render() {
    const links = [
      <div key="links">
        <li key="about"><Link className="nav-link" to="/about">About</Link></li>
        <li key="events"><Link className="nav-link" to="/events">Events</Link></li>
        <li key="moodle"><a className="nav-link" href="https://google.co.uk">Google</a></li>
        <li key="google"><a className="nav-link" href="https://moodle.port.ac.uk">Moodle</a></li>

      </div>,
    ];
    return (
      <div className="navbar-fixed">
        <nav className="transparent">
          <div className="nav-wrapper">
            <Link to="/" className={`center brand-logo nav-text ${this.props.className}`}>The IT Society</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {links}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              {links}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;