import React from 'react'
import Button from 'react-bootstrap/Button'

const InterviewButton = props => {
  return (
    <Button
      variant={props.interviewing ? 'info' : 'outline-info'}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.interviewing ? 'Interviewing' : 'Interview?'}
    </Button>
  )
}

export default InterviewButton
