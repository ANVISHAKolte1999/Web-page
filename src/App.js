import React from 'react'
import Card from './Card';
import {Spinner} from 'react-bootstrap';
import './App.css';
import Postlist from './Postlist';
import Courses from './Courses';
import Session from './Session';
function App() {
  return (
    <div>
      <Card/>
      <br></br><br></br>
      <Spinner animation="grow" />
      <br></br>
      <Postlist/>
      <br></br><br></br><br></br><br></br>
      <Spinner animation="grow" />
      <br></br>
      <Courses/>
      <Spinner animation="grow" />
      <br></br>
      <br></br><br></br>
      <Session/>
    </div>
  )
}

export default App

