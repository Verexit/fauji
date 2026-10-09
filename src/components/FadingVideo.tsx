import React, { useEffect, useRef, useState } from 'react';

export interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export function FadingVideo({ src, className = '', style }: FadingVideoProps) {
  const sources = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fadeRafRef = useRef<number | null>(null);
  const opacityRef = useRef<number>(0);
  const isFadingOutRef = useRef<boolean>(false);

  const currentSrc = sources[index % sources.length];

  const animateOpacity = (target: number, duration: number, onComplete?: () => void) => {
    if (fadeRafRef.current) {
      cancelAnimationFrame(fadeRafRef.current);
    }
    const start = opacityRef.current;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const val = start + (target - start) * progress;
      opacityRef.current = val;
      if (videoRef.current) {
        videoRef.current.style.opacity = `${val}`;
      }
      if (progress < 1) {
        fadeRafRef.current = requestAnimationFrame(tick);
      } else {
        fadeRafRef.current = null;
        if (onComplete) onComplete();
      }
    };

    fadeRafRef.current = requestAnimationFrame(tick);
  };

  const handleLoadedData = () => {
    isFadingOutRef.current = false;
    // Fades in over 500ms using requestAnimationFrame
    animateOpacity(1, 500);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;

    const remaining = video.duration - video.currentTime;
    if (remaining <= 0.55 && !isFadingOutRef.current && video.duration > 0.6) {
      isFadingOutRef.current = true;
      // Fades out over 550ms
      animateOpacity(0, 550);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (sources.length === 1) {
      if (video) {
        video.currentTime = 0;
        video
          .play()
          .then(() => {
            isFadingOutRef.current = false;
            animateOpacity(1, 500);
          })
          .catch(() => {
            isFadingOutRef.current = false;
            animateOpacity(1, 500);
          });
      }
    } else {
      isFadingOutRef.current = false;
      opacityRef.current = 0;
      if (video) {
        video.style.opacity = '0';
      }
      setIndex((prev) => (prev + 1) % sources.length);
    }
  };

  useEffect(() => {
    return () => {
      if (fadeRafRef.current) {
        cancelAnimationFrame(fadeRafRef.current);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{
        opacity: 0,
        ...style,
      }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
}
