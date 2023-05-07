import React from 'react'
import classes from "./Footer.module.css"
import { Container, Row, Col } from 'react-bootstrap'
import brand_logo from "../../images/brand_logo.svg"
import instagram from "../../images/instagram.svg"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerBox}>
            <Container>
                <Row>
                    <Col xs={3}><div className={classes.logoRow}><img src={brand_logo} alt="brand" className={classes.logo}></img><div className={classes.title}>Piko Nut Butters</div></div>
                    
                    </Col>
                    <Col xs={9} className={classes.justifyEnd}><a className={classes.instaRow} href="https://www.instagram.com/piko.butters/" target="_blank"><img src={instagram} alt="brand" className={classes.instagram}></img> <div className={classes.font}>piko.butters</div></a></Col>
                    
                </Row>
            </Container>
           
        </div>
    </div>
  )
}

export default Footer