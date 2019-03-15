import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Alert from 'react-bootstrap/Alert'
import DeleteButton from '../components/DeleteButton'
import AppliedButton from '../components/AppliedButton'
import InterviewButton from '../components/InterviewButton'
import RejectedButton from '../components/RejectedButton'
import OfferButton from '../components/OfferButton'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <Container>
        <Row>
          <Col sm={4} className="text-center">
            Title: Company
          </Col>
          <Col sm={4} className="text-center">
            Added
          </Col>
          <Col sm={4} className="text-center">
            Actions
          </Col>
        </Row>
      </Container>

      <ListGroup className="mt-3">
        {props.items.map((item, i) => {
          let date = new Date(item.created)
          return (
            <ListGroup.Item key={i}>
              <Container>
                <Row>
                  <Col sm>
                    <a className="text-center" href={item.url}>
                      {item.title}: {item.company}
                    </a>
                  </Col>
                  <Col sm>Created: {date.toDateString()}</Col>
                  <Col sm>
                    <ButtonGroup size="sm">
                      <AppliedButton
                        id={i}
                        handleClick={props.changeAppliedStatus}
                        applied={item.applied}
                      />
                      <InterviewButton
                        id={i}
                        handleClick={props.changeInterviewStatus}
                        interviewing={item.interviewing}
                      />
                      <OfferButton
                        id={i}
                        handleClick={props.changeOfferStatus}
                        offer={item.offer}
                      />
                      <RejectedButton
                        id={i}
                        handleClick={props.changeRejectionStatus}
                        rejected={item.rejected}
                      />
                      <DeleteButton id={i} handleClick={props.deleteItem} />
                    </ButtonGroup>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Index
