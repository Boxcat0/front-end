import React from "react";

function SearchBar() {
    return (
        <form>
            <label>
                <input type="text" name="search" />
                <button type="submit">
                    <img src={`${process.env.PUBLIC_URL}/search.ico`} alt="search" />
                </button>
            </label>
        </form>
    );
}

export default SearchBar;
