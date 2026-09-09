import "./App.css"
import {Routes,Route} from "react-router-dom"
import Products from "./Routes/Products"
import SingleProduct from "./Routes/SingleProduct"
import React from 'react'

const App = () => {
  return (
    <>
    <Routes >
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct /> } />
    </Routes>
      
    </>
  )
}

export default App
