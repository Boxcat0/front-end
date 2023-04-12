import React from "react";
import {Link} from "react-router-dom";
import "./css/locationbutton.css";

function MenuButton() {
    return(
        <div>
            <div className="loginName">
                <Link to="/login">
                    <button className="location_my">로그인</button>
                </Link>
            </div>
            <div className="location">
                <Link to={{
                    pathname: "/map",
                    state: {
                        latitude: 37.5326,
                        longitude: 127.0246
                    }
                }}>
                    <button className="location_my">내 위치</button>
                </Link>
            </div>
        </div>
    );
}

export default MenuButton;
