"use client";

import Card from "@/components/Card/Card";
import LetterDensity from "@/components/LetterDensity";
import Textarea from "@/components/Textarea";
import { useEffect, useState } from "react";

export default function Home() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [counterObj, setCounterObj] = useState({
    characterCount: 0,
    wordCount: 0,
    sentenceCount: 0,
  });
  const handleInput = (value: string) => {
    // console.log(value);
    setTextAreaValue(value);
  };

  useEffect(() => {
    const text = textAreaValue.trim();
    if (!text) {
      setCounterObj({ characterCount: 0, wordCount: 0, sentenceCount: 0 });
      return;
    }
    setCounterObj({
      characterCount: text.length,
      wordCount: text.split(/\s+/).filter(Boolean).length,
      sentenceCount: text.split(/[.!?]+/).filter(Boolean).length,
    });
  }, [textAreaValue]);
  return (
    <main className="overflow-hidden text-center">
      <section className="p-4 md:py-2 md:px-8 xl:px-64">
        <h1 className="text-4xl md:text-6xl md:leading-[72px] xl:px-32">
          Analyze your text in real-time.
        </h1>
        <Textarea onInput={handleInput} value={textAreaValue} />
        <Card {...counterObj} />
        <LetterDensity text={textAreaValue.trim()}/>
      </section>
    </main>
  );
}
