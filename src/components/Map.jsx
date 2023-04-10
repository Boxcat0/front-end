import React, {useEffect} from "react";
import "./css/map.css"
function Map(){
    useEffect(() => {
        // 카카오 지도 API 스크립트가 로딩된 이후에 실행됩니다.
        // 여기에서 지도를 생성하고 조작하는 코드를 작성합니다.
        const container = document.getElementById("map"); // 지도를 표시할 HTML 엘리먼트
        const options = {
            center: new window.kakao.maps.LatLng(35.1167, 128.9685), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨(작을 수록 확대를 더 한다)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 객체 생성
        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(35.1167, 128.9685);
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map); // 마커 지도에 표시
    }, []);

    return (
        <div className= "kakaoMap">
            <div id="map" style={{ width: "1000px", height: "700px" }}>
                {/* 지도를 표시할 영역입니다. */}
            </div>
        </div>
    );
}

export default Map;