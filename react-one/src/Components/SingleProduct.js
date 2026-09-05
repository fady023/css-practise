import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const SingleProduct = () => {

    const [pro, setpro] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`).then((res) => setpro(res.data)).catch(err => console.log(err));
    })
    return (
        <>
            <Navbar />
            {
                <div className='pro'>
                    <img src={pro.thumbnail} alt='' />
                    <h4>id : {pro.id}</h4>
                    <h4>title : {pro.title}</h4>
                    <p>description : {pro.description}</p>
                </div>

            }
        </>
    )}
export default SingleProduct
