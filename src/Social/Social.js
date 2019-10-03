import React, { Component } from 'react'
import email from '../images/email.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import linkedIn from '../images/linkedIn.png'

export default class Social extends Component {
  render() {
    return (
      <div className='sidebar' id='js-sidebar'>
        <a
          href='https://github.com/mblakley4'
          target='_blank'
          rel="noopener noreferrer"
        >
          <img
            className='side-icon'
            src={github}
            alt='github logo'
          />
        </a>

        <a
          href='https://linkedin.com/in/mblakley'
          target='_blank'
          rel="noopener noreferrer"
        >
          <img
            className='side-icon'
            src={linkedIn}
            alt='linked in logo'
          />
        </a>
        <a
          href='https://twitter.com/mblakley4'
          target='_blank'
          rel="noopener noreferrer"
        >
          <img
            className='side-icon'
            src={twitter}
            alt='twitter logo'
          />
        </a>
        <a
          href='mailto:m.blakley@icloud.com'
          target='_blank'
          rel="noopener noreferrer"
        >
          <img
            className='side-icon'
            src={email}
            alt="email icon"
          />
        </a>
      </div>
    );
  }
}
