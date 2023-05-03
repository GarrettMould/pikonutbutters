import React from 'react'
import logo from "../../images/logo.png"
import classes from "./Header.module.css"
import cartIcon from "../../images/cart.svg"
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';



const Header = () => {
  return (
    <div>
        
        
        <nav className={classes.nav}>
        <img src={logo} className={classes.logo} alt="logo"></img>
        
            <ul>
                <li><Link to="/"><a href="#products">PRODUCTS</a></Link></li>
                <li><Link to="/recipes"><a href="#recipes">RECIPES</a></Link></li>
                <li><Link to="/stores"><a href="#recipes">FIND IN STORES</a></Link></li>
                <li>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic" className={classes.dropdownToggle}>
                    ORDER
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="https://shopee.vn/piko.nutbutters" target="_blank">SHOPEE</Dropdown.Item>
                    <Dropdown.Item href="https://online.forms.app/pikobutters/order-form" target="_blank">FORMS.APP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                
            </ul>
        </nav>
  </div>
  )
}

export default Header