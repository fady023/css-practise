import React from "react";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
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
                        <NavLink to={"/sinacola"} > sinacola </NavLink>
                    </li>
                </ul>

            </nav>

        </>

    );
}

export default Navbar;