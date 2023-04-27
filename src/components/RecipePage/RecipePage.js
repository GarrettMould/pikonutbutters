import React from 'react'
import classes from "./RecipePage.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Headline from '../../elements/Headline/Headline';

const RecipePage = () => {
  return (
    <Container className={classes.container}>
         <Row className={classes.row}><Headline text="Recipes"></Headline></Row>
        <Row className={classes.row}>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                </div>
            </Card>
            </Col>
           
        </Row>
        <Row className={classes.row}>
        <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}></div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                </div>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default RecipePage