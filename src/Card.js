import React from 'react'
import {Row,Container,Col,Button,Card} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import { BsExclamationTriangleFill} from "react-icons/bs";
import Typography from '@mui/material/Typography';

  

import {FaFlagUsa} from "react-icons/fa";

function App() {
  return (
    <div>
    <Typography variant="h6" gutterBottom component="div">
Session
      </Typography>
    
    <br></br>
    <Button style={{marginLeft:"95%",width:'9%',marginTop:'-4%'}}>Share</Button>
        <Button style={{marginLeft:"85%",marginTop:'-8%',width:'9%'}}>+Add </Button>
   <Container> 
   <Card>
   <Card.Body>
  <Row xs={2} md={4} lg={6}>
    <Col>Conflict <Button style={{width:'54%',marginLeft:'40%',marginTop:'-14%'}} variant="danger">Live</Button> </Col>
    <Col>Registration : 50</Col>
    <Col>Attendend : 30</Col>
    <Col>4 Hrs Ago</Col>
    <Col><BsExclamationTriangleFill size="22px" color="yellow"/></Col>
  </Row>
  </Card.Body>
  </Card>
  <Card>
   <Card.Body>
  <Row xs={2} md={4} lg={6}>
    <Col>Conflict <Button style={{width:'65%',marginLeft:'36%',marginTop:'-14%'}} variant="primary">Upcoming</Button> </Col>
    <Col>Registration : 50</Col>
    <Col>Attendend : 30</Col>
    <Col>4 Hrs Ago</Col>
   
  </Row>
  </Card.Body>
  </Card>
  <Card>
   <Card.Body>
  <Row xs={2} md={4} lg={6}>
    <Col>Conflict  <Button style={{width:'55%',marginLeft:'39%',marginTop:'-14%'}} variant="success">Success</Button>{' '} </Col>
    <Col>Registration : 50</Col>
    <Col>Attendend : 30</Col>
    <Col>4 Hrs Ago</Col>

  </Row>
  </Card.Body>
  </Card>
  </Container>
  
</div>
 
  )
}

export default App