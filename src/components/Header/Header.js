import React from 'react'
import logo from "../../images/logo.png"
import piko_alt from "../../images/piko_alt.png"
import classes from "./Header.module.css"
import cartIcon from "../../images/cart.svg"
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import menu from '../../images/menu.svg'

import Media from 'react-media'



const Header = () => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <div>
        <nav className={classes.nav}>
        <Link to="/"><img src={logo} className={classes.logo} alt="logo"></img>
        </Link>
            <img src={menu} alt='menu' className={classes.menuIcon}></img>
        </nav>
  </div>
       
      ) : (
        <div>
        <nav className={classes.nav}>
        <Link to="/"><img src={logo} className={classes.logo} alt="logo"></img>
        </Link>
            <ul>
                <li><Link to="/" style={{ textDecoration: 'none', color: "black" }}><a className={classes.navItem} href="#products">PRODUCTS</a></Link></li>
                {/*<li><Link to="/recipes" style={{ textDecoration: 'none', color: "black" }}><a href="#recipes" className={classes.navItem}>RECIPES</a></Link></li>*/}
                <li><Link to="/stores" style={{ textDecoration: 'none', color: "black" }}><a href="#recipes" className={classes.navItem}>FIND IN STORES</a></Link></li>
                <li>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic" className={classes.dropdownToggle}>
                    ORDER
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={classes.menu}>
                    <Dropdown.Item className={classes.dropdownItem} href="https://shopee.vn/piko.nutbutters" target="_blank">SHOPEE</Dropdown.Item>
                    <Dropdown.Item className={classes.dropdownItem} href="https://online.forms.app/pikobutters/order-form" target="_blank">FORMS.APP</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </li>
                
            </ul>
        </nav>
  </div>
      )
    }
  </Media>
    
  )
}

export default Header