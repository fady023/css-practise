import React from "react";
// import comp1style from "./comp1.module.css"


const Comp1 = (props)=>{
  
    return(
        <div>
           <img src={props.img} alt="" />
           <h2>{props.name}</h2>
           <p>{props.desc}</p>
        </div>
    )
}

export default Comp1