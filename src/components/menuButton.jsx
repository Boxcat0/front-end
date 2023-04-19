import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/locationbutton.css";

function MenuButton() {
    const history = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(
        sessionStorage.getItem("isLoggedIn")==="true"
    );
    const handleLogout = () => {
        sessionStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
        sessionStorage.clear();
        window.location.reload();
        history("/");
    };
    const mapSetting =() =>{
        sessionStorage.setItem("latitude","35.1167");
        sessionStorage.setItem("longitude","128.9685");
    }

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <div className="logoutName">
                        <button className="location_my" onClick={handleLogout}>
                            로그아웃
                        </button>
                    </div>
                    <div className ="my_info">
                        <Link to="/myInfo">
                            <button className ="location_my">내 정보</button>
                        </Link>
                    </div>
                    <div className="location">
                        <Link to ="/map">
                            <button className="location_my" onClick={mapSetting}>내 위치</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="loginName">
                    <Link to="/login">
                        <button className="location_my">로그인</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MenuButton;
