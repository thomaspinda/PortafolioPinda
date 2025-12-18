'use client'
import React from "react";
import { useState } from "react";

export const BotonCV = () =>{
    const onButtonClick = () => {
    const pdfUrl = "ThomasPinda.pdf"
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "ThomasPinda.pdf";
    link.click();
};
    return(
        <div>
            <button 
            className="
            border rounded backdrop-blur-xl shadow-lg p-2
            cursor-pointer transition-all
            duration-300 transform hover:scale-[1.02]
            bg-white/10 border-white/10 hover:bg-white/20 hover:border-white/20
            text-gray-400 hover:text-white
            flex items-center space-x-2
            "
            onClick={onButtonClick}
            >Descargar CV</button>
        </div>
    );
}