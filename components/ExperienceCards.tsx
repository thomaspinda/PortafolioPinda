"use client";
import { useState } from "react";
import { ExperienceCard } from "./ExperienceCard";
import { ContactModal } from "./ContactModal";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Experience {
  title: string;
  description: string;
  date: string;
}

interface ExperienceCardsProps {
  experiences: Experience[];
}

export default function ExperienceCards({ experiences }: ExperienceCardsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            title={exp.title}
            description={exp.description}
            date={exp.date}
          />
        ))}

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => setIsModalOpen(true)}
          className="group flex flex-col items-center justify-center min-h-[200px] 
                     bg-white/10 dark:bg-white/5 backdrop-blur-xl 
                     border border-white/20 dark:border-white/10 border-dashed
                     rounded-2xl p-6 shadow-lg 
                     hover:shadow-2xl hover:bg-white/15 hover:border-white/40 
                     transition-all cursor-pointer text-center"
        >
          <div className="p-4 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-1">Añadir experiencia</h3>
        </motion.button>
      </div>

      {/* Modal Component */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}