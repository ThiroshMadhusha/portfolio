import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
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
        rel="noreferrer noopener"
      >
        <BsStackOverflow />
      </a>
      <a
        href="https://twitter.com/ThiroshMadhusha"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocial;
