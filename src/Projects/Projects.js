import React, { Component } from 'react'
import cryptoInvest from '../images/cryptoInvest.jpg'
import terraApp from '../images/terra_app.png'
import beerData from '../images/beerData.png'
import gym from '../images/gym.jpg'

export default class Projects extends Component {
  render() {
    return (
      <div className='projectPage'>
        <section>
          <h3>PROJECTS</h3>
          <div className='project-container'>
            <div className='project-img'>
              <a
                href="https://cbl-app.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className='cbl-app-img'
                  src={beerData}
                  alt='The Craft Brew Locker'
                  />
              </a>
            </div>
            <div className='project-details'>
              <h4>The Craft Brew Locker</h4>
              <h4 className='hash1'>#React.js, #Node.js, #PostgreSQL, #CSS3</h4>
              <p>
                <span className='hash2'>Full Stack Web Application -</span>
                Responsive full stack web application built with a React client
                running on a Node server with PostgreSQL database management.
              </p>
              <a
                href="https://cbl-app.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <span> | </span>
              <a
                href="https://github.com/mblakley4/Craft-Brew-Locker-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client GitHub
              </a>
              <span> | </span>
              <a
                href="https://github.com/mblakley4/cbl-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server GitHub
              </a>
            </div>
          </div>

          <div className='project-container'>
            <div className='project-img'>
              <a
                href="https://terra-app.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className='terra-app-img'
                  src={terraApp}
                  alt='The Terra Project App'
                  />
              </a>
            </div>
            <div className='project-details'>
              <h4>The <em>Terra </em> App</h4>
              <h4 className='hash1'>#React.js, #Node.js, #PostgreSQL, #CSS3</h4>
              <p>
                <span className='hash2'>Full Stack Web Application -</span>
                Deployed full stack web application built on a NodeJS API. This app
                features a collection of libraries including testing with Mocha, Chai, and SuperTest.
              </p>
              <a
                href="https://terra-app.now.sh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <span> | </span>
              <a
                href="https://github.com/mblakley4/terra-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client GitHub
              </a>
              <span> | </span>
              <a
                href="https://github.com/mblakley4/terra-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server GitHub
              </a>
            </div>
          </div>

          <div className='project-container'>
            <div className='project-img'>
              <a
                href="https://mblakley4.github.io/cryptoCircadian/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className='crypto-img'
                  src={cryptoInvest}
                  alt='crypto hero'
                  />
              </a>
            </div>
            <div className='project-details'>
              <h4>Crypto Circadian</h4>
              <h4 className='hash1'>#Javascript, #jQuery, #CSS3, #HTML5</h4>
              <p>
                <span className='hash2'>Front End Web Application -</span>
                Provides daily cryptocurrency data and news on the top 10 market cap coins.
              </p>
              <a
                href="https://mblakley4.github.io/cryptoCircadian/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crypto Circadian Link
              </a>
              <span> | </span>
              <a
                href="https://github.com/mblakley4/cryptoCircadian"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className='project-container'>
            <div className='project-img'>
              <a
                href="https://mblakley4.github.io/Quiz-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className='gym-img'
                  src={gym}
                  alt='quiz app hero'
                />
              </a>
            </div>
            <div className='project-details'>
              <h4>Weight Training Knowledge Check</h4>
              <h4 className='hash1'>#Javascript, #jQuery, #CSS3, #HTML5</h4>
              <div id='resumeLink'></div>
              <p>
                <span className='hash2'>Front End Web Application -</span>
                Short Quiz Application to check out your knowledge in the weight room.
              </p>
              <a
                href="https://mblakley4.github.io/Quiz-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quiz App Link
              </a>
              <span> | </span>
              <a
                href="https://github.com/mblakley4/Quiz-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
