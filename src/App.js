import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import New from './views/New'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Application Tracker</h1>
        <nav>
          <Link to="/">Index</Link>
          <Link to="/new">New</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/new" render={props => <New {...props} />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
