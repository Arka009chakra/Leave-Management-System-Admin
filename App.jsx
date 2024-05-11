import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import Navbar from './Navbar'
import {Routes, Route } from 'react-router-dom';
import Home from './Home'
import Leave from "./Leave";
import Add from './Add'
function App()
{
    return(
        <>
        <Navbar/>
        <Routes>
        <Route exact path ="/" element={<Home/>} />
        <Route exact path ="/leave" element={<Leave/>} />
        <Route exact path ="/add" element={<Add/>} />
        </Routes>
        </>
    )
}
export default App;