import React from "react";
import { Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
const Navbar = () => {
    const num_of_sinacola = useSelector((state) => state.SinaCola.counter);

    return (
        <>
            <nav>
                <span>Logo</span>

                <ul>

                    <li>
                        <NavLink to="/"> Home </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about"> About </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact"> Contact </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/products"} > Products </NavLink>
                    </li>

                    
                    <li>
                        <NavLink to={"/sinacola"} > sinacola {num_of_sinacola}</NavLink>
                    </li>
                </ul>

            </nav>

        </>

    );
}

export default Navbar;