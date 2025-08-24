import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Laravel React CRUD</h1>
                    <p className="text-lg text-gray-700">This is a simple CRUD application using Laravel and React.</p>
                </div>
            </BrowserRouter>
        </>
    );
}