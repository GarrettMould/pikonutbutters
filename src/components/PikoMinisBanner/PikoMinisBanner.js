import React from 'react'
import classes from "./PikoMinisBanner.module.css"
import bottle from "../../images/Bottle.png"

const PikoMinisBanner = () => {
  return (
    <div className={classes.container}>
    <div className={classes.messageContainer}>
        <div className={classes.headerOne}>PIKO MINI SERIES</div>
        <div className={classes.headerTwo}>Because good things come in small packages</div>
        <button className={classes.button}>SHOP NOW</button>
    </div>
    <div className={classes.imagesContainer}>
        <img src={bottle} className={classes.img} alt="jar"></img>
        <img src={bottle} className={classes.img} alt="jar"></img>
        <img src={bottle} className={classes.img} alt="jar"></img>
        
    </div>
    </div>
  )
}

export default PikoMinisBanner