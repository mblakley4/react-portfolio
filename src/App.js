import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Social from './Social/Social'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import PageNotFound from './PageNotFound'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Social />

        <Nav />
        <main>
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/projects'} component={Projects} />
            <Route path={'/resume'} component={Resume} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
