import React, { Component } from 'react'
import config from '../config'

export default class Home extends Component {
  state = {
    APOD: '',
    explanation: '',
  }

  componentDidMount() {
    const url = config.API_URL + config.API_KEY;
    fetch(url, {
      method: 'GET'
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status)
      }
      return res;
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        APOD: res.url,
        explanation: res.explanation
      })
    }
    )
    .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <div className='homePage'>
        <h2>FULL STACK DEVELOPER</h2>
        <p>
          <span className='hash1'>#webapps </span>
          <span className='hash2'>#javascript </span>
          <span className='hash3'>#electricalengineer </span>
          <span className='hash1'>#getoutdoors </span>
          <span className='hash2'>#liftweights </span>
          <span className='hash3'>#soccerdad </span>
        </p>
        <p className='aboutText'>I became an engineer to creatively solve problems and develop solutions.
        Now I develop web applications for the same purpose.  I'm excited to get involved with a great
        team of web application developers where we can deploy great apps and I can continue to grow professionally.
        </p>

        <h3>NASA's Daily Space Image:</h3>
        <img
          src={this.state.APOD}
          className='nasa-img'
          alt='NASA daily'
        />
        <p>{this.state.explanation}</p>
      </div>
    );
  }
}
