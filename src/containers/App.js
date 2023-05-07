import classes from "./App.module.css"
import { Routes, Route} from "react-router-dom";
import Header from "../components/Header/Header"


import { useState } from "react";
import React from 'react'
import TopBanner from "../components/TopBanner/TopBanner"
import ProductPage from "../components/ProductPage/ProductPage"
import RecipePage from "../components/RecipePage/RecipePage"
import StoreListPage from "../components/StoreListPage/StoreListPage"
import ProductDetailsPage from "../components/ProductDetailsPage/ProductDetailsPage";
import Footer from "../components/Footer/Footer";

const App = () => {

  const [selectedProduct, setSelectedProduct] = useState(1);

  const handleProductSelect = (id) => { 
    setSelectedProduct(id)
  }

  console.log(selectedProduct);

  return (
    <>
    <TopBanner></TopBanner>
      <div className={classes.app}>
      <Header></Header>
        <Routes>
          <Route path="/" element={<ProductPage selectedProduct={selectedProduct} handleProductSelect={handleProductSelect}></ProductPage>}></Route>
          <Route path="/recipes" element={<RecipePage></RecipePage>}></Route>
          <Route path="/stores" element={<StoreListPage></StoreListPage>}></Route>
          <Route path="/product" element={<ProductDetailsPage selectedProduct={selectedProduct}></ProductDetailsPage>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
