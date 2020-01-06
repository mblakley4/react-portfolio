import React, { Component } from 'react'
import config from '../config'
import nasaApod from '../images/nasa-apod.jpg'

export default class Home extends Component {
  state = {
    APOD: '',
    explanation: '',
    loading: true
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
        explanation: res.explanation,
        loading: false,
      })
    }
    )
    .catch(error => {
      return <div>Something went wrong. Try again later</div>
    })
  }

  render() {
    const { loading } = this.state
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
        <p className='aboutText'>I became an engineer to creatively solve technical problems.
        Now I develop web applications with the same purpose.  I'm excited to get involved with a great
        team of web application developers where we can deploy great apps and I can continue to grow professionally.
        </p>

        <div className='nasa-container'>
        <h3>NASA's Daily Space Image:</h3>
        <p>An example API call to a rotating daily image & description from NASA</p>
          {loading ?
            <img
              className='nasa-apod'
              src={nasaApod}
              alt='nasa APOD'
            />
              :
            <img
              src={this.state.APOD}
              className='nasa-img'
              alt='NASA daily'
            />
          }
          <p className='APOD-description'>{this.state.explanation}</p>
        </div>
      </div>
    );
  }
}
