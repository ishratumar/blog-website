import React from 'react'
import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar"
import Write from './pages/write/Write';

export default function App(){
    return(
        <>
        <TopBar />
        <Write /> 
        </>
    );
}
