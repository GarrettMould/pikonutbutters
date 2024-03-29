import React from 'react'
import classes from "./Footer.module.css"
import { Container, Row, Col } from 'react-bootstrap'
import brand_logo from "../../images/piko_alt.svg"
import logoNEW from '../../images/logoNEW.png'
import instagram from "../../images/instagram.svg"
import { Link } from 'react-router-dom'
import Media from 'react-media'

const Footer = () => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <div className={classes.container}>
        <div className={classes.innerBox}>
            <Container>
                <Row>
                    <Col xs={6} className={classes.justifyEnd}>
                      <Link to="/" style={{ textDecoration: 'none' }}><div className={classes.footerItem}>Products</div></Link>
                      <Link to="/stores" style={{ textDecoration: 'none' }}><div className={classes.footerItem}>Find in Stores</div></Link>
                      <a href="https://www.instagram.com/piko.butter/" target='_blank' rel='noreferrer' className={classes.footerItem}>Connect</a>
                    </Col>

                    <Col xs={6}><div className={classes.logoRow}><img src={logoNEW} alt="brand" className={classes.logo}></img></div>

                    </Col>
                    
                    
                </Row>
            </Container>
           
        </div>
    </div>
       
      ) : (
        <div className={classes.container}>
        <div className={classes.innerBox}>
            <Container>
                <Row>
                    <Col xs={6} className={classes.justifyEnd}>
                      <Link to="/" style={{ textDecoration: 'none' }}><div className={classes.footerItem}>PRODUCTS</div></Link>
                      <Link to="/stores" style={{ textDecoration: 'none' }}><div className={classes.footerItem}>FIND IN STORES</div></Link>
                      <a href="https://www.instagram.com/piko.butter/" target='_blank' rel='noreferrer' className={classes.footerItem}>CONNECT</a>
                    </Col>

                    <Col xs={6} className={classes.alignCenter}><div className={classes.logoRow}><img src={logoNEW} alt="brand" className={classes.logo}></img></div>

                    </Col>
                    
                    
                </Row>
            </Container>
           
        </div>
    </div>
      )
    }
  </Media>

   
  )
}

export default Footer