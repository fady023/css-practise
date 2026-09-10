import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import "./products.css"

const SingleProductComp = () => {

    const [pro,setpro] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`).then(res=>setpro(res.data)).catch(err=>console.log(err))
    })
    return (
        <div key={pro.id} className='pro'>
          <img src={pro.thumbnail}  />
          <h3>{pro.title}</h3>
          <p>{pro.description}</p>
        </div>
    )
}

export default SingleProductComp
