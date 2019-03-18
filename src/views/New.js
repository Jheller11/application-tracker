import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <Form
        style={{ width: '50%', margin: '0 auto' }}
        onSubmit={this.handleSubmit}
      >
        <Form.Group>
          <Form.Label htmlFor="title">Title:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="title"
            type="text"
            placeholder="Enter title"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="url">URL:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="url"
            type="text"
            placeholder="Enter url"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="company">Company:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="company"
            type="text"
            placeholder="Enter company"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="notes">Notes:</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            id="notes"
            type="text"
            as="textarea"
            rows="3"
            placeholder="free text"
          />
        </Form.Group>
        <ButtonGroup>
          <Button variant="primary" size="sm" type="submit">
            Create
          </Button>
          <Button variant="warning" size="sm" type="reset">
            Clear
          </Button>
        </ButtonGroup>
      </Form>
    )
  }
}

export default New
