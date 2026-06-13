"use client";
import { useEffect, useRef } from "react";

export default function PixelatedImage({ src, isRevealed }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    let rafId;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true });

      let startTime = null;
      const duration = 1500;

      // Background to show while/where dots haven't covered the canvas
      const bgColor = "#000000";

      const animate = (time) => {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        // Ease Out Cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        // Once fully eased, just draw the crisp final image
        if (progress >= 1) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          return;
        }

        // Grid resolution: coarse (large cells/dots) -> fine (small cells/dots)
        // 80px cells -> ~4px cells
        const cellSize = Math.max(4, Math.floor(80 * (1 - eased) + 4 * eased));

        const cols = Math.max(1, Math.ceil(canvas.width / cellSize));
        const rows = Math.max(1, Math.ceil(canvas.height / cellSize));

        // Downscale the source image to one pixel per cell to sample colors
        offscreen.width = cols;
        offscreen.height = rows;
        offCtx.clearRect(0, 0, cols, rows);
        offCtx.drawImage(img, 0, 0, cols, rows);

        const { data } = offCtx.getImageData(0, 0, cols, rows);

        // Fill background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dot radius grows from small (just appearing) to ~covering the cell
        // so the dots visually merge into the full image near the end
        const maxRadius = cellSize / 2;
        const dotRadius = Math.max(0.5, maxRadius * (0.15 + 0.85 * eased));

        for (let row = 0; row < rows; row++) {
          for (let col = 0; col < cols; col++) {
            const i = (row * cols + col) * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3] / 255;

            if (a === 0) continue;

            const cx = col * cellSize + cellSize / 2;
            const cy = row * cellSize + cellSize / 2;

            ctx.beginPath();
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            ctx.arc(cx, cy, dotRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
    };

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [src, isRevealed]);

  return (
    <canvas ref={canvasRef} className="h-full w-full object-cover object-top" />
  );
}
