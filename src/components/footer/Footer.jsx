import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Thirosh Madhusha
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>

        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/thirosh-madhusha/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/ThiroshMadhusha"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub />
        </a>
        <a
          href="https://stackoverflow.com/users/16248685/thirosh-madhusha"
          target="_blank"
        >
          <BsStackOverflow />
        </a>
        <a href="https://twitter.com/ThiroshMadhusha" target="_blank">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Thirosh Madhusha. All right reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
