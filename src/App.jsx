import React from 'react'
import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';

export default function App(){
    return(
        <>
        <TopBar />
        <Login /> 
        </>
    );
}
