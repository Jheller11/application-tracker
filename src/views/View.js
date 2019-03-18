import React from 'react'
import Card from 'react-bootstrap/Card'

const View = props => {
  let job = props.items.find(item => {
    return item.id === props.match.params.id
  })
  if (!job) return <div>No job found. Please try again.</div>
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-info">{job.title}</Card.Title>
        <Card.Subtitle className="text-secondary">{job.company}</Card.Subtitle>
        <Card.Text className="text-dark">
          Notes: <br />
          {job.notes}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default View
