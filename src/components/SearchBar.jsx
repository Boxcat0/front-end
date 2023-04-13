import React from "react";
import "./css/ico.css";

function SearchBar() {
    return (
        <form>
            <label>
                <input type="text" name="search" value="어디서 근육 커질래?"/>
                <button type="submit">
                    <div className= "icon">
                        <img src={`${process.env.PUBLIC_URL}/search.ico`} alt="search" />
                    </div>
                </button>
            </label>
        </form>
    );
}

export default SearchBar;
