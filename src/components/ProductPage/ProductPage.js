import React from 'react'
import classes from './ProductPage.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Headline from '../../elements/Headline/Headline';
import { Link } from 'react-router-dom'
import { items } from '../../ProductInformation';



const ProductPage = (props) => {

    const mappedItems= items.map( (item) => {    
       
        return (
            <Col xs={4} className={classes.col}>
            <Link to="/product" style={{ textDecoration: 'none', color: "black" }}>
                <Card className={classes.card} onClick={() => props.handleProductSelect(item.id)}>
                    <div className={classes.square}>
                        <div className={classes.size}>{item.size}</div>
                    </div>
                    <div className={classes.containerProductInfo}>
                        <div className={classes.productName}>{item.name}</div>
                        <div className={classes.productPrice}>{item.price}</div>
                    </div>
                </Card>
            </Link>
            </Col>
            
          
            
        )})

  return (
    <Container className={classes.container}>
        <Row className={classes.row}><Headline text="Products"></Headline></Row>
        <Row className={classes.row}>
           {mappedItems}
        </Row>
    </Container>
  )
}

export default ProductPage