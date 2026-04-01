"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuestionCard({
  question,
  onAnswer,
}: any) {
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-6">{question.question}</h2>

      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option: any) => (
          <motion.div
            key={option.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAnswer(option.name)}
            className="bg-slate-800 p-4 rounded-2xl cursor-pointer shadow-lg border border-slate-700 hover:border-purple-500 transition"
          >
            <Image
              src={option.image}
              alt={option.name}
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
            <p className="mt-2">{option.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}