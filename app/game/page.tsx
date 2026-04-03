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

  const bgAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/bg.mp3");
    audio.loop = true;
    audio.volume = 0.3;

    bgAudioRef.current = audio;

    audio.play().catch(() => {});

    return () => {
      audio.pause();
    };
  }, []);

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
    startBgSound();

    const correct = questions[current].correctAnswer;

    if (answer === correct) {
      setScore((prev) => prev + 1);
      setFeedback("براڤو علييييك 🔥🔥");
      if (
        answer !== correct &&
        typeof window !== "undefined" &&
        navigator.vibrate
      ) {
        navigator.vibrate(200); // اهتزاز 200ms
      }
      playCorrectSound();
    } else {
      setFeedback(`غلط 😂 الاجابة كانت ${correct}`);
    }

    setShowFeedback(true);

    setTimeout(() => {
      setShowFeedback(false);

      const next = current + 1;

      if (next < questions.length) {
        setCurrent(next);
      } else {
        router.push(`/result?score=${score + (answer === correct ? 1 : 0)}`);
      }
    }, 1200);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="p-12 relative min-h-screen flex flex-col items-center justify-center text-white px-4 overflow-hidden">
      {/* 🖼 Mobile Background ONLY */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="backgrounds/room.jpg"
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-transparent " />

      {/* Glow */}
      {/* <div className="absolute w-[250px] h-[250px] bg-purple-600 opacity-20 blur-[100px] rounded-full top-10 left-1/2 -translate-x-1/2" /> */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Progress */}
        <div className="mb-6">
          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-200 mt-2 text-center">
            سؤال {current + 1} من {questions.length}
          </p>
        </div>

        {/* Question */}
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />

        {/* Feedback */}
        {showFeedback && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            

            {/* Feedback Card */}
            <div
              className={`relative z-10 bg-green-500/5 backdrop-blur-xs border-1 border-purple-500 rounded-xl px-16 py-20  
        text-center text-white shadow-lg animate-scaleIn
        ${feedback.includes("غلط") ? "animate-shake bg-red-500/5 px-16 py-20" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-bold">{feedback}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
