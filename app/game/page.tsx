"use client";

import { useState, useEffect, useRef } from "react";
import { questions } from "../../data/questions";
import QuestionCard from "../../components/QuestionsCard";
import { useRouter } from "next/navigation";

export default function Game() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const router = useRouter();

  // 🎧 background audio ref
  const bgAudioRef = useRef<HTMLAudioElement | null>(null);

  // 🔊 تشغيل صوت الخلفية
  useEffect(() => {
    const audio = new Audio("/sounds/bg.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    bgAudioRef.current = audio;

    // محاولة التشغيل (ممكن المتصفح يمنعها)
    audio.play().catch(() => {
      console.log("Autoplay blocked");
    });

    return () => {
      audio.pause();
    };
  }, []);

  // 🔥 تشغيل الصوت بعد أول interaction (حل مشكلة autoplay)
  const startBgSound = () => {
    if (bgAudioRef.current) {
      bgAudioRef.current.play().catch(() => {});
    }
  };

  const playCorrectSound = () => {
    const audio = new Audio("/sounds/correct.mp3");
    audio.play();
  };

  const handleAnswer = (answer: string) => {
    startBgSound(); // 👈 أول ما يضغط يبدأ الصوت

    const correct = questions[current].correctAnswer;

    if (answer === correct) {
      setScore((prev) => prev + 1);
      setFeedback("براڤو علييييك 🔥🔥");
      playCorrectSound();
    } else {
      setFeedback(`غلط 😂 الإجابة كانت ${correct}`);
    }

    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);

      const next = current + 1;

      if (next < questions.length) {
        setCurrent(next);
      } else {
        router.push(
          `/result?score=${score + (answer === correct ? 1 : 0)}`
        );
      }
    }, 1500);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="h-screen flex flex-col items-center justify-center text-white px-4">

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div className="h-2 bg-slate-700 rounded">
          <div
            className="h-2 bg-purple-500 rounded transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <QuestionCard
        question={questions[current]}
        onAnswer={handleAnswer}
      />

      {/* Feedback */}
      {showFeedback && (
        <div className="mt-6 text-xl animate-bounce">
          {feedback}
        </div>
      )}
    </div>
  );
}