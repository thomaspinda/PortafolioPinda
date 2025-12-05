"use client";
import { useState } from "react";
// Importar íconos para el botón de menú
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Define un array para los elementos de navegación para no repetir código
const navItems = [
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia" },
    { href: "#stack", label: "Stack tecnológico" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
];

export const Header = () => {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        // Cierra el menú al hacer clic en un enlace (útil para móvil)
        setIsMenuOpen(false);
    }

    return (
        // El header se mantiene fijo en todas las pantallas
        <header className="lg:fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between"> 
                
                {/* Logo/Nombre */}
                <div className="text-white text-2xl font-bold">
                    <a href="/" className="hover:text-violet-500 transition-colors">
                        Thomas Pinda
                    </a>
                </div>

                {/* Botón de Menú Hamburguesa (visible solo en pantallas pequeñas) */}
                <button 
                    className="lg:hidden text-white text-2xl focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>

                {/* Menú de Navegación (Visible en pantallas grandes) */}
                <nav className="hidden lg:flex space-x-6">
                    {navItems.map((item) => (
                        <a 
                            key={item.href}
                            href={item.href} 
                            className="text-white hover:text-violet-500 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Div vacío para mantener la consistencia del layout, si es necesario */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Elementos adicionales si los hubiera, en este caso ninguno */}
                </div>
            </div>

            {/* Menú Desplegable (Visible en móvil cuando está abierto) */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black/80 backdrop-blur-lg pb-4">
                    <nav className="flex flex-col items-center space-y-4 pt-2">
                        {navItems.map((item) => (
                            <a 
                                key={item.href}
                                href={item.href} 
                                onClick={handleLinkClick} // Cierra el menú al hacer clic
                                className="text-white text-lg font-medium hover:text-violet-500 transition-colors w-full text-center py-2"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}

// Nota: La importación de 'div' de 'framer-motion/client' fue eliminada ya que no se utiliza en este ejemplo.