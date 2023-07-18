import React from 'react'
import classes from "./PikoMinisBanner.module.css"
import { Link } from 'react-router-dom'
import bottle from "../../images/Bottle.png"
import Media from 'react-media'
import pb from "../../images/peanutbutter.png"
import almond from "../../images/almond.png"
import cashew from "../../images/cashew.png"
const PikoMinisBanner = () => {
  return (

    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <div className={classes.container}>
    <div className={classes.messageContainer}>
        <div className={classes.headerOne}>PIKO MINIS</div>
        <div className={classes.headerTwo}>Because good things come in small packages</div>
        <Link to="/products"><button className={classes.button}>SHOP NOW</button></Link>
    </div>
    <div className={classes.imagesContainer}>
        <img src={pb} className={classes.img} alt="jar"></img>
        <img src={almond} className={classes.img} alt="jar"></img>
        <img src={cashew} className={classes.img} alt="jar"></img>
        
    </div>
    </div>
       
      ) : (
        <div className={classes.container}>
    <div className={classes.messageContainer}>
        <div className={classes.headerOne}>PIKO MINIS</div>
        <div className={classes.headerTwo}>Good things come in small packages</div>
        <Link to="/products"><button className={classes.button}>SHOP NOW</button></Link>
    </div>
    <div className={classes.imagesContainer}>
        <img src={pb} className={classes.img} alt="jar"></img>
        <img src={almond} className={classes.img} alt="jar"></img>
        <img src={cashew} className={classes.img} alt="jar"></img>
        
    </div>
    </div>
      )
    }
  </Media>
    
  )
}

export default PikoMinisBanner