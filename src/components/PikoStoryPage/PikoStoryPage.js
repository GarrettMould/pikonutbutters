import React from 'react'
import classes from "./PikoStoryPage.module.css"
import Headline from '../../elements/Headline/Headline'
import ProductMessageBanner from '../../elements/ProductMessageBanner/ProductMessageBanner'

const PikoStoryPage = () => {
  return (
    <>
    <div className={classes.container}>
        <ProductMessageBanner text="PIKO'S MISSION"></ProductMessageBanner>
        <div className={classes.message}>We are the farm! Our co-founder and his family planted the first medjool date palm on their ranch nearly two decades ago in the Coachella Valley of Southern California. We proudly guarantee the entire journey of these organic beauties from the time they leave our palms 🌴 until they land in yours </div>
    </div>
    
    </>
  )
}

export default PikoStoryPage