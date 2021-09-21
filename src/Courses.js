  
import React from 'react';
import { Row, Col, Container, Button, InputGroup, FormControl, Table, Pagination } from 'react-bootstrap';

import { BsGraphUp } from "react-icons/bs";
import { BsExclamationTriangleFill} from "react-icons/bs";
import {RiCheckboxBlankCircleFill } from "react-icons/ri";
import {AiOutlineSmallDash} from "react-icons/ai";

import {AiOutlineSearch} from "react-icons/ai";
import {RiLiveFill} from "react-icons/ri";
import {TiLocation} from "react-icons/ti";
import {AiOutlinePlusCircle} from "react-icons/ai";
import {BsPlusCircleFill} from "react-icons/bs";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';



function Courses() {
  return (
    <div className='products'>
    <Typography variant="h6" gutterBottom component="div">
Courses
      </Typography>
    
    <Button style={{marginLeft:"75%", marginTop:"-7%"}}>+ Add Course</Button>
  
    <Container>
       <Row>
    <Col></Col>
    <Col> </Col>
    <Col style={{marginLeft:"900px"}}> <Button style={{marginLeft:"15%", marginTop:"-7%"}}>Export</Button>
    <Button style={{marginLeft:"150%", marginTop:"-78%"}}>Filter</Button>
    </Col>
  
  </Row>


<br></br><br></br>
<Table striped bordered hover size="sm">
<thead>
    <tr>
      <th>Session</th>
      <th>Status</th>
      <th>Course Name</th>
      <th>Begin Date</th>
      <th>End Date</th>
      <th>Registration</th>
      <th>Trainer</th>
      <th>Certificate</th>
    </tr>
    </thead>
<br></br><br></br>
    <tr>
      <th> <BsGraphUp color="blue" /> 3 </th>
      <th><RiCheckboxBlankCircleFill color="red"/> Live</th>
      <th>Negitiation</th>
      <th>12/06/2021</th>
      <th ><AvatarGroup max={3}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  
</AvatarGroup></th>
<th></th>
      <th><BsExclamationTriangleFill size="22px" color="yellow"/></th>
      <th><AiOutlineSmallDash/></th>
    
    </tr>
    <br></br><br></br>
        <tr>
      <th>Session Name</th>
      <th>Date</th>
      <th>Time</th>
      <th>Registration</th>
      <th>Trainer</th>
      <th></th>
      <th>Location</th>
      <th></th>
    </tr>
    <tr>
      <td style={{color:'	 #66c2ff'}}>Conflicts</td>
        <td>29/05/2021</td>
      <td>9:30 to 10:30</td>
      <td>45</td><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <td> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></td>
      
     
      <td> <TiLocation color="#66c2ff" size="29px"/>Address</td>
    
      <td><th><BsExclamationTriangleFill size="22px" color="yellow"/></th></td>
    </tr>
    <tr>
      <td style={{color:'	 #66c2ff'}}>Discussion</td>
    <td>29/05/2021</td>
      <td>9:30 to 10:30</td>
      <td>45</td><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <td> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></td>
      
     
      <td> <RiLiveFill color="	 #66c2ff" size="29px"/>PlatformLink</td>
    </tr>
    <tr>

      
      <td></td>
      <td></td>
      <td></td><td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <br></br><br></br>
    <tr>
      <th> <BsGraphUp color="	 #66c2ff" /> 2 </th>
      <th><RiCheckboxBlankCircleFill color="	 #66c2ff"/> Upcoming</th>
      <th>Interaction</th>
      <th>12/06/2021</th>
      <th ><AvatarGroup max={3}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  
</AvatarGroup></th>
<th></th>
      <th><BsExclamationTriangleFill size="22px" color="yellow"/></th>
      <th><AiOutlineSmallDash/></th>
    
    </tr>
  </Table>
  </Container>
  <Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />
</Pagination>
    </div>
  );
}

export default Courses;