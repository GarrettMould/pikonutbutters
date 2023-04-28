import React from 'react'
import logo from "../../images/logo.png"
import classes from "./Header.module.css"
import cartIcon from "../../images/cart.svg"
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div>
        
        
        <nav className={classes.nav}>
        <img src={logo} className={classes.logo} alt="logo"></img>
        
            <ul>
                <li><Link to="/"><a href="#products">PRODUCTS</a></Link></li>
                <li><Link to="/recipes"><a href="#recipes">RECIPES</a></Link></li>
                <li><Link to="/stores"><a href="#recipes">FIND IN STORES</a></Link></li>
                <li><Link to="/order"><a href="#about">ORDER</a></Link></li>
            </ul>
        </nav>
  </div>
  )
}

export default Header