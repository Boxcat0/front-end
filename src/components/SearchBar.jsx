import React from "react";
import "./css/ico.css";

function SearchBar() {
    return (
        <form>
            <label>
                <input type="text" name="search" />
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
