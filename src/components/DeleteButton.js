import React from 'react'
import Button from 'react-bootstrap/Button'

const DeleteButton = props => {
  return (
    <Button id={props.id} onClick={props.handleClick}>
      Delete
    </Button>
  )
}

export default DeleteButton
