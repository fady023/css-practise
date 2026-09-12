import React from "react";
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import "./navbar.css"
const NavBar = () => {
    // const num_of_sinacola = useSelector((state) => state.SinaCola.counter);
const products = useSelector((state)=> state.product.items);
    return (
        <>
            <nav>
                <span>Logo</span>

                <ul>

                    <li>
                        <NavLink to="/"> Home </NavLink>
                    </li>

                
                    <li>
                        <NavLink to={"/products"} > Products </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/Cart"}  > Cart  {products.length}</NavLink>
                    </li>

                    
                   {/*  <li>
                        <NavLink to={"/sinacola"} > sinacola {num_of_sinacola}</NavLink>
                    </li> */}
                </ul>

            </nav>

        </>

    );
}

export default NavBar;