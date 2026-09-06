import React from 'react'
import Navbar from '../Navbar'
import {useSelector} from "react-redux";


const SinaColaComp = () => {
    const num_of_sinacola = useSelector((state) => state.SinaCola.counter);
    console.log(num_of_sinacola);

  return (
    <div>
        <Navbar />
      <h1>counter : </h1>
      <button  >order</button>
      <button  >restock</button>
    </div>
  )
}

export default SinaColaComp
