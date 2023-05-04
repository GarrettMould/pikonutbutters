import React from 'react'
import classes from "./ProductDetailsPage.module.css"
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import AccordionMenu from '../../elements/Headline/AccordionMenu/AccordionMenu';


const ProductDetailsPage = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col xs={6}><div className={classes.square}></div></Col>
        <Col xs={6}>
          <div className={classes.productTitle}>All-Natural Peanut Butter</div>
          <div className={classes.productPrice}>60,000 vnd</div>
          <div className={classes.productDescription}>Our Monkeys crush the freshest, tastiest Australian peanuts into a creamy yet crunchy consistency, sprinkling natural salt as they grind. We believe this creates the best peanut butter in the world - to spread or dollop on anything you like!</div>
          <div className={classes.ingredients}>Ingredients: Roasted Peanuts, Salt</div>
          <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic" className={classes.dropdownToggle}>
                    ORDER
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={classes.menu}>
                    <Dropdown.Item className={classes.dropdownItem} href="https://shopee.vn/piko.nutbutters" target="_blank">SHOPEE</Dropdown.Item>
                    <Dropdown.Item className={classes.dropdownItem} href="https://online.forms.app/pikobutters/order-form" target="_blank">FORMS.APP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <AccordionMenu></AccordionMenu>

        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailsPage