import React from "react";
import {Link} from "react-router-dom";

function MapButton() {
    return(
        <div>
            <Link to="/Map">
                <button>지도 확인</button>
            </Link>
        </div>
    );
}

export default MapButton;
