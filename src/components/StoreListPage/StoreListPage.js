import React from 'react'
import classes from "./StoreListPage.module.css"
import Headline from '../../elements/Headline/Headline'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const StoreListPage = () => {

  const locationThuyThanh = "https://goo.gl/maps/qhdt4bn2LFSTPywr7"
  const locationMinAnMart = "https://goo.gl/maps/BPbjZBPM4XkUMzrm7"
  const locationMinhAnhMart = "https://goo.gl/maps/RVgbwFEZ7JppkgZJ8"
  return (
    <Container className={classes.container}>
    <Row className={classes.row}><Headline text="Store Locator"></Headline></Row>

    <div className={classes.message}>Piko is a proud partner with many local grocery stores in the Tay Ho and Truc Bach area. We are also a familar face at many local markets and community events in Hanoi.</div>
    
    <div className={classes.list}>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Thuy Thanh Mini Mart</div></Col>
            <Col xs={6}><div className={classes.address}>22 Tu Hoa, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationThuyThanh} target="_blank" rel="noreferrer"><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>MinAn Mart</div></Col>
            <Col xs={6}><div className={classes.address}>76 Tu Hoa, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationMinAnMart} target="_blank" rel="noreferrer"><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Minh Anh Mart</div></Col>
            <Col xs={6}><div className={classes.address}>66 Vu Mien, Yen Phu, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationMinhAnhMart} target="_blank" rel="noreferrer"><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
    </div>
    </Container>
  )
}

export default StoreListPage