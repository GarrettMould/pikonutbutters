import React from 'react'
import classes from "./ProductMessageBanner.module.css"

const ProductMessageBanner = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.message}>{props.text}</div>
    </div>
  )
}

export default ProductMessageBanner