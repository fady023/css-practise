import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from "../Navbar/NavBar"
import "../products/products.css"
import { Link } from 'react-router-dom'
import { productSlice } from './productSlice'

const Cart = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const cartproducts = useSelector((state) => state.product.items);
  const carttotal = useSelector((state) => state.product.total);
  useEffect(() => {
    dispatch(productSlice.actions.calcTotal());
    setproducts(cartproducts);
  },[cartproducts,dispatch]);
  return (
    <div>
      <NavBar />
      <div className='products' >
        {
          products.map((ele) => (
            <div className='pro' key={ele.id}>
              <img src={ele.thumbnail} alt='' />
              <h3>{ele.title}</h3>
              <b>{ele.price}</b>
              <p>{ele.description}</p>

              <button onClick={() => dispatch(productSlice.actions.removeFromCart(ele))} >remove</button>
              <Link to={`/products/${ele.id}`}>show more ..</Link>
            </div>
          ))
        }
      </div>

      <div >
        Total : {carttotal}
      </div>
    </div>
  )
}

export default Cart
