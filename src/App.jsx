import { useState } from "react";
import { MdOutlineFingerprint } from "react-icons/md";
import "./App.css";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import LoginPage from "./Components/login/LoginPage";
import Home from "./Components/HomePage/Home";
import Swipe from "./Components/swipe/Swipe";
import Circle from "./Components/test/Circle";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/test" element={<Circle/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
