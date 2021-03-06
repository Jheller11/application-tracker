import React from 'react'
import Button from 'react-bootstrap/Button'

const RejectedButton = props => {
  return (
    <Button
      variant={props.rejected ? 'dark' : 'outline-dark'}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.rejected ? 'Rejected' : 'Rejection?'}
    </Button>
  )
}

export default RejectedButton
