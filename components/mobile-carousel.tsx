"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type MobileCarouselProps = {
  ariaLabel: string;
  autoPlayIntervalMs?: number;
  children: ReactNode[];
  className?: string;
  resumeDelayMs?: number;
};

export function MobileCarousel({
  ariaLabel,
  autoPlayIntervalMs = 3600,
  children,
  className = "",
  resumeDelayMs = 4500
}: MobileCarouselProps) {
  const items = useMemo(() => children.filter(Boolean), [children]);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number>();

  const touchStartX = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);
  const autoplayTimeoutRef = useRef<number | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const itemCount = items.length;

  const clearResumeTimeout = () => {
    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
  };

  const scheduleResume = () => {
    clearResumeTimeout();
    pauseTimeoutRef.current = window.setTimeout(() => {
      setIsPaused(false);
      pauseTimeoutRef.current = null;
    }, resumeDelayMs);
  };

  const pauseAutoplay = () => {
    setIsPaused(true);
    scheduleResume();
  };

  const goToIndex = (index: number) => {
    if (itemCount === 0) {
      return;
    }

    setActiveIndex((index + itemCount) % itemCount);
  };

  useEffect(() => {
    if (itemCount <= 1 || reduceMotion || isPaused) {
      return;
    }

    autoplayTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % itemCount);
    }, autoPlayIntervalMs);

    return () => {
      if (autoplayTimeoutRef.current !== null) {
        window.clearTimeout(autoplayTimeoutRef.current);
        autoplayTimeoutRef.current = null;
      }
    };
  }, [activeIndex, autoPlayIntervalMs, isPaused, itemCount, reduceMotion]);

  useEffect(() => {
    if (itemCount === 0) {
      return;
    }

    const updateHeight = () => {
      const heights = slideRefs.current.map((slide) => slide?.offsetHeight ?? 0);
      const maxHeight = Math.max(...heights, 0);

      if (maxHeight > 0) {
        setViewportHeight(maxHeight);
      }
    };

    updateHeight();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(updateHeight);
    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => observer.disconnect();
  }, [itemCount, items]);

  useEffect(() => {
    return () => {
      clearResumeTimeout();

      if (autoplayTimeoutRef.current !== null) {
        window.clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, []);

  if (itemCount === 0) {
    return null;
  }

  return (
    <div className={`md:hidden ${className}`.trim()}>
      <div
        role="region"
        aria-label={ariaLabel}
        className="touch-pan-y overflow-hidden"
        style={viewportHeight ? { minHeight: viewportHeight } : undefined}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
          pauseAutoplay();
        }}
        onTouchEnd={(event) => {
          const startX = touchStartX.current;
          const endX = event.changedTouches[0]?.clientX ?? null;
          touchStartX.current = null;

          if (startX === null || endX === null) {
            return;
          }

          const deltaX = endX - startX;

          if (Math.abs(deltaX) < 50) {
            return;
          }

          goToIndex(activeIndex + (deltaX < 0 ? 1 : -1));
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!reduceMotion) {
            scheduleResume();
          }
        }}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={() => {
          if (!reduceMotion) {
            scheduleResume();
          }
        }}
      >
        <div
          className={`flex will-change-transform ${
            reduceMotion ? "transition-none" : "transition-transform duration-500 ease-out"
          }`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className="w-full shrink-0 px-1"
              aria-hidden={activeIndex !== index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {itemCount > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1} of ${itemCount}`}
              aria-pressed={activeIndex === index}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-cobalt" : "w-2.5 bg-slate-300"
              }`}
              onClick={() => {
                pauseAutoplay();
                goToIndex(index);
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
