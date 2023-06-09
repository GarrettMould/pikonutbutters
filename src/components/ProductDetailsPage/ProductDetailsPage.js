import React from 'react'
import classes from "./ProductDetailsPage.module.css"
import { Container, Row, Col, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import AccordionMenu from '../../elements/AccordionMenu/AccordionMenu';
import { items } from '../../ProductInformation';
import Media from 'react-media';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ProductDetailsPage = (props) => {

  const ImageSlider = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      touchMove: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src={selectedItemInfo.images[0]} alt="product" className={classes.square}></img>
        </div>
        {selectedItemInfo.images[1] ? <div>
          <img src={selectedItemInfo.images[1]} alt="product" className={classes.square}></img>
        </div> : null}
        {selectedItemInfo.images[2] ? <div>
          <img src={selectedItemInfo.images[2]} alt="product" className={classes.square}></img>
        </div> : null}
      </Slider>
    );
  };
  


  var selectedItemInfo = items[props.selectedProduct]; 

  console.log(selectedItemInfo)
  
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <Container className={classes.container}>
      <Row>
        <Col xs={12}><ImageSlider></ImageSlider></Col>
      </Row>
      <Row>
        <Col xs={12} className={classes.infoCol}>
          <div className={classes.infoContainer}>
          <div className={classes.productTitle}>{selectedItemInfo.name} ({selectedItemInfo.size})</div>
          <div className={classes.productPrice}>{selectedItemInfo.price}</div>
          <div className={classes.productDescription}>{selectedItemInfo.description}</div>
          <div className={classes.ingredients}>Ingredients: <span> {selectedItemInfo.ingredients}</span></div>
          <Button className={classes.button} href="https://shopee.vn/piko.nutbutters" target="_blank" rel='noreferrer'>ORDER ON SHOPEE</Button>
          <AccordionMenu selectedProduct={props.selectedProduct}></AccordionMenu>
         </div>
        </Col>
      </Row>
    </Container>
      ) : (
        <Container className={classes.container}>
      <Row>
        <Col xs={6}><ImageSlider></ImageSlider></Col>
        <Col xs={6} className={classes.infoCol}>
          <div className={classes.infoContainer}>
          <div className={classes.productTitle}>{selectedItemInfo.name}</div>
          <div className={classes.productSize}>{selectedItemInfo.size}</div>
          <div className={classes.productPrice}>{selectedItemInfo.price}</div>
          <div className={classes.productDescription}>{selectedItemInfo.description}</div>
          <div className={classes.ingredients}>Ingredients: <span> {selectedItemInfo.ingredients}</span></div>
            <Button className={classes.button} href="https://shopee.vn/piko.nutbutters" target="_blank" rel='noreferrer'>ORDER ON SHOPEE</Button>
                <AccordionMenu selectedProduct={props.selectedProduct}></AccordionMenu>
         </div>
        </Col>
      </Row>
    </Container>
      )
    }
  </Media>
    
  )
}

export default ProductDetailsPage