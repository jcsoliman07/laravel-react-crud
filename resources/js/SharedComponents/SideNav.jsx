import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SideNav() {
    return (
        <motion.div 
            className="w-64 h-screen bg-gray-800 text-white flex flex-col fixed left-0 top-0"
            initial = {{ x: -100 }}
            animate = {{ x: 0 }}
            transition = {{ duration: 0.3 }}
        >
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
                My App
            </div>
            <nav className="flex-grow p-4">
                <ul>
                    <li className="mb-2">
                        <Link 
                            to="/" className="block px-4 py-2 rounded hover:bg-gray-700"      
                        >
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
}