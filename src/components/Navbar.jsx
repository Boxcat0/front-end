import React from "react";
import { FaBars } from "react-icons/fa";

function Navbar(props) {
    return (
        <nav>
            <div className="nav-center">
                <button className="nav-toggle" onClick={props.onClick}>
                    <FaBars />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
