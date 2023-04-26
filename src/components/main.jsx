import React from "react";
import SearchBar from "./SearchBar"
import Youtube from "./YoutubeSlider"
import './css/youtube_button.css'

function main(){
    return(
        <div>
            <SearchBar />
            <div className="youtube_menu">
                <Youtube/>
            </div>
        </div>
    )

}

export default main;