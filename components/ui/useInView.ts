"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

type Handler = (inView: boolean) => void;

// Un único IntersectionObserver compartido por todos los elementos.
const handlers = new WeakMap<Element, Handler>();
let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          handlers.get(entry.target)?.(entry.isIntersecting);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
  }
  return observer;
}

export function useInView(ref: RefObject<Element | null>, onChange: Handler) {
  const latest = useRef(onChange);

  useEffect(() => {
    latest.current = onChange;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = getObserver();
    handlers.set(el, (inView) => latest.current(inView));
    io.observe(el);
    return () => {
      io.unobserve(el);
      handlers.delete(el);
    };
  }, [ref]);
}
