import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./products.css"

const ProductsComp = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(res => setproduct(res.data.products)).catch(err => console.log(err))

  });

  return (
    <div className='products'>
      {
        product.map((el) => (
          <div key={el.id} className='pro'>
             <img src={el.thumbnail}  alt="" />
             <h3>{el.title}</h3>
             <p>{el.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ProductsComp
