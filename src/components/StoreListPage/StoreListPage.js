import React from 'react'
import classes from "./StoreListPage.module.css"
import Headline from '../../elements/Headline/Headline'
import { Container, Row, Col } from 'react-bootstrap'
import Media from 'react-media';
import mapIcon from "../../images/map-pin-bold.png"

const StoreListPage = () => {

  const locationThuyThanh = "https://goo.gl/maps/qhdt4bn2LFSTPywr7"
  const locationMinAnMart = "https://goo.gl/maps/BPbjZBPM4XkUMzrm7"
  const locationMinhAnhMart = "https://goo.gl/maps/RVgbwFEZ7JppkgZJ8"
  const locationSedona = "https://goo.gl/maps/BBCedwans73uWfSBA"; 
  return (

    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <Container className={classes.container}>
    <Row className={classes.row}><Headline text="Store Locator"></Headline></Row>

    <div className={classes.message}>Piko is a proud partner with many local grocery stores in the Tay Ho and Truc Bach area. We are also a familar face at many local markets and community events in Hanoi.</div>
    
    <div className={classes.list}>
        <Row className={classes.itemContainer}>
            <Col xs={6}>
              <div className={classes.storeName}>Sedona Mini Mart</div>
              <div className={classes.address}>3 Tay Ho Street, Quang An, Tay Ho</div>
            </Col> 
            <Col xs={6}><div><a href={locationSedona} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={6}>
              <div className={classes.storeName}>Thuy Thanh Mini Mart</div>
              <div className={classes.address}>22 Tu Hoa, Quang An, Tay Ho</div>
            </Col> 
            <Col xs={6}><div><a href={locationThuyThanh} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={6}>
              <div className={classes.storeName}>MinAn Mart</div>
              <div className={classes.address}>76 Tu Hoa, Quang An, Tay Ho</div>
            </Col> 
            <Col xs={6}><div><a href={locationMinAnMart} target="_blank" rel="noreferrer" className={classes.link} ><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={6}>
              <div className={classes.storeName}>Minh Anh Mart</div>
              <div className={classes.address}>66 Vu Mien, Yen Phu, Tay Ho</div>
            </Col> 
            <Col xs={6}><div><a href={locationMinhAnhMart} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>      
        
    </div>
    </Container>
       
      ) : (
        <Container className={classes.container}>
    <Row className={classes.row}><Headline text="Store Locator"></Headline></Row>

    <Row><div className={classes.message}>Piko is a proud partner with many local grocery stores in the Tay Ho and Truc Bach area. We are also a familar face at many local markets and community events in Hanoi.</div></Row>
    
    <Row>
      <div className={classes.list}>
    <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Sedona Mini Mart</div></Col>
            <Col xs={6}><div className={classes.address}>3 Tay Ho Street, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationSedona} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Thuy Thanh Mini Mart</div></Col>
            <Col xs={6}><div className={classes.address}>22 Tu Hoa, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationThuyThanh} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>MinAn Mart</div></Col>
            <Col xs={6}><div className={classes.address}>76 Tu Hoa, Quang An, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationMinAnMart} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        <Row className={classes.itemContainer}>
            <Col xs={4}><div className={classes.storeName}>Minh Anh Mart</div></Col>
            <Col xs={6}><div className={classes.address}>66 Vu Mien, Yen Phu, Tay Ho, Hanoi</div></Col> 
            <Col xs={2}><div><a href={locationMinhAnhMart} target="_blank" rel="noreferrer" className={classes.link}><button className={classes.button}>Directions</button></a></div></Col>  
        </Row>
        
    </div>
    </Row>
    <Row/>
    </Container>
      )
    }
  </Media>
    
  )
}

export default StoreListPage