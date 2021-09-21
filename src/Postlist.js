import React from 'react'
import {Table,Button,Pagination} from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';


import Typography from '@mui/material/Typography';

import {FaFlagUsa} from "react-icons/fa";


function Postlist() {
  return (
    
  
    <div>
     <Typography variant="h6" gutterBottom component="div">
Courses
      </Typography>
        <Button style={{marginLeft:"75%",width:'8%'}}>Export</Button>
        <Button style={{marginLeft:"85%",marginTop:'-5.3%',width:'8%'}}>Invite</Button>
        <br></br><br></br>
      <Table  striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      
      <th>Email-Id</th>
      <th>Country</th>
      <th>Registration Date</th>
      <th>Attendend</th>
    </tr>
  </thead>
  
    <tr>

      <td> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></td>
      <td>maxric@gmail.com</td>
      <td>
                <FaFlagUsa size="20px" color="black" /> </td>
                <td>26/02/2021</td>
                <td>3/3</td>
    </tr>
    <tr>

      <td> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></td>
      <td>maxric@gmail.com</td>
      <td>
                <FaFlagUsa size="20px" color="black" /> </td>
                <td>26/02/2021</td>
                <td>3/3</td>
    </tr>
    <tr>

      <td> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></td>
      <td>maxric@gmail.com</td>
      <td>
                <FaFlagUsa size="20px" color="black" /> </td>
                <td>26/02/2021</td>
                <td>3/3</td>
    </tr>
    <tr>

<td> <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></td>
<td>maxric@gmail.com</td>
<td>
          <FaFlagUsa size="20px" color="black" /> </td>
          <td>26/02/2021</td>
          <td>3/3</td>
</tr>
  
</Table>
<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />
  </Pagination>
    </div>
  )
}

export default Postlist;