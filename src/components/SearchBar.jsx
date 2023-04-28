import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import "./css/ico.css";

function SearchBar() {
    const [search,setSearch] = useState("");
    const history = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                `https://dapi.kakao.com/v2/local/search/address.json?query=${search}`,
                {
                    headers: { Authorization: "KakaoAK 2180384fb48d77041c8e30c6c14fa5ce" },
                }
            );
            console.log(search);
            const data = await response.json();
            if (data.documents.length === 0) {
                console.error("No result found.");
                return;
            }
            const firstResult = data.documents[0];
            const { x, y } = firstResult.address;
            console.log(`위도: ${y}, 경도: ${x}`);
            // 위도와 경도를 이용해 지도에 위치 표시하는 코드 작성
            sessionStorage.setItem("longitude", x);
            sessionStorage.setItem("latitude",y);
            history("/map");
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" name="search" id = "search" placeholder="어디서 근육 커질래?" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit" >
                    <div className= "icon">
                        <img src={`${process.env.PUBLIC_URL}/search.ico`} alt="search" />
                    </div>
                </button>
            </label>
        </form>
    );
}

export default SearchBar;
