"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuestionCard({ question, onAnswer }: any) {
  return (
    <div className="text-center">

      <h2 className="text-lg md:text-2xl mb-6 leading-relaxed px-2">
        {question.question}
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {question.options.map((option: any) => (
          <motion.div
            key={option.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer(option.name)}
            className="bg-black/40  p-3 rounded-2xl cursor-pointer shadow-lg border border-slate-700 hover:border-purple-500 transition"
          >
            <Image
              src={option.image}
              alt={option.name}
              width={80}
              height={80}
              className="mx-auto rounded-full object-cover"
            />

            <p className="mt-2 text-sm md:text-base">
              {option.name}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
}