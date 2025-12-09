"use client";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  description: string;
  date: string;
}

export function ExperienceCard({ title, description, date }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white/10 dark:bg-white/5 backdrop-blur-xl 
                 border border-white/20 dark:border-white/10 
                 rounded-2xl p-6 shadow-lg 
                 hover:shadow-2xl transition-all text-white"
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed mb-3">{description}</p>
      <span className="text-sm text-gray-400">{date}</span>
    </motion.div>
  );
}
