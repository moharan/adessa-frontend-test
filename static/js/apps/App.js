import React, { Component } from 'react';
//data
import catalogData from '../../../data/mock.json'
//console.log('working', catalogData.catalog[0].name);
//import './App.css';
//react-bootstrap Component
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'
const elementButton = {
  marginTop: 10,
}
const backgroundGrid = {
  backgroundColor: 'silver',
  padding: 5,
}
const contentDiv = {
  textAlign: 'center',
  fontSize: 10,
  marginTop: 5,
}
const cartList = {
  backgroundColor: 'white',
  textAlign: 'center',
  padding: 10,
  margin: 10,
}
const cartProduct = {
  backgroundColor: 'gray',
  textAlign: 'center',
  padding: 10,
  margin: 10,
}

class App extends Component {

    //Call mock.json
    constructor(props) {
      super(props)
        this.state = {
          catalogList: catalogData.catalog,
          shopCartList : []
        }
        //removeItemFromShopCar
        this.removeItemFromShopCart = this.removeItemFromShopCart.bind(this);
        //addItemToShopCar
        this.addItemToShopCart = this.addItemToShopCart.bind(this);
      }
      removeItemFromShopCart (itemKey) {
        return () => {
          let newShopCartList = this.state.shopCartList.slice();
          newShopCartList.splice(itemKey, 1);
          console.log(newShopCartList);
            
          this.setState({
            shopCartList: newShopCartList
          })
        }
      }
      addItemToShopCart (itemKey) {
        return () => {
          let selectedItem = Object.assign({}, this.state.catalogList[itemKey]);
          let newShopCartList = this.state.shopCartList.slice();
          newShopCartList.push(selectedItem);
  
          this.setState({
            shopCartList: newShopCartList
          })       
        }      
      }

    render() {
    
    return (
      <Grid>
          {/*Select Product*/}
          <Row>
          <Col xs={10} xsOffset={1}>
            {this.state.shopCartList.map((item, index) => {
              return (
                <Col key={index} xs={2} style={cartProduct}>
                  <div>
                  <Image src={item.imageURL} responsive/>
                    <div style={contentDiv}>{item.name}</div>
                    <div style={contentDiv}>{('$ ' + item.price)}</div>              
                    <Button onClick={this.removeItemFromShopCart(index)} style={elementButton} block>Remove</Button>
                  </div>                      
                </Col>
              );
            })}                                                       
          </Col>
        </Row>
          {/*Product List*/}        
            <Row style={backgroundGrid}>
              <Col xs={12}>
                {this.state.catalogList.map((item, index) => {
                  return (
                    <Col key={index} xs={2} style={cartList}>
                      <div>
                        <Image src={item.imageURL} responsive/>
                        <div style={contentDiv}>{item.name}</div>
                        <div style={contentDiv}>{('$ ' + item.price)}</div>              
                        <Button onClick={this.addItemToShopCart(index)} style={elementButton} block>Add</Button>
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
