import React from 'react'
import Button from 'react-bootstrap/Button'

const OfferButton = props => {
  return (
    <Button
      variant={props.offer ? 'success' : 'outline-success'}
      id={props.id}
      onClick={props.handleClick}
    >
      {props.offer ? 'Offer' : 'Offer?'}
    </Button>
  )
}

export default OfferButton
