import React from 'react'
import Navbar from '../Navbar'
import {useDispatch, useSelector} from "react-redux";
import { sinaColaSlice } from './sinacolaSlice';


const SinaColaComp = () => {
    const num_of_sinacola = useSelector((state) => state.SinaCola.counter);
    const dispatch = useDispatch();

  return (
    <div>
        <Navbar />
      <h1>counter : </h1>
      <button  onClick={()=>dispatch(sinaColaSlice.actions.orderSinaCola())}>order</button>
      <button  onClick={()=>dispatch(sinaColaSlice.actions.restockSinaCola())}>order</button>
      <button  >restock</button>
    </div>
  )
}

export default SinaColaComp
