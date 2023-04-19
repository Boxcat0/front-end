import React, { useEffect} from "react";
import "./css/map.css";
import "./menuButton";

function Map() {
    let latitude = parseFloat(sessionStorage.getItem("latitude"));
    let longitude = parseFloat(sessionStorage.getItem("longitude"));
    if(latitude == null || longitude == null)//디폴트값 설정
    {
        latitude = 35.1167;
        longitude = 128.9685;
    }
    useEffect(() => {
        // 카카오 지도 API 스크립트가 로딩된 이후에 실행됩니다.
        // 여기에서 지도를 생성하고 조작하는 코드를 작성합니다.
        const container = document.getElementById("map"); // 지도를 표시할 HTML 엘리먼트
        const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨(작을 수록 확대를 더 한다)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 객체 생성
        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition,
        });
        marker.setMap(map); // 마커 지도에 표시
    }, [latitude, longitude]);


    return (
        <div className="kakaoMap">
            <div id="map" style={{ width: "1000px", height: "700px" }}>
                {/* 지도를 표시할 영역입니다. */}
            </div>
        </div>
    );
}

export default Map;
