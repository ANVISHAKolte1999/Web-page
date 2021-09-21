import React from 'react'
import {Row,Col,Container,Card,Form,Dropdown} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function session() {
    return (
        <div>
        <Typography variant="h6" gutterBottom component="div">
Services
      </Typography>
        <Container>
              <Row>
    <Col>
    <Card style={{ width: '22rem' }}>
  <Card.Body>
  <Typography variant="h6" gutterBottom component="div">
        .Main Menu
      </Typography>
<br></br>
<Typography variant="h6" gutterBottom component="div">
Genereal
      </Typography>
      <br></br><br></br>
      <Typography variant="h6" gutterBottom component="div">
Optional Setting
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
Registration
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
Email
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
Payements
      </Typography>
     </Card.Body> </Card>
  </Col>
    <Col><Card style={{ width: '45rem' }}>
  <Card.Body>
  
  <Typography variant="h6" gutterBottom component="div">
Course
      </Typography>
      <Container>
      <Col xs={6} md={4}>
      
    <Form.Control type="email" placeholder="type of name here" />
    </Col>
    <Col xs={6} md={4}>
      
    <Form.Control style={{marginLeft:'115%',marginTop:'-18%'}} type="email" placeholder="Description(optional)" />
    </Col>
    <br></br><br></br>
    <Typography variant="h6" gutterBottom component="div">
Pre-Placement
      </Typography>
     
      <Col xs={6} md={4}>
      
    <Form.Control type="email" placeholder="type of name here" />
    </Col>
    
    <Col xs={6} md={4}>
      
    <Form.Control style={{marginLeft:'115%',marginTop:'-18%'}} type="email" placeholder="Description(optional)" />
    </Col>
  </Container>
  <br></br>
  <Row>
    
    <Col xs={{ order: 'first' }}> <Typography variant="h6" gutterBottom component="div">
Certificate
      </Typography></Col>
  </Row>
  <Row xs={2} md={4} lg={6}>
    <Col><FormControlLabel control={<Checkbox defaultChecked />} label="Yes" /></Col>
    <Col><FormControlLabel control={<Checkbox defaultChecked />} label="No" /></Col>
    <Col>  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown></Col>
  </Row>
      
     
   

  </Card.Body></Card></Col> 
    <Col>.</Col>
  </Row>
</Container></div>
       
    )
}

export default session
