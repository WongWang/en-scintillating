"use client";

import { ThumbsUp } from "@icon-park/react";

export default function EmptySuggession() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 min-h-screen">
      <ThumbsUp theme="outline" size="100" fill="#eceff4"/>
      <p className="text-4xl">Great job!</p>
      <p>No errors found. Keep up the good work!</p>
    </div>
  );
}

