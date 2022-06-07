import React from 'react';
import { BsGithub } from 'react-icons/bs';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <BsGithub />{" "}
      <a
        href="https://github.com/sgortz/weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code </a>{" "}by Sabrina Gortz
  </footer>
);

export default Footer;