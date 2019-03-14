import React from 'react'
import Button from 'react-bootstrap/Button'

const AppliedButton = props => {
  return (
    <Button
      variant={props.applied ? 'primary' : 'outline-primary'}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.applied ? 'Applied' : 'Apply?'}
    </Button>
  )
}

export default AppliedButton
