import React from 'react'
import classes from './ProductPage.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Headline from '../../elements/Headline/Headline';
import { Link } from 'react-router-dom'
import { items } from '../../ProductInformation';

import Media from 'react-media';




const ProductPage = (props) => {

    const mappedItems= items.map( (item) => {    
       
        return (

            <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
                <Col xs={6} className={classes.col}>
                <Link to="/product" style={{ textDecoration: 'none', color: "black" }}>
                    <Card className={classes.card} onClick={() => props.handleProductSelect(item.id)}>
                        <div className={classes.relativeContainer}>
                            <img src={item.images[0]} alt="product" className={classes.square}>
                            </img>
                        </div>
                        <div className={classes.containerProductInfo}>
                            <div className={classes.productName}>{item.mobileLineOne}<br></br>{item.mobileLineTwo}</div>
                            <div className={classes.productPrice}>{item.price}</div>
                        </div>
                    </Card>
                </Link>
                </Col>
             
            ) : (
                <Col xs={4} className={classes.col}>
                <Link to="/product" style={{ textDecoration: 'none', color: "black" }}>
                    <Card className={classes.card} onClick={() => props.handleProductSelect(item.id)}>
                        <div className={classes.relativeContainer}>
                            <img src={item.images[0]} alt="product" className={classes.square}>
                            </img>
                        </div>
                        <div className={classes.containerProductInfo}>
                            <div className={classes.productName}>{item.mobileLineOne}<br></br>{item.mobileLineTwo}</div>
                            <div className={classes.productPrice}>{item.price}</div>
                            <button className={classes.button}>Order Now</button>
                        </div>
                    </Card>
                </Link>
                </Col>
            )
          }
        </Media>
 
            
            
          
            
        )})

  return (
    <Container className={classes.container}>
        <Row className={classes.row}>
           {mappedItems}
        </Row>
    </Container>
  )
}

export default ProductPage