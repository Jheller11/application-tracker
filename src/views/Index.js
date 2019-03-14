import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import DeleteButton from '../components/DeleteButton'
import AppliedButton from '../components/AppliedButton'

const Index = props => {
  return (
    <div>
      <Nav className="justify-content-center">
        <ButtonGroup size="sm">
          <Button variant="success" onClick={props.saveChanges}>
            Save Changes
          </Button>
          <Button variant="info" onClick={props.loadItems}>
            Load Jobs
          </Button>
        </ButtonGroup>
      </Nav>
      <Alert dismissible className="mt-3 small" variant="warning">
        Remember to click 'Save Changes' before exiting.
      </Alert>
      {props.items.length === 0 ? (
        <Alert className="mt-3 small" variant="info">
          If you have used the application before click 'Load Jobs' to load
          previously saved items.
        </Alert>
      ) : null}
      <ListGroup className="mt-3">
        {props.items.map((item, i) => {
          let date = new Date(item.created)
          return (
            <ListGroup.Item className="d-flex justify-content-between" key={i}>
              <a href={item.url}>
                {item.title}: {item.company}
              </a>
              <span>Created: {date.toDateString()}</span>
              <ButtonGroup size="sm">
                <AppliedButton
                  id={i}
                  handleClick={props.changeAppliedStatus}
                  applied={item.applied}
                />
                <DeleteButton id={i} handleClick={props.deleteItem} />
              </ButtonGroup>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Index
