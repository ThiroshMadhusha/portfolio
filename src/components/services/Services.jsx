import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>Frontend Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Looking for passionate, experienced front-end developers to
                build exceptional mobile and desktop web applications. Here's
                your chance to work with me.
              </p>
            </li>
          </ui>
        </article>
        {/* End Frontend */}
        <article className="services">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Looking for Web developers who have experience and expertise to
                manage external/internal inter-system connectivity in the
                organization. Here’s your chance to work with me.
              </p>
            </li>
          </ui>
        </article>
        {/* End Web Development */}
        <article className="services">
          <div className="services__head">
            <h3>Backend Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Looking for a back-end developers who have experience and
                expertise to manage external/internal inter-system connectivity
                and drive excellence in the organization. Here is your chance to
                work with me.
              </p>
            </li>
          </ui>
        </article>

        {/* End Backend */}

        <article className="services">
          <div className="services__head">
            <h3>Fulstack Development</h3>
          </div>
          <ui className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Looking for remote full-stack developers who can design
                compelling user interactions, build & deploy comprehensive
                databases, scalability & responsiveness of applications.Here’s
                your chance to work with me.
              </p>
            </li>
          </ui>
        </article>
      </div>
    </section>
  );
}

export default Services