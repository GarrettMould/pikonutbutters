import React from 'react'
import classes from './ProductPage.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Headline from '../../elements/Headline/Headline';


const ProductPage = () => {
  return (
    <Container className={classes.container}>
        <Row className={classes.row}><Headline text="Products"></Headline></Row>
        <Row className={classes.row}>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}>
                    <div className={classes.size}>220g</div>
                </div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Peanut Butter</div>
                    <div className={classes.productPrice}>60,000 vnd</div>
                    <button className={classes.button}>Add to Cart</button>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
                <Card className={classes.card}>
                    <div className={classes.square}>
                    <div className={classes.size}>380g</div>
                    </div>
                    <div className={classes.containerProductInfo}>
                        <div className={classes.productName}>All-Natural Peanut Butter</div>
                        <div className={classes.productPrice}>100,000 vnd</div>
                        <button className={classes.button}>Add to Cart</button>
                    </div>
                </Card>
            </Col>
            <Col xs={4} className={classes.col}>
                <Card className={classes.card}>
                    <div className={classes.square}>
                    <div className={classes.size}>220g</div>
                    </div>
                    <div className={classes.containerProductInfo}>
                        <div className={classes.productName}>All-Natural Almond Butter</div>
                        <div className={classes.productPrice}>125,000 vnd</div>
                        <button className={classes.button}>Add to Cart</button>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row className={classes.row}>
            <Col xs={4} className={classes.col}>
            <Card className={classes.card}>
                <div className={classes.square}>
                    <div className={classes.size}>380g</div>
                </div>
                <div className={classes.containerProductInfo}>
                    <div className={classes.productName}>All-Natural Almond Butter</div>
                    <div className={classes.productPrice}>175,000 vnd</div>
                    <button className={classes.button}>Add to Cart</button>
                </div>
            </Card>
            </Col>
            <Col xs={4} className={classes.col}>
                <Card className={classes.card}>
                    <div className={classes.square}>
                    <div className={classes.size}>220g</div>
                    </div>
                    <div className={classes.containerProductInfo}>
                        <div className={classes.productName}>Cacao Almond Butter</div>
                        <div className={classes.productPrice}>175,000 vnd</div>
                        <button className={classes.button}>Add to Cart</button>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductPage