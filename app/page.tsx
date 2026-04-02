"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* 🖼 Background Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/bg-desktop.png"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🖼 Background Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="backgrounds/mobile.png"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🌑 Overlay (عشان النص يبان) */}
      <div className="absolute inset-0 backdrop-blur-custom bg-black/40 " />

      {/* ✨ Glow Effect */}
      {/* <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" /> */}

      {/* 🎮 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-relaxed">
           عادات سفرية<br />
           🤡 ربنا يقطعها
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-lg">
          اختبر نفسك وشوف إنت عارف صحابك قد إيه 😂🔥
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/game")}
          className="bg-purple-600/60 hover:bg-purple-700/60 px-8 py-4 rounded-2xl text-lg shadow-lg shadow-purple-500/30 transition"
        >
          يلا نبدأ 🔥
        </motion.button>
      </motion.div>
    </div>
  );
}