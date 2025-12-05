import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// Opcional: Importar íconos para mejorar la visualización del contacto
import { Mail, Smartphone } from 'lucide-react'; 

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {

  const emailAddress = "thomaspinda23@gmail.com";
  const phoneNumber = "+56 9 5626 6311";
  
  const subject = encodeURIComponent("Oferta de trabajo");
  const body = encodeURIComponent("Hola Thomas,\n\nMe interesaría discutir una oportunidad contigo.");
  
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  const whatsappLink = "https://wa.me/56956266311";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
          >
            <div className="mx-4 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-white mb-4">Contáctame</h3>

              <div className="space-y-4">
                
                <a 
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                    <Mail size={24} className="mr-3 text-violet-400 group-hover:text-violet-300 transition-colors mt-1" />
                    <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white font-medium">{emailAddress}</p>
                    </div>
                </a>
                
                <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                    <Smartphone size={24} className="mr-3 text-violet-400 group-hover:text-violet-300 transition-colors mt-1" />
                    <div>
                        <p className="text-sm text-gray-400">WhatsApp</p>
                        <p className="text-white font-medium">{phoneNumber}</p>
                    </div>
                </a>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};