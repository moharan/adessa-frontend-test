import React, { Component } from 'react';
//import './App.css';
// react-bootstrap Component
import { Grid, Row, Col, Button } from 'react-bootstrap'

class App extends Component {
    render() {
    const elementCol = {
      borderRadius: 5,
      paddingTop: 30,
      width: 100,
      height: 100,
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

    return (
      <Grid>
          <Row style={backgroundGrid}>
            <Col xs={10} md={10} xsOffset={1} mdOffset={1}>
              <Col xs={2} md={2}>
                <div style={elementCol}>Content</div>
                <div style={contentDiv}>Product</div>
                <div style={contentDiv}>$$$</div>
                <Button style={elementButton} block>Add</Button>
              </Col>
              <Col xs={2} md={2}>
                <div style={elementCol}>Content</div>
                <div style={contentDiv}>Product</div>
                <div style={contentDiv}>$$$</div>
                <Button style={elementButton} block>Add</Button>
              </Col>
              <Col xs={2} md={2}>
                <div style={elementCol}>Content</div>
                <div style={contentDiv}>Product</div>
                <div style={contentDiv}>$$$</div>
                <Button style={elementButton} block>Add</Button>
              </Col>
              <Col xs={2} md={2}>
                <div style={elementCol}>Content</div>
                <div style={contentDiv}>Product</div>
                <div style={contentDiv}>$$$</div>
                <Button style={elementButton} block>Add</Button>
              </Col>
              <Col xs={2} md={2}>
                <div style={elementCol}>Content</div>
                <div style={contentDiv}>Product</div>
                <div style={contentDiv}>$$$</div>
                <Button style={elementButton} block>Add</Button>
              </Col>
              <Col xs={2} md={2}>
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
