import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav role='navigation'>
        <h1>{'{mw}_blakley'}</h1>
        <div className ='nav-links'>
          <Link to={'/'}>HOME</Link>
          <Link to={'/projects'}>PROJECTS</Link>
          <Link to={'/resume'}>RESUME</Link>
        </div>
      </nav>
    );
  }
}
