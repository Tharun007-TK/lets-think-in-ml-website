import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export interface ChromaItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  borderColorLight?: string;
  borderColorDark?: string;
  gradient?: string;
  gradientLight?: string;
  gradientDark?: string;
  url?: string;
}

export interface ChromaGridProps {
  items?: ChromaItem[];
  className?: string;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
  disableSpotlightOnMobile?: boolean;
}

type SetterFn = (v: number | string) => void;

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = '',
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = 'power3.out',
  disableSpotlightOnMobile = true
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<SetterFn | null>(null);
  const setY = useRef<SetterFn | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const [spotlightEnabled, setSpotlightEnabled] = useState(true);

  const data = items ?? [];

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
    setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
    if (disableSpotlightOnMobile) {
      const mql = window.matchMedia('(max-width: 640px)');
      const sync = (e: MediaQueryListEvent | MediaQueryList) => setSpotlightEnabled(!e.matches);
      sync(mql);
      const handler = (e: MediaQueryListEvent) => sync(e);
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = (e: React.PointerEvent) => {
    const r = rootRef.current!.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true
    });
  };

  const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
    const c = e.currentTarget as HTMLElement;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={spotlightEnabled ? handleMove : undefined}
      onPointerLeave={spotlightEnabled ? handleLeave : undefined}
      className={`relative w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 justify-items-center ${className}`}
      style={
        {
          '--r': `${radius}px`,
          '--x': '50%',
          '--y': '50%'
        } as React.CSSProperties
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={spotlightEnabled ? handleCardMove : undefined}
          className="group relative flex flex-col h-full min-h-[400px] rounded-[22px] overflow-hidden border-2 border-transparent transition-colors duration-300 w-full max-w-[340px] min-w-[260px] justify-self-center border-[var(--card-border)] bg-[var(--card-gradient-light)] dark:border-[var(--card-border-dark)] dark:bg-[var(--card-gradient-dark)]"
          style={
            {
              '--card-border': c.borderColorLight || c.borderColor || 'transparent',
              '--card-border-dark': c.borderColorDark || c.borderColor || 'transparent',
              '--card-gradient-light': c.gradientLight || c.gradient || 'linear-gradient(135deg, #e5e7eb, #d1d5db)',
              '--card-gradient-dark': c.gradientDark || c.gradient || 'linear-gradient(135deg, #1f2937, #0f172a)',
              '--spotlight-color': 'rgba(255,255,255,0.3)'
            } as React.CSSProperties
          }
          data-theme-aware
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
            }}
          />
          <div className="relative z-10 basis-1/2 min-h-[180px] max-h-[50%] p-[12px] box-border">
            <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover rounded-[14px]" />
          </div>
          <footer className="relative z-10 basis-1/2 flex flex-col justify-between gap-2 p-4 font-sans text-foreground">
            <h3 className="m-0 text-[1.05rem] font-semibold leading-snug text-foreground">{c.title}</h3>
            <p className="m-0 text-sm text-muted-foreground leading-relaxed">{c.subtitle}</p>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
