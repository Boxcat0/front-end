import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./css/locationbutton.css"

function LoginPage() {
    const history = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem("isLoggedIn") === "true");

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(isLoggedIn);
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        if (username === "admin" && password === "1234") {
            sessionStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            history("/");
        } else {
            alert("아이디나 비밀번호가 틀렸습니다.");
        }
        window.location.reload();
    };

    return (
        <div className="login">
            {isLoggedIn ? (
                <div>
                    <p>이미 로그인되어 있습니다.</p>
                    <button onClick={() => { sessionStorage.setItem("isLoggedIn", "false"); setIsLoggedIn(false); }}>로그아웃</button>
                </div>
            ) : (
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="username">
                            <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
                        </label>
                    </div>
                    <button type="submit">로그인</button>
                    <Link to="/make_ID">
                        <button>회원가입</button>
                    </Link>
                </form>
            )}
        </div>
    );
}

export default LoginPage;
