import React from "react";

function LoginPage() {
    return (
        <div className="login-page">
            <h1>어디가GYM</h1>
            <form>
                <div>
                    <label htmlFor="username">아이디:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">비밀번호:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginPage;
