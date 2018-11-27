import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="nav nav-bar">
            <li>Memory Game</li>
            <li>{props.message}</li>
            <li>Score: {props.curScore} | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navbar;