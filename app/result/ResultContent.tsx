"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ResultContent() {
  const params = useSearchParams();
  const router = useRouter();

  const score = Number(params.get("score"));

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (score > questions.length / 2) {
      setShowConfetti(true);
    }
  }, [score]);

  let message = "";

  if (score === questions.length) {
    message = "🔥 إنت حافظ الشلة صم!";
  } else if (score > questions.length / 2) {
    message = "😏 مش بطال يا نجم";
  } else {
    message = "😂 إنت محتاج تقعد معانا أكتر";
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white text-center px-4">

      {showConfetti && <Confetti />}

      <h1 className="text-4xl mb-4">سكورك: {score}/5</h1>

      <p className="text-xl mb-6">{message}</p>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/")}
          className="bg-purple-600 px-6 py-3 rounded-xl"
        >
          العب تاني 🔁
        </button>

        <button
          onClick={() => {
            navigator.clipboard.writeText(
              `أنا جبت ${score} من ${questions.length} 😎🔥`
            );
            alert("اتنسخت ابعتها للشلة بقى 😏");
          }}
          className="bg-green-600 px-6 py-3 rounded-xl"
        >
          شارك النتيجة 📤
        </button>
      </div>
    </div>
  );
}