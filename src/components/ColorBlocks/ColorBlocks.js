import React from 'react'
import cashew_cutout from "../../images/cashew_cutout.png"
import classes from "./ColorBlocks.module.css"
import Media from 'react-media'
import pb_spread from "../../images/pb_spread.png"
import stacked_set from "../../images/stacked_set.png"

const ColorBlocks = () => {
  return (
    <>
    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <>
        <div className={classes.blockOne} id="peanutButter">
        <div className={classes.messageContainer}>
            <div className={classes.message}>
                A PROTEIN<br></br> <span>PACKED SNACK.</span> 
            </div>
            <img src={pb_spread} className={classes.peanutButter}></img>
        </div>
    </div>
    <div className={classes.blockTwo} id="peanutButter">
    <div className={classes.messageContainer}>
        <img src={stacked_set} className={classes.stackedSet}></img>
        
    </div>
</div>
<div className={classes.blockThree} id="peanutButter">
        <div className={classes.messageContainer}>
            <div className={classes.cashewMessage} id="cashewMessage">
                ENJOY RIGHT<br></br> <span>OUT THE JAR.</span>  
            </div>
            <img src={cashew_cutout} className={classes.cashew}></img>
        </div>
    </div>
    </>
       
      ) : (
        <>
        <div className={classes.blockOne} id="peanutButter">
        <div className={classes.messageContainer}>
            <div className={classes.message}>
                A PROTEIN<br></br> <span>PACKED SNACK.</span> 
            </div>
            <img src={pb_spread} className={classes.peanutButter}></img>
        </div>
    </div>
    <div className={classes.blockTwo} id="peanutButter">
    <div className={classes.messageContainer}>
        <div className={classes.message}>
            GOODNESS<br></br> <span>IN EVERY JAR.</span> 
        </div>
        <img src={stacked_set} className={classes.stackedSet}></img>
        
    </div>
</div>
<div className={classes.blockThree} id="peanutButter">
        <div className={classes.messageContainer}>
            <div className={classes.message}>
                ENJOY PIKO<br></br> <span>BY THE SPOONFUL.</span>  
            </div>
            <img src={cashew_cutout} className={classes.cashew}></img>
        </div>
    </div>
    </>
      )
    }
  </Media>
    
    
    </>
  )
}

export default ColorBlocks