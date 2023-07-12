import React from 'react'
import classes from "./ColorBlocks.module.css"

const ColorBlocks = () => {
  return (
    <>
    <div className={classes.blockOne} id="peanutButter">
        <div className={classes.messageContainer}>
            <div className={classes.message}>
                A PROTEIN<br></br> <span>PACKED SNACK.</span> 
            </div>
        </div>
    </div>
    <div className={classes.blockTwo} id="peanutButter">
    <div className={classes.messageContainer}>
        <div className={classes.message}>
            GOODNESS<br></br> <span>IN EVERY JAR.</span> 
        </div>
    </div>
</div>
<div className={classes.blockThree} id="peanutButter">
        <div className={classes.messageContainer}>
            <div className={classes.message}>
                ENJOY PIKO<br></br> <span>BY THE SPOONFUL.</span>  
            </div>
        </div>
    </div>
    </>
  )
}

export default ColorBlocks