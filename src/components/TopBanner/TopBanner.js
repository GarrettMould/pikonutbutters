import React from 'react'
import classes from './TopBanner.module.css'

import Media from 'react-media'

const TopBanner = () => {
  return (

    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <div className={classes.banner}>
        FREE HANOI SHIPPING ON ALL ORDERS OVER 300K 
      </div>
       
      ) : (
        <div className={classes.banner}>
        FREE HANOI SHIPPING ON ALL ORDERS OVER 300K 
      </div>
      )
    }
  </Media>

    
  )
}

export default TopBanner