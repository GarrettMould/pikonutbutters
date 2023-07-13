import React from 'react'
import classes from "./SocialConnectBanner.module.css"
import { Container, Row, Col, Card } from 'react-bootstrap'
import ProductMessageBanner from '../../elements/ProductMessageBanner/ProductMessageBanner'

const SocialConnectBanner = () => {
  return (
    <div className={classes.container}>
      <ProductMessageBanner text="CONNECT WITH PIKO"></ProductMessageBanner>
        <div className={classes.message}>Find new recipes, product information, and more <br></br>on Instagram <span>@piko.butter</span></div>
        <Container>
          <Row className={classes.row}>
          <Col xs={3} className={classes.col}>
                <div className={classes.square}></div>
            </Col>
            <Col xs={3} className={classes.col}>
                <div className={classes.square}></div>           
            </Col>
            <Col xs={3} className={classes.col}>          
                <div className={classes.square}></div>        
            </Col>
            <Col xs={3} className={classes.col}>           
                <div className={classes.square}></div>           
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default SocialConnectBanner