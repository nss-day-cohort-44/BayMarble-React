/*
    Responsiblity: changing the URL in the address bar
*/

import React from "react"
import { Link } from "react-router-dom"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                {/* This Link changes the URL to localhost:3000/ */}
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                {/* This Link changes the URL to localhost:3000/donuts */}
                <Link className="navbar__link" to="/donuts">View Donuts</Link>
            </li>
            <li className="navbar__item">
                 {/* This Link changes the URL to localhost:3000/FAQ */}
                <Link className="navbar__link" to="/FAQ">FAQ</Link>
            </li>
        </ul>
    )
}