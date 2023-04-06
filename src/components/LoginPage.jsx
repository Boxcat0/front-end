import React from "react";

function LoginPage() {
    return (
        <div className="login">
            <form>
                <div>
                    <label htmlFor="username">아이디:
                    <input type="text" id="username" name="username" />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">비밀번호:
                    <input type="password" id="password" name="password" />
                    </label>
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginPage;
