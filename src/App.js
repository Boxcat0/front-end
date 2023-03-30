import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import LoginButton from "./components/LoginButton";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import {BrowserRouter} from "react-router-dom";

function App() {
    const [showLogin, setShowLogin] = useState(false);
    return (
       <BrowserRouter>
           <div>
               <Navbar onClick={() => setShowLogin(!showLogin)} />
               <div className={`login-menu ${showLogin ? 'show-login-menu' : ''}`}>
                   <LoginButton />
               </div>
               <div className = "title-Center">
                   <Title />
               </div>
               <SearchBar />
           </div>
       </BrowserRouter>
    );
}

export default App;
