import React, { useRef, useEffect, useState } from "react";

const EdgeGraphic = ({ width, height }) => {
  const canvasRef = useRef();
  const svgRef = useRef();
  const [uniforms, setUniforms] = useState({
    time: 0,
    scale: 1.0 / 500.0,
    speed: 1.0 / 1000.0,
    coarseness: 0.5,
    offset: [1000 * Math.random(), 1000 * Math.random()],
    quantize: 16
  });
  const [points, setPoints] = useState([
    { x: 0.1 * width, y: 0.1 * height, dx: 1, dy: -1 },
    { x: 0.5 * width, y: 0.25 * height, dx: 0.5, dy: 2 },
    { x: 0.9 * width, y: 0.4 * height, dx: 0.25, dy: -1 },
    { x: 0.4 * width, y: 0.9 * height, dx: -0.3, dy: 0.5 },
    { x: 0.6 * width, y: 0.5 * height, dx: 0, dy: 0 }
  ]);

  const tick = () => {
    setUniforms(prev => ({ ...prev, time: prev.time + 0.1 }));
    setPoints(prev =>
      prev.map(p => {
        let x = p.x + 0.1 * p.dx;
        let y = p.y + 0.1 * p.dy;
        if (x > width) x -= width;
        if (x < 0) x += width;
        if (y > height) y -= height;
        if (y < 0) y += height;
        return { ...p, x, y };
      })
    );
    return uniforms;
  };

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = "#222";
      ctx.lineWidth = 1;

      for (let y = 0; y < height; y += 8) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 8) {
          const noise = Math.sin((x + t) * 0.01) + Math.cos((y + t) * 0.01);
          ctx.lineTo(x, y + noise * 4);
        }
        ctx.stroke();
      }

      t += uniforms.speed * 1000;
      tick();
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="graphic-container" style={{ width, height }}>
      <canvas ref={canvasRef} width={width} height={height} style={{ position: "absolute", top: 0, left: 0 }} />
      <svg ref={svgRef} width={width} height={height} style={{ position: "absolute", top: 0, left: 0 }}>
        {points.map((p, i) => (
          <path
            key={i}
            d="M 50,5 95,97.5 5,97.5 z"
            transform={`translate(${p.x},${p.y}) scale(0.1)`}
            fill="red"
            fillOpacity="0.8"
          />
        ))}
      </svg>
    </div>
  );
};

export default EdgeGraphic;
