import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

export default function App(){
    const user = false;
        return (
            <BrowserRouter>
            <TopBar />
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/register" element={user ? <Home /> : <Register />} />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route path="/settings" element={user ? <Settings /> : <Register />} />
              <Route path="/write" element={user ? <Write /> : <Register />} />
              <Route path="/post/:postId" element={<Single />} />
            </Routes>
            </BrowserRouter>
        );
      }