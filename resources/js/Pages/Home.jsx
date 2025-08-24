import React from "react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <motion.div 
            className="h-screen flex flex-col items-center justify-center bg-gray-100"
            initial = {{ opacity: 0, y:-20 }}
            whileInView={{ opacity: 1, y:0 }}
            animate = {{ opacity: 1 }}
            transition = {{ duration: 0.3 }}
        >
            <h1 className="text-4xl font-bold mb-4">Welcome to Laravel React CRUD</h1>
            <p className="text-lg text-gray-700">This is a simple CRUD application using Laravel and React.</p>
        </motion.div>
    );
}