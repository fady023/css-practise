import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from "../Navbar/NavBar"
import "../products/products.css"
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartproducts = useSelector((state) => state.product.items);

  return (
    <div>
      <NavBar />
      <div className='products' >
        {
          cartproducts.map((ele) => (
            <div className='pro' key={ele.id}>
              <img src={ele.thumbnail} alt='' />
              <h3>{ele.title}</h3>
              <p>{ele.description}</p>
              <Link to={`/products/${ele.id}`}>show more ..</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart
