import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import New from './views/New'
import Index from './views/Index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand href="/">Tracker</Navbar.Brand>
          <Nav>
            <Link to="/">Index</Link>
            <Link to="/new">New</Link>
          </Nav>
        </Navbar>
        <main>
          <Switch>
            <Route path="/new" render={props => <New {...props} />} />
            <Route path="/" render={props => <Index {...props} />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
