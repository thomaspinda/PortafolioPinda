"use client";
import { faLinkedin, faGithub, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mail, Smartphone } from 'lucide-react'; 

export const Footer = () => {
    const emailAddress = "thomaspinda23@gmail.com";
    const phoneNumber = "+56 9 5626 6311";
    
    const subject = encodeURIComponent("Oferta de trabajo");
    const body = encodeURIComponent("Hola Thomas,\n\nMe interesaría discutir una oportunidad contigo.");
    
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    const whatsappLink = "https://wa.me/56956266311";

    return (
        <footer id="contact" className="w-full z-40 bg-transparent backdrop-blur-lg border-t border-white/10 mt-20">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
                
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Thomas Pinda. Todos los derechos reservados.
                </div>

                <nav className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8">
                    
                    <div className="flex items-center text-white hover:text-violet-500 transition-colors">
                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-violet-400" />
                        <a 
                            href={whatsappLink} 
                            className="text-sm font-medium"
                        >
                            +56 9 5626 6311
                        </a>
                    </div>

                    {/* Correo Electrónico */}
                    <div className="flex items-center text-white hover:text-violet-500 transition-colors">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-violet-400" />
                        <a 
                            href={mailtoLink} 
                            className="text-sm font-medium"
                        >
                            thomaspinda@gmail.com
                        </a>
                    </div>
                </nav>
            </div>
            
            <div className="flex justify-center space-x-6 pb-6 pt-4">
                <a 
                    href="https://www.linkedin.com/in/thomas-pinda-98bb00345/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-blue-400 transition duration-300"
                    aria-label="LinkedIn"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a 
                    href="https://github.com/thomaspinda" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-white transition duration-300"
                    aria-label="GitHub"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </footer>
    );
}