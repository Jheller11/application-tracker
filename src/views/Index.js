import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Index = props => {
  return (
    <ListGroup className="mt-3">
      {props.items.map((item, i) => {
        let date = new Date(item.created)
        return (
          <ListGroup.Item className="d-flex justify-content-between" key={i}>
            <a href={item.url}>
              {item.title}: {item.company}
            </a>
            <span>Created: {date.toDateString()}</span>
            <ButtonGroup size="sm" />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}

export default Index
