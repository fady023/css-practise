
import React from "react"
import "../Styles/header.css"
import Navbar from "./Navbar"

function Header(){
    const y={
        color:"red",
        backgroundColor:"green"
    };

    return (
        <div>
            <Navbar />
         <h2  style={y}> this is header</h2>
    
        </div>
    )
}
export default Header