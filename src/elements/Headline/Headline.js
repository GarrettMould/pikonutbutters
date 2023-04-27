import React from 'react'
import classes from './Headline.module.css'

const Headline = (props) => {
  return (
    <div className={classes.headline}>{props.text}</div>
  )
}

export default Headline