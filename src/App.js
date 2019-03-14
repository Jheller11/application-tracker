import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.save = this.save.bind(this)
    this.pull = this.pull.bind(this)
  }

  handleInput(e) {
    this.setState({
      newValue: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let items = this.state.items
    items.push(this.state.newValue)
    this.setState({
      items: items,
      newValue: ''
    })
  }

  save(e) {
    e.preventDefault()
    localStorage.setItem('jobs', JSON.stringify(this.state.items))
  }

  pull(e) {
    e.preventDefault()
    const jobs = localStorage.getItem('jobs')
    if (jobs) {
      this.setState({ items: JSON.parse(jobs) })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Application Tracker</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} />
          <button type="submit">+</button>
        </form>
        {this.state.items.map(item => (
          <div key={item}>{item}</div>
        ))}
        <form onSubmit={this.save}>
          <button type="submit">Save to Storage</button>
        </form>
        <form onSubmit={this.pull}>
          <button type="submit">Pull from Storage</button>
        </form>
      </div>
    )
  }
}

export default App
