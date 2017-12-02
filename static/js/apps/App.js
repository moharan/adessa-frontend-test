import React, { Component } from 'react';
//data
import catalogData from '../../../data/mock.json'
//console.log('working', catalogData.catalog[0].name);
//import './App.css';
//react-bootstrap Component
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'

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
  paddingTop: 10,
}

class App extends Component {

    // Call mock.json
    constructor(props) {
      super(props)
        this.state = {
          catalogList: catalogData.catalog,
        }
      }

    render() {
    
    return (
      <Grid>
          {/*Select Product*/}
          <Row style={cartList}>
          ...
          </Row>
          {/*Product List*/}        
            <Row style={backgroundGrid}>
              <Col xs={10} xsOffset={1}>
                {this.state.catalogList.map((item, index) => {
                  return (
                    <Col key={index} xs={3} style={cartList}>
                      <div>
                        <Image src={item.imageURL} responsive/>
                        <div style={contentDiv}>{item.name}</div>
                        <div style={contentDiv}>{('$ ' + item.price)}</div>              
                        <Button style={elementButton} block>Add</Button>
                      </div>                      
                    </Col>
                  );
                })}                                                       
              </Col>
            </Row>
      </Grid>
    );
  }
}

export default App;
