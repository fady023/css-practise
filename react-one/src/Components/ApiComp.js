import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../Styles/api.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const ApiComp = () => {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => setproducts(res.data.products)).catch((err) => console.log(err));
  })

  return (

    <>
      <Navbar />

      <div className='products'>

        {
          products.map((item) => (

            <div className='pro' key={item.id}>
              <img src={item.thumbnail} alt='' />
              <h4>id : {item.id}</h4>
              <h4>title : {item.title}</h4>
              <p>description : {item.description}</p>
              <Link to={`/products/${item.id}`}> Show more ... </Link>
            </div>

          ))
        }
      </div>
    </>
  )
}

export default ApiComp
