"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-4xl mb-6">😏 مين أكتر واحد فاهم الشلة؟</h1>

      <button
        onClick={() => router.push("/game")}
        className="bg-purple-600 px-6 py-3 rounded-xl text-lg hover:scale-105 transition"
      >
        يلا نبدأ 🔥
      </button>
    </div>
  );
}