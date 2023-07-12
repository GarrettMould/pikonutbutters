import React from 'react'
import classes from "./RecipePage.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Headline from '../../elements/Headline/Headline';
import ProductMessageBanner from '../../elements/ProductMessageBanner/ProductMessageBanner';

const RecipePage = () => {
  return (
    <Container className={classes.container}>
         <Row className={classes.row}><ProductMessageBanner text="OUR FAVORITE RECIPES"></ProductMessageBanner></Row>
        <Row className={classes.row}>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>Peanut Butter Banana Smoothie</div>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>Coconut Almond Butter Smoothie Bowl</div>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>Peanut Butter Cookies</div>
                </div>
            </Card>
            </Col>
        </Row>
        <Row>
            <Button className={classes.button}>VIEW ALL</Button>
        </Row>
    </Container>
  )
}

export default RecipePage