import React from 'react'
import classes from "./StoreListPage.module.css"
import Headline from '../../elements/Headline/Headline'
import { Container, Row, Col } from 'react-bootstrap'
import Media from 'react-media';
import mapIcon from "../../images/map-pin-bold.png"
import { stores } from '../../StoreInformation';
import ProductMessageBanner from '../../elements/ProductMessageBanner/ProductMessageBanner';


const StoreListPage = () => {
  

 var sortedStores = stores.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
});

  const mappedStores= sortedStores.map( (store) => {    
       
    return (

       
      <Media queries={{ small: { maxWidth: 599 } }}>
      {matches =>
        matches.small ? (
          <Row className={classes.itemContainer}>
              <Col xs={6}>
                <div className={classes.storeName}>{store.name}</div>
                <div className={classes.address}>{store.address}</div>
              </Col> 
              <Col xs={6}><div><a href={store.url} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
          </Row>
        ) : (   
          <Row className={classes.itemContainer}>
              <Col xs={4}><div className={classes.storeName}>{store.name}</div></Col>
              <Col xs={6}><div className={classes.address}>{store.address}</div></Col> 
              <Col xs={2}><div><a href={store.url} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
          </Row> 
        )
      }
    </Media>
        
      
        
    )}) 
  return (

   
        <Container className={classes.container}>
    <Row className={classes.row}><ProductMessageBanner text="FIND PIKO IN A STORE NEAR YOU"></ProductMessageBanner></Row>


    <div className={classes.message}>Piko is a proud partner with many local grocery stores in the Tay Ho and Truc Bach area. We are also a familar face at many local markets and community events in Hanoi.</div>

    <div className={classes.list}>
      {mappedStores}
    </div>
    <Row className={classes.rowBlue}>
      <div className={classes.contactMessage}>Interested in carrying Piko products at your Hanoi store? Please reach out!</div>
      <div className={classes.zalo}>Zalo: <span>+0824675798</span></div>
    </Row>
    </Container>
    
  )
}

export default StoreListPage;
