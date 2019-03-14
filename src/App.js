import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import New from './views/New'
import Index from './views/Index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { IndexLinkContainer } from 'react-router-bootstrap'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(data) {
    let items = this.state.items
    data.created = Date.now()
    data.active = true
    items.push(data)
    this.setState({
      items: items
    })
  }

  deleteItem(key) {
    let items = this.state.items.filter((item, i) => i !== key)
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand href="/">Tracker</Navbar.Brand>
          <Nav>
            <IndexLinkContainer to="/">
              <Nav.Link>Index</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer to="/new">
              <Nav.Link>New</Nav.Link>
            </IndexLinkContainer>
          </Nav>
        </Navbar>
        <main>
          <Switch>
            <Route
              path="/new"
              render={props => <New addItem={this.addItem} {...props} />}
            />
            <Route
              path="/"
              render={props => <Index items={this.state.items} {...props} />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
