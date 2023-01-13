// rafce command
import React from "react";
import "./about.css";
import ME from "../../assets/png2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiOutlineProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage"></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Work with Client</small>
            </article>
            <article className="about__card">
              <AiOutlineProject className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p className="about__content">
            ⚡Hello! I'm Thirosh Madhusha. I'm an 3rd Year Undergraduate Student
            at Sri Lanka Institute of Information Technology (SLIIT).
            <br />
            ⚡I'm Currently Working on my academic works and I'm Looking for an
            Internship to develop my future career path. <br />
            ⚡I'm familiar with a variety of programming languages like HTML5,
            CSS, Bootstrap, JavaScript, ReactJS, Wordpress, Python, C, C++, Java
            and Have Skill To Use Android Studio, Vscode, PhpStome, PyCharm,
            Vmware and Eclipse.
          </p>
          <a href="#contact" className="btn btn primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
