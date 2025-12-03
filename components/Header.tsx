"use client";
import { div } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

export const Header = () => {
    return (
        <header className=" lg:fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between"> 
                <div className="text-white text-2xl font-bold">
                    <a href="/" className="hover:text-violet-500 transition-colors">
                        Thomas Pinda
                    </a>
                </div>
                <nav className="space-x-6">
                    
                    <a href="#about" className="text-white hover:text-violet-500 transition-colors">
                        Sobre mí
                    </a>
                    <a href="#experience " className="text-white hover:text-violet-500 transition-colors">
                        Experiencia
                    </a>
                    <a href="#stack" className="text-white hover:text-violet-500 transition-colors">
                        Stack tecnológico
                    </a>
                    <a href="#projects" className="text-white hover:text-violet-500 transition-colors">
                        Proyectos
                    </a>
                    <a href="#contact" className="text-white hover:text-violet-500 transition-colors">
                        Contacto
                    </a>
                </nav>
                <div className="flex items-center space-x-4">

            </div>
            </div>
        </header>
    );
}
