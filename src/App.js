import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import New from './views/New'
import Index from './views/Index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { IndexLinkContainer } from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Alert from 'react-bootstrap/Alert'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      unsavedChanges: false
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.loadItems = this.loadItems.bind(this)
  }

  addItem(data) {
    let items = this.state.items
    data.created = Date.now()
    data.applied = false
    data.interview = false
    data.rejected = false
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

  saveChanges(e) {
    e.preventDefault()
    localStorage.setItem('jobs', JSON.stringify(this.state.items))
  }

  loadItems(e) {
    e.preventDefault()
    let string = localStorage.getItem('jobs')
    this.setState({
      items: JSON.parse(string)
    })
  }

  // add method for change applied status

  // add method for change interview status

  // add method for change rejected status

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
        <Nav className="justify-content-center">
          <ButtonGroup size="sm">
            <Button variant="success" onClick={this.saveChanges}>
              Save Changes
            </Button>
            <Button variant="dark" onClick={this.loadItems}>
              Load Jobs
            </Button>
          </ButtonGroup>
        </Nav>
        <main>
          <Alert dismissible className="mt-3 small" variant="warning">
            Remember to click 'Save Changes' before exiting.
          </Alert>
          {this.state.items.length === 0 ? (
            <Alert className="mt-3 small" variant="info">
              If you have used the application before click 'Load Jobs' to load
              previously saved items.
            </Alert>
          ) : null}
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
