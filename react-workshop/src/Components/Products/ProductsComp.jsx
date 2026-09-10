import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import "./products.css"
import { useDispatch } from "react-redux"
import { productSlice } from "../Redux/productSlice"

const ProductsComp = () => {
  const dispatch = useDispatch();

  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(res => setproduct(res.data.products)).catch(err => console.log(err))

  }, []);

  return (
    <div className='products'>
      {
        product.map((el) => (
          <div key={el.id} className='pro'>
            <img src={el.thumbnail} alt="" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>

               <div className='add' >
                  <Link to={`./products/${el.id}`} >Show more ..</Link>
                  <button onClick={()=>dispatch(productSlice.actions.addToCart(el))}>Add to Cart</button>
               </div>

          </div>
        ))
      }
    </div>
  )
}

export default ProductsComp
