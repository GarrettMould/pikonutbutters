import React from 'react'
import classes from "./PikoStoryPage.module.css"
import Headline from '../../elements/Headline/Headline'
import logoNEW from '../../images/logoNEW.png'
import ProductMessageBanner from '../../elements/ProductMessageBanner/ProductMessageBanner'

const PikoStoryPage = () => {
  return (
    <>
    <div className={classes.container}>
      <img src={logoNEW} className={classes.logo}></img>
        <ProductMessageBanner text="OUR MISSION"></ProductMessageBanner>
        <div className={classes.message}>Healthy snack options should be affordable and easy to find. At Piko Nut Butters, we strive to craft delicious nut butters using only the finest high-quality ingredients. Whether you add it to your morning smoothie, or enjoy it spread on toast, your next healthy snack is only a spoon’s scoop away. 

</div>
    </div>
    
    </>
  )
}

export default PikoStoryPage