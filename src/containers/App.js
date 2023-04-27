import classes from "./App.module.css"
import Header from "../components/Header/Header"

import React from 'react'
import TopBanner from "../components/TopBanner/TopBanner"
import ProductPage from "../components/ProductPage/ProductPage"
import RecipePage from "../components/RecipePage/RecipePage"
import StoreListPage from "../components/StoreListPage/StoreListPage"

const App = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <div className={classes.app}>
        <Header></Header>
        <ProductPage></ProductPage>
        <RecipePage></RecipePage>
        <StoreListPage></StoreListPage>
      </div>
    </div>

  )
}

export default App
