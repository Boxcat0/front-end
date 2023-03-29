import React from "react";

function SearchBar() {
    return (
        <form>
            <label>
                <input type="text" name="search" />
                <button type="submit">위치 검색</button>
            </label>
        </form>
    );
}

export default SearchBar;
