"use client";

import InfoArticle from "@/ui/hero-section/InfoArticle";
import AsianFoodArticle from "@/ui/hero-section/AsianFoodArticle";
import BreakfastArticle from "@/ui/hero-section/BreakfastArticle";
import ArrowButton from "@/ui/icons/ArrowButton";
import { TouchEvent, useRef, useState } from "react";

const articles = [InfoArticle, AsianFoodArticle, BreakfastArticle];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [bumpButton, setBumpButton] = useState<"left" | "right" | null>(null);

  const touchStartRef = useRef<number | null>(null);
  const touchEndRef = useRef<number | null>(null);

  // Minimum distance in pixels for a swipe to be registered
  const minSwipeDistance = 50;

  const prev = () => {
    setBumpButton("left");
    setTimeout(() => setBumpButton(null), 300);
    setIndex((prevIndex) => (prevIndex === 0 ? articles.length - 1 : prevIndex - 1));
  };
  const next = () => {
    setBumpButton("right");
    setTimeout(() => setBumpButton(null), 300);
    setIndex((prevIndex) => (prevIndex === articles.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchEndRef.current = null;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) {
      return;
    }

    const distance = touchStartRef.current - touchEndRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    } else if (isRightSwipe) {
      prev();
    }

    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="flex items-center gap-4 px-4 md:px-10">
        <button
          onClick={prev}
          className={`z-10 hidden h-8 w-5 flex-shrink-0 stroke-caption hover:stroke-foreground lg:block ${bumpButton === "left" ? "bump-left" : ""}`}
        >
          <ArrowButton className="h-4 w-6 rotate-90" />
        </button>

        <div
          className="w-full overflow-hidden rounded-outer"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex gap-16 transition-transform duration-500 ease-in-out" // gap-16 is 4rem
            style={{ transform: `translateX(calc(-${index * 100}% - ${4 * index}rem))` }}
          >
            {articles.map((ArticleComponent, i) => (
              <div key={i} className="relative w-full flex-shrink-0">
                <ArticleComponent />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className={`z-10 hidden h-8 w-5 flex-shrink-0 stroke-caption hover:stroke-foreground lg:block ${bumpButton === "right" ? "bump-right" : ""}`}
        >
          <ArrowButton className="h-4 w-6 -rotate-90" />
        </button>
      </div>

      {/* Dots for navigation */}
      <div className="m-auto flex gap-4">
        {articles.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full p-[6px] transition duration-500 ${index === i ? "bg-primary" : "bg-separator"}`}
            aria-label={`Go to article ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
