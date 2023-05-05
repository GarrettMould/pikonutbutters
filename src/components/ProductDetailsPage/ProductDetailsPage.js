import React from 'react'
import classes from "./ProductDetailsPage.module.css"
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import AccordionMenu from '../../elements/Headline/AccordionMenu/AccordionMenu';
import { items } from '../../ProductInformation';


const ProductDetailsPage = (props) => {


  var selectedItemInfo = items[props.selectedProduct]; 

  console.log(selectedItemInfo)
  
  return (
    <Container className={classes.container}>
      <Row>
        <Col xs={6}><div className={classes.square}></div></Col>
        <Col xs={6} className={classes.infoCol}>
          <div className={classes.infoContainer}>
          <div className={classes.productTitle}>{selectedItemInfo.name}</div>
          <div className={classes.productPrice}>{selectedItemInfo.price}</div>
          <div className={classes.productDescription}>{selectedItemInfo.description}</div>
          <div className={classes.ingredients}>Ingredients: {selectedItemInfo.ingredients}</div>
          <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic" className={classes.dropdownToggle}>
                    ORDER
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={classes.menu}>
                    <Dropdown.Item className={classes.dropdownItem} href="https://shopee.vn/piko.nutbutters" target="_blank">SHOPEE</Dropdown.Item>
                    <Dropdown.Item className={classes.dropdownItem} href="https://online.forms.app/pikobutters/order-form" target="_blank">FORMS.APP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <AccordionMenu selectedProduct={props.selectedProduct}></AccordionMenu>
         </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailsPage