import React from 'react'
import classes from "./StoreListPage.module.css"
import Headline from '../../elements/Headline/Headline'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const StoreListPage = () => {
  return (
    <Container className={classes.container}>
    <Row className={classes.row}><Headline text="Store Locator"></Headline></Row>
    
    <div className={classes.list}>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Thuy Thanh Mini Mart</div></Col>
            <Col xs={6}><div className={classes.address}>22 Tu Hoa, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><button className={classes.button}>Directions</button></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>An Minh Mart</div></Col>
            <Col xs={6}><div className={classes.address}>76 Tu Hoa, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><button className={classes.button}>Directions</button></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Anh Minh Mart</div></Col>
            <Col xs={6}><div className={classes.address}>66 Vu Mien, Yen Phu, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><button className={classes.button}>Directions</button></div></Col>  
        </Row>
    </div>
    </Container>
  )
}

export default StoreListPage