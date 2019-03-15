import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import New from './views/New'
import Index from './views/Index'
import View from './views/View'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { IndexLinkContainer } from 'react-router-bootstrap'
import StorageBar from './components/StorageBar'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      unsavedChanges: false,
      lsSize: 0
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.loadItems = this.loadItems.bind(this)
    this.changeAppliedStatus = this.changeAppliedStatus.bind(this)
    this.changeInterviewStatus = this.changeInterviewStatus.bind(this)
    this.changeRejectionStatus = this.changeRejectionStatus.bind(this)
    this.changeOfferStatus = this.changeOfferStatus.bind(this)
    this.calculateStorage = this.calculateStorage.bind(this)
  }

  addItem(data) {
    let items = this.state.items
    data.created = Date.now()
    data.id = data.created.toString()
    data.applied = false
    data.interviewing = false
    data.rejected = false
    data.offer = false
    if (!data.notes) data.notes = ''
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
    if (e) e.preventDefault()
    let string = localStorage.getItem('jobs')
    if (!string) return null
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
  changeInterviewStatus(e) {
    let key = parseInt(e.target.id)
    let items = this.state.items
    items[key].interviewing = !items[key].interviewing
    this.setState({
      items: items
    })
  }

  // add method for change rejected status
  changeRejectionStatus(e) {
    let key = parseInt(e.target.id)
    let items = this.state.items
    items[key].rejected = !items[key].rejected
    this.setState({
      items: items
    })
  }

  // add method for change offer status
  changeOfferStatus(e) {
    let key = parseInt(e.target.id)
    let items = this.state.items
    items[key].offer = !items[key].offer
    this.setState({
      items: items
    })
  }

  calculateStorage() {
    if (!localStorage.getItem('jobs')) return 0
    let length = localStorage.getItem('jobs').length * 2
    let size = (length / 1024 / 1000).toFixed(2)
    this.setState({
      lsSize: size
    })
  }

  componentDidMount() {
    this.loadItems()
    this.calculateStorage()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          {/* brand href hack because of gh pages */}
          <Navbar.Brand href="/application-tracker">Tracker</Navbar.Brand>
          <Nav>
            <IndexLinkContainer to="/">
              <Nav.Link>All</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer to="/new">
              <Nav.Link>New +</Nav.Link>
            </IndexLinkContainer>
          </Nav>
        </Navbar>
        <StorageBar size={this.state.lsSize} />
        <main className="mt-3">
          <Switch>
            <Route
              path="/new"
              render={props => <New addItem={this.addItem} {...props} />}
            />
            <Route
              path="/view/:id"
              render={props => <View items={this.state.items} {...props} />}
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
                  changeInterviewStatus={this.changeInterviewStatus}
                  changeRejectionStatus={this.changeRejectionStatus}
                  changeOfferStatus={this.changeOfferStatus}
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
