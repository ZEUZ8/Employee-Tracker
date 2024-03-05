import { useState } from "react";
import { MdOutlineFingerprint } from "react-icons/md";
import "./App.css";
import Login from "./Components/login/login";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import LoginPage from "./Components/login/LoginPage";
import Home from "./Components/HomePage/Home";


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
