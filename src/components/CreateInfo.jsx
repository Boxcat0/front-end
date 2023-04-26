import React from "react";
import "./css/Formdesign.css"

function CreateInfo(){
    function pw_check(){
        if(document.getElementById("password").value.length <5){
            alert("비밀번호는 5자리 이상 입력해주세요");
            return false;
        }
    }
    return(
        <div className="CreateInfo">
            <form className ="CreateForm" method="post" action ="/CreateInfo" onSubmit={pw_check}>
                <input type="text" id = "name" name = "name" placeholder="이름"/>
                <input type="text" id = "id" name ="id" placeholder="아이디를 입력해주세요"/>
                <input type="text" id = "password" name = "password" placeholder="5자리 이상의 비밀번호를 입력해주세요"/>
                <input type="text" id = "place" name = "place" placeholder = "주소를 입력해주세요"/>
                <input type="hidden" name = "role" value = "USER"/>
                <input type = "submit" value = "Register"/>
            </form>
        </div>
    );
}

export default CreateInfo;