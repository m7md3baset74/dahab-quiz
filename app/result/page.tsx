"use client";

import { Suspense } from "react";
import ResultContent from "./ResultContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}