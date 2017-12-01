import React, { Component } from 'react';
//import './App.css';
// react-bootstrap Component
import { Grid, Row, Col, Button } from 'react-bootstrap'

class App extends Component {
    render() {
    const element = {
      borderRadius: 5,
      padding: 5,
      margin: 5,
      width: 100,
      height: 100,
      backgroundColor: '#000000',
    }

    return (
      <Grid>
          <Row>
            <Col xs={10} md={10} xsOffset={2} mdOffset={2}>
              <Col xs={2} md={2}>
               <div style={element}>Contenido</div>
                <Button>Default</Button>
              </Col>
              <Col xs={2} md={2}>
              <div style={element}>Contenido</div>
                <Button>Default</Button>
              </Col>
              <Col xs={2} md={2}>
              <div style={element}>Contenido</div>
                <Button>Default</Button>
              </Col>
              <Col xs={2} md={2}>
              <div style={element}>Contenido</div>
                <Button>Default</Button>
              </Col>
              <Col xs={2} md={2}>
              <div style={element}>Contenido</div>
                <Button>Default</Button>
              </Col>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
