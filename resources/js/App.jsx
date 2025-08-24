import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SideNav from "./SharedComponents/SideNav";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <SideNav/>
                
                <div className="ml-64">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                
            </BrowserRouter>
        </>
    );
}