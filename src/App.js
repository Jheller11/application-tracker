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
      items: [],
      unsavedChanges: false
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.loadItems = this.loadItems.bind(this)
    this.changeAppliedStatus = this.changeAppliedStatus.bind(this)
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

  // delete a single item by index (add an actual id?)
  deleteItem(e) {
    let key = parseInt(e.target.id)
    let items = this.state.items.filter((item, i) => i !== key)
    this.setState({
      items: items
    })
  }

  // put state into local storage - replace if exists
  saveChanges(e) {
    e.preventDefault()
    localStorage.setItem('jobs', JSON.stringify(this.state.items))
  }

  // pull data from local storage and insert into state
  loadItems(e) {
    e.preventDefault()
    let string = localStorage.getItem('jobs')
    this.setState({
      items: JSON.parse(string)
    })
  }

  // add method for change applied status
  changeAppliedStatus(e) {
    let key = parseInt(e.target.id)
    let items = this.state.items
    items[key].applied = !items[key].applied
    this.setState({
      items: items
    })
  }

  // add method for change interview status

  // add method for change rejected status

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Brand href="/">Tracker</Navbar.Brand>
          <Nav>
            <IndexLinkContainer to="/">
              <Nav.Link>All</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer to="/new">
              <Nav.Link>New +</Nav.Link>
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
              render={props => (
                <Index
                  items={this.state.items}
                  saveChanges={this.saveChanges}
                  loadItems={this.loadItems}
                  deleteItem={this.deleteItem}
                  changeAppliedStatus={this.changeAppliedStatus}
                  {...props}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
