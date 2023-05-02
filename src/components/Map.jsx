import React, { useState, useEffect } from "react";
import "./css/map.css";

function Map() {
    const [data, setData] = useState({});
    let latitude = parseFloat(sessionStorage.getItem("latitude"));
    let longitude = parseFloat(sessionStorage.getItem("longitude"));
    if (latitude == null || longitude == null) {
        latitude = 35.1167;
        longitude = 128.9685;
    }

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/gymdata.json");
            const data = await response.json();
            setData(data);
        }
        fetchData().then();
    }, []);

    useEffect(() => {
        if (data) {
            const container = document.getElementById("map");
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
            const marketGym = new window.kakao.maps.LatLng(data.Lat, data.Lng);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            const marker2 = new window.kakao.maps.Marker({
                position: marketGym,
            });
            marker.setMap(map);
            marker2.setMap(map);
        }
    }, [latitude, longitude,data]);

    return (
        <div className="kakaoMap">
            <div id="map" style={{ width: "850px", height: "550px" }}>
                {/* 지도를 표시할 영역입니다. */}
            </div>
        </div>
    );
}

export default Map;
