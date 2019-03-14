import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class New extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state)
    e.target.reset()
    this.setState({
      title: '',
      url: '',
      company: ''
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="title"
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>URL:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="url"
            type="text"
            placeholder="Enter url"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Company:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            name="company"
            type="text"
            placeholder="Enter company"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit">
          Create
        </Button>
        <Button variant="outline-warning" type="reset">
          Clear
        </Button>
      </Form>
    )
  }
}

export default New
