import React from "react";
// import "./Wrapper.css";

const Nav = props => (
    <nav class="navbar">
        <li class="brand"><a href="/">Clicky Game</a></li>
        <li> {props.navMessage} </li>
        <li> {props.navScore} </li>
    </nav>
);

export default Nav;
