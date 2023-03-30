import React from "react";
import {Link} from "react-router-dom";

function LoginButton() {
    return(
        <div>
            <Link to="/login">
                <button>로그인</button>
            </Link>
        </div>
    );
}

export default LoginButton;
