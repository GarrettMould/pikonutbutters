import React from 'react'
import logo from "../../images/logo.png"
import classes from "./Header.module.css"
import cartIcon from "../../images/cart.svg"



const Header = () => {
  return (
    <div>
        
        
        <nav className={classes.nav}>
        <img src={logo} className={classes.logo} alt="logo"></img>
        
            <ul>
                <li><a href="#products">PRODUCTS</a></li>
                <li><a href="#recipes">RECIPES</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#recipes">FIND IN STORES</a></li>
                <li><img className={classes.icon} src={cartIcon} alt="cart"></img></li>
            </ul>
        </nav>
  </div>
  )
}

export default Header