import classes from "./App.module.css"
import { Routes, Route} from "react-router-dom";
import Header from "../components/Header/Header"

import React from 'react'
import TopBanner from "../components/TopBanner/TopBanner"
import ProductPage from "../components/ProductPage/ProductPage"
import RecipePage from "../components/RecipePage/RecipePage"
import StoreListPage from "../components/StoreListPage/StoreListPage"
import OrderForm from "../components/OrderForm/OrderForm";

const App = () => {
  return (
    <>
    <TopBanner></TopBanner>
      <div className={classes.app}>
      <Header></Header>
        <Routes>
          <Route path="/" element={<ProductPage></ProductPage>}></Route>
          <Route path="/recipes" element={<RecipePage></RecipePage>}></Route>
            <Route path="/stores" element={<StoreListPage></StoreListPage>}></Route>
            <Route path="/order" element={<OrderForm></OrderForm>}></Route>
            
        </Routes>
      </div>
    </>

  )
}

export default App
