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
        window.location.reload();
        history("/");
    };

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
                        <Link to="/info">
                            <button className ="location_my">내 정보</button>
                        </Link>
                    </div>
                    <div className="location">
                        <Link
                            to={{
                                pathname: "/map",
                                state: {
                                    latitude: 35.1167,
                                    longitude: 128.9685,
                                },
                            }}
                        >
                            <button className="location_my">내 위치</button>
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
