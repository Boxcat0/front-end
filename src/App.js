import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Title from './components/Title';
import main from './components/main';
import MenuButton from './components/menuButton';
import LoginPage from './components/LoginPage';
import './App.css';
import Map from "./components/Map";

function App() {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <BrowserRouter>
            <div>
                <Navbar onClick={() => setShowLogin(!showLogin)} />
                <div className={`login-menu ${showLogin ? 'show-login-menu' : ''}`}>
                    <MenuButton/>
                </div>
                <div className="title-Center">
                    <Title />
                </div>
                <Routes>
                    <Route exact path="/" element={<main />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/Map" element={<Map />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
