import React from 'react'
import Button from 'react-bootstrap/Button'

const DeleteButton = props => {
  return (
    <Button variant="danger" id={props.id} onClick={props.handleClick}>
      Del
    </Button>
  )
}

export default DeleteButton
