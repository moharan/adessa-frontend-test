import React, { Component } from 'react';
//data
import catalogData from '../../../data/mock.json'
console.log('working', catalogData.catalog[0].name);
//import './App.css';
//react-bootstrap Component
import { Grid, Row, Col, Button } from 'react-bootstrap'

const elementCol = {
  borderRadius: 5,
  paddingTop: 30,
  width: 150,
  height: 150,
  textAlign: 'center',
  backgroundColor: '#666666',
}
const elementButton = {
  marginTop: 10,
}
const backgroundGrid = {
  backgroundColor: 'silver',
  padding: 10,
}
const contentDiv = {
  textAlign: 'center',
  fontSize: 10,
  marginTop: 5,
}
const cartList = {
  backgroundColor: 'white',
  textAlign: 'center',
}

class App extends Component {
    render() {
    
    return (
      <Grid>
          {/*Select Product*/}
          <Row style={cartList}>
          ...
          </Row>
          {/*Catalog*/}
          <Row style={backgroundGrid}>
            <Col xs={10} md={10} xsOffset={1} mdOffset={1}>
              <Col xs={3} md={3}>
                <div style={elementCol}>Content</div>
                <div style={contentDiv}>Product</div>
                <div style={contentDiv}>$$$</div>
                <Button style={elementButton} block>Add</Button>
              </Col>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
