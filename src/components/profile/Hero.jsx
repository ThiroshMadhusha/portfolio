import React from "react";
import "./style.css";
// import html from "../img/html.png";
// import css from "../img/css.png";
// import js from "../img/js.png";
// import php from "../img/php.png";
// import java from "../img/java.png";
// import python from "../img/python.png";
// import sql from "../img/sql.png";
// import react from "../img/react.png";
// import android from "../img/android.png";
import me1 from "../../img/thirosh.jpg";

import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiJava } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb";

const Hero = () => {
  return (
    <div>
      <div className="orbit">
      <div className="center-image">
        <img className="img2" src={me1} alt="" />
      </div>

      <ul>
        <li>
          <div className="imageicon1">
            <AiFillHtml5 />
          </div>
          <p>HTML</p>
        </li>
        <li>
          <div className="imageicon2">
            <FaCss3Alt />
          </div>
          <p>CSS</p>
        </li>
        <li>
          <div className="imageicon3">
            <TbBrandJavascript />
          </div>
          <p>JavaScript</p>
        </li>
        <li>
          <div className="imageicon4">
            <SiJava />
          </div>
          <p>JAVA</p>
        </li>
        <li>
          <div className="imageicon5">
            <FaReact />
          </div>
          <p>React</p>
        </li>
        <li>
          <div className="imageicon6">
            <FaPython />
          </div>
          <p>Python</p>
        </li>
        <li>
          <div className="imageicon7">
            <TbBrandBootstrap />
          </div>
          <p>Bootstrap</p>
        </li>
        <li>
          <div className="imageicon8">
            <SiMysql />
          </div>
          <p>MY SQL</p>
        </li>
      </ul>
    </div>
    </div>
    
  );
};

export default Hero;
