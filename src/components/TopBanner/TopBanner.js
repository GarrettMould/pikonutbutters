import React from 'react'
import classes from './TopBanner.module.css'

import Media from 'react-media'

const TopBanner = () => {
  return (

    <Media queries={{ small: { maxWidth: 599 } }}>
    {matches =>
      matches.small ? (
        <div className={classes.banner}>
        Help cut out waste! Return your old Piko jar and receive 10k off your new order. 
      </div>
       
      ) : (
        <div className={classes.banner}>
        Help cut out waste! Return your old Piko jar and receive 10k off your new order. 
      </div>
      )
    }
  </Media>

    
  )
}

export default TopBanner