import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import LoginButton from './components/LoginButton';
import LoginPage from './components/LoginPage';
import './App.css';
import MapButton from "./components/MapButton";
import Map from "./components/Map";

function App() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <BrowserRouter>
            <div>
                <Navbar onClick={() => setShowLogin(!showLogin)} />
                <div className={`login-menu ${showLogin ? 'show-login-menu' : ''}`}>
                    <LoginButton/>
                    <MapButton/>
                </div>
                <div className="title-Center">
                    <Title />
                </div>
                <Routes>
                    <Route exact path="/" element={<SearchBar />} />
                    <Route exac path="/login" element={<LoginPage />} />
                    <Route exac path="/Map" element={<Map />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
