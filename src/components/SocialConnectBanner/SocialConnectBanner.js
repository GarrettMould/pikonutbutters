import React from 'react'
import classes from "./SocialConnectBanner.module.css"
import { Container, Row, Col, Card } from 'react-bootstrap'
import ProductMessageBanner from '../../elements/ProductMessageBanner/ProductMessageBanner'

const SocialConnectBanner = () => {
  return (
    <div className={classes.container}>
      <ProductMessageBanner text="CONNECT WITH PIKO"></ProductMessageBanner>
        <div className={classes.message}>Find new recipes, hear about our latest products, and more on Instagram <span>@piko.butter</span></div>
        <Container>
          <Row>
          <Col xs={6} className={classes.col}>
                <div className={classes.square}></div>
            </Col>
            <Col xs={6} className={classes.col}>
                <div className={classes.square}></div>           
            </Col>
            </Row>
            <Row>
            <Col xs={6} className={classes.col}>          
                <div className={classes.square}></div>        
            </Col>
            <Col xs={6} className={classes.col}>           
                <div className={classes.square}></div>           
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default SocialConnectBanner