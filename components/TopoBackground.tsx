import { useEffect, useRef } from "react";

export default function TopographicMapBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const container = canvas.parentElement;
    const width = canvas.width = container.clientWidth * window.devicePixelRatio;
    const height = canvas.height = container.clientHeight * window.devicePixelRatio;
    canvas.style.width = container.clientWidth + 'px';
    canvas.style.height = container.clientHeight + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Enhanced Perlin noise with gradients
    const permutation = [];
    for (let i = 0; i < 256; i++) permutation[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }
    const p = [...permutation, ...permutation];

    function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    function lerp(a, b, t) { return a + t * (b - a); }

    function grad(hash, x, y) {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : (h === 12 || h === 14 ? x : 0);
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    function noise(x, y) {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      const u = fade(x);
      const v = fade(y);
      const A = p[X] + Y, AA = p[A], AB = p[A + 1];
      const B = p[X + 1] + Y, BA = p[B], BB = p[B + 1];
      return lerp(lerp(grad(p[AA], x, y), grad(p[BA], x - 1, y), u),
                  lerp(grad(p[AB], x, y - 1), grad(p[BB], x - 1, y - 1), u), v);
    }

    // Advanced terrain generation with realistic features
    function terrainHeight(x, y, t) {
      const scale = 0.002;
      let height = 0;
      let amplitude = 1;
      let frequency = scale;
      
      // Base terrain - large scale features
      height += noise(x * frequency + t * 0.05, y * frequency + t * 0.03) * amplitude * 2;
      
      // Mountain ridges - directional features
      frequency *= 1.8; amplitude *= 0.7;
      const ridge1 = Math.abs(noise(x * frequency * 0.3 + t * 0.02, y * frequency + t * 0.04));
      height += (1 - ridge1) * amplitude * 1.5;
      
      // Secondary ridges at different angle
      const ridge2 = Math.abs(noise(x * frequency * 0.5 + y * frequency * 0.2 + t * 0.03, 
                                   y * frequency * 0.8 - x * frequency * 0.1 + t * 0.02));
      height += (1 - ridge2) * amplitude * 0.8;
      
      // Medium scale hills
      frequency *= 2.1; amplitude *= 0.6;
      height += noise(x * frequency + t * 0.04, y * frequency + t * 0.05) * amplitude;
      
      // Drainage patterns - valleys
      frequency *= 1.5; amplitude *= 0.4;
      const drainage = noise(x * frequency + t * 0.01, y * frequency + t * 0.02);
      height -= Math.max(0, -drainage) * amplitude * 2;
      
      // Fine detail
      frequency *= 2.5; amplitude *= 0.3;
      height += noise(x * frequency + t * 0.06, y * frequency + t * 0.07) * amplitude;
      
      // Very fine surface texture
      frequency *= 3; amplitude *= 0.15;
      height += noise(x * frequency + t * 0.08, y * frequency + t * 0.09) * amplitude;
      
      return height;
    }

    // High-resolution height field
    const gridRes = 4;
    const cols = Math.ceil(container.clientWidth / gridRes) + 2;
    const rows = Math.ceil(container.clientHeight / gridRes) + 2;
    let heightField = [];

    function updateHeightField() {
      for (let j = 0; j < rows; j++) {
        if (!heightField[j]) heightField[j] = [];
        for (let i = 0; i < cols; i++) {
          heightField[j][i] = terrainHeight(i * gridRes, j * gridRes, time);
        }
      }
    }

    // Advanced marching squares with sub-pixel precision
    function extractContour(elevation) {
      const segments = [];
      
      for (let j = 0; j < rows - 1; j++) {
        for (let i = 0; i < cols - 1; i++) {
          const x = i * gridRes;
          const y = j * gridRes;
          
          const h1 = heightField[j][i];         // top-left
          const h2 = heightField[j][i + 1];     // top-right  
          const h3 = heightField[j + 1][i + 1]; // bottom-right
          const h4 = heightField[j + 1][i];     // bottom-left
          
          let config = 0;
          if (h1 > elevation) config |= 1;
          if (h2 > elevation) config |= 2;
          if (h3 > elevation) config |= 4;
          if (h4 > elevation) config |= 8;
          
          if (config === 0 || config === 15) continue;
          
          const edges = [];
          
          // Top edge (between h1 and h2)
          if ((h1 > elevation) !== (h2 > elevation)) {
            const t = Math.abs(h2 - h1) > 0.001 ? (elevation - h1) / (h2 - h1) : 0.5;
            edges.push({ x: x + t * gridRes, y: y, edge: 0 });
          }
          
          // Right edge (between h2 and h3)
          if ((h2 > elevation) !== (h3 > elevation)) {
            const t = Math.abs(h3 - h2) > 0.001 ? (elevation - h2) / (h3 - h2) : 0.5;
            edges.push({ x: x + gridRes, y: y + t * gridRes, edge: 1 });
          }
          
          // Bottom edge (between h3 and h4)
          if ((h3 > elevation) !== (h4 > elevation)) {
            const t = Math.abs(h3 - h4) > 0.001 ? (elevation - h4) / (h3 - h4) : 0.5;
            edges.push({ x: x + t * gridRes, y: y + gridRes, edge: 2 });
          }
          
          // Left edge (between h4 and h1)
          if ((h4 > elevation) !== (h1 > elevation)) {
            const t = Math.abs(h4 - h1) > 0.001 ? (elevation - h1) / (h4 - h1) : 0.5;
            edges.push({ x: x, y: y + t * gridRes, edge: 3 });
          }
          
          // Connect edges based on configuration
          if (edges.length === 2) {
            segments.push([
              { x: edges[0].x, y: edges[0].y },
              { x: edges[1].x, y: edges[1].y }
            ]);
          } else if (edges.length === 4) {
            // Saddle point - check center to determine connection
            const center = terrainHeight(x + gridRes/2, y + gridRes/2, time);
            if ((center > elevation) === (h1 > elevation)) {
              segments.push([
                { x: edges[0].x, y: edges[0].y },
                { x: edges[1].x, y: edges[1].y }
              ]);
              segments.push([
                { x: edges[2].x, y: edges[2].y },
                { x: edges[3].x, y: edges[3].y }
              ]);
            } else {
              segments.push([
                { x: edges[0].x, y: edges[0].y },
                { x: edges[3].x, y: edges[3].y }
              ]);
              segments.push([
                { x: edges[1].x, y: edges[1].y },
                { x: edges[2].x, y: edges[2].y }
              ]);
            }
          }
        }
      }
      
      return segments.filter(seg => seg && seg[0] && seg[1] && 
                            typeof seg[0].x === 'number' && typeof seg[0].y === 'number' &&
                            typeof seg[1].x === 'number' && typeof seg[1].y === 'number');
    }

    // Sophisticated path connection with Douglas-Peucker simplification
    function connectAndSimplify(segments, tolerance = 0.5) {
      if (!segments || segments.length === 0) return [];
      
      // Filter out any invalid segments
      const validSegments = segments.filter(seg => 
        seg && seg.length === 2 && 
        seg[0] && seg[1] && 
        typeof seg[0].x === 'number' && typeof seg[0].y === 'number' &&
        typeof seg[1].x === 'number' && typeof seg[1].y === 'number'
      );
      
      if (validSegments.length === 0) return [];
      
      const paths = [];
      const used = new Set();
      
      for (let i = 0; i < validSegments.length; i++) {
        if (used.has(i)) continue;
        
        const path = [validSegments[i][0], validSegments[i][1]];
        used.add(i);
        
        let extended = true;
        while (extended) {
          extended = false;
          const threshold = gridRes * 1.2;
          
          for (let j = 0; j < validSegments.length; j++) {
            if (used.has(j)) continue;
            
            const lastPoint = path[path.length - 1];
            const firstPoint = path[0];
            
            const d1 = Math.hypot(lastPoint.x - validSegments[j][0].x, lastPoint.y - validSegments[j][0].y);
            const d2 = Math.hypot(lastPoint.x - validSegments[j][1].x, lastPoint.y - validSegments[j][1].y);
            const d3 = Math.hypot(firstPoint.x - validSegments[j][0].x, firstPoint.y - validSegments[j][0].y);
            const d4 = Math.hypot(firstPoint.x - validSegments[j][1].x, firstPoint.y - validSegments[j][1].y);
            
            if (d1 < threshold) {
              path.push(validSegments[j][1]);
              used.add(j);
              extended = true;
              break;
            } else if (d2 < threshold) {
              path.push(validSegments[j][0]);
              used.add(j);
              extended = true;
              break;
            } else if (d3 < threshold) {
              path.unshift(validSegments[j][1]);
              used.add(j);
              extended = true;
              break;
            } else if (d4 < threshold) {
              path.unshift(validSegments[j][0]);
              used.add(j);
              extended = true;
              break;
            }
          }
        }
        
        if (path.length > 4) {
          const simplified = douglasPeucker(path, tolerance);
          if (simplified.length > 1) {
            paths.push(simplified);
          }
        }
      }
      
      return paths;
    }

    // Douglas-Peucker line simplification
    function douglasPeucker(points, tolerance) {
      if (!points || points.length <= 2) return points || [];
      
      let maxDist = 0;
      let maxIndex = 0;
      
      for (let i = 1; i < points.length - 1; i++) {
        if (!points[i] || typeof points[i].x !== 'number' || typeof points[i].y !== 'number') continue;
        const dist = perpendicularDistance(points[i], points[0], points[points.length - 1]);
        if (dist > maxDist) {
          maxDist = dist;
          maxIndex = i;
        }
      }
      
      if (maxDist > tolerance) {
        const left = douglasPeucker(points.slice(0, maxIndex + 1), tolerance);
        const right = douglasPeucker(points.slice(maxIndex), tolerance);
        return [...left.slice(0, -1), ...right];
      }
      
      return [points[0], points[points.length - 1]];
    }

    function perpendicularDistance(point, lineStart, lineEnd) {
      if (!point || !lineStart || !lineEnd) return 0;
      
      const A = lineEnd.x - lineStart.x;
      const B = lineEnd.y - lineStart.y;
      const C = A * A + B * B;
      
      if (C === 0) return Math.hypot(point.x - lineStart.x, point.y - lineStart.y);
      
      const t = Math.max(0, Math.min(1, ((point.x - lineStart.x) * A + (point.y - lineStart.y) * B) / C));
      const projection = { x: lineStart.x + t * A, y: lineStart.y + t * B };
      
      return Math.hypot(point.x - projection.x, point.y - projection.y);
    }

    // Professional cartographic rendering
    function drawContourPath(points, isIndex, isSupplementary = false) {
      if (points.length < 2) return;
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      // Use catmull-rom splines for ultra-smooth curves
      if (points.length > 3) {
        for (let i = 1; i < points.length - 2; i++) {
          const p0 = points[i - 1];
          const p1 = points[i];
          const p2 = points[i + 1];
          const p3 = points[i + 2] || p2;
          
          const cp1x = p1.x + (p2.x - p0.x) / 6;
          const cp1y = p1.y + (p2.y - p0.y) / 6;
          const cp2x = p2.x - (p3.x - p1.x) / 6;
          const cp2y = p2.y - (p3.y - p1.y) / 6;
          
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
        }
        ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      } else {
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
      }
      
      if (isSupplementary) {
        ctx.setLineDash([3, 2]);
      } else {
        ctx.setLineDash([]);
      }
      
      ctx.stroke();
    }

    // Find peaks for spot elevations
    function findPeaks() {
      const peaks = [];
      const minDistance = 100;
      
      for (let j = 2; j < rows - 2; j++) {
        for (let i = 2; i < cols - 2; i++) {
          const center = heightField[j][i];
          let isPeak = true;
          
          // Check 8 neighbors
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              if (dx === 0 && dy === 0) continue;
              if (heightField[j + dy][i + dx] >= center) {
                isPeak = false;
                break;
              }
            }
            if (!isPeak) break;
          }
          
          if (isPeak && center > 0.5) {
            const x = i * gridRes;
            const y = j * gridRes;
            
            // Check minimum distance from other peaks
            let tooClose = false;
            for (const peak of peaks) {
              if (Math.hypot(x - peak.x, y - peak.y) < minDistance) {
                tooClose = true;
                break;
              }
            }
            
            if (!tooClose) {
              peaks.push({ x, y, elevation: Math.round(center * 100) });
            }
          }
        }
      }
      
      return peaks;
    }

    function draw() {
      // Clear with black background
      ctx.fillStyle = '#171717';
      ctx.fillRect(0, 0, container.clientWidth, container.clientHeight);
      
      updateHeightField();
      
      // Professional contour intervals (20-foot equivalent)
      const contourInterval = 0.2;
      const indexInterval = 1.0; // Every 5th contour
      
      // Generate elevation levels
      const elevations = [];
      for (let e = -3; e <= 4; e += contourInterval) {
        elevations.push(Math.round(e * 10) / 10);
      }
      
      // Supplementary contours (half intervals)
      const supplementaryElevations = [];
      for (let e = -3; e <= 4; e += contourInterval) {
        supplementaryElevations.push(Math.round((e + contourInterval/2) * 10) / 10);
      }
      
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Draw supplementary contours first (dashed, very subtle)
      ctx.strokeStyle = 'hsla(60, 68%, 94%, 0.2)';
      ctx.lineWidth = 0.3;
      supplementaryElevations.forEach(elevation => {
        const segments = extractContour(elevation);
        const paths = connectAndSimplify(segments, 0.8);
        paths.forEach(path => drawContourPath(path, false, true));
      });
      
      // Draw regular contours
      elevations.forEach(elevation => {
        const isIndex = Math.abs(elevation % indexInterval) < 0.05;
        const segments = extractContour(elevation);
        const paths = connectAndSimplify(segments, isIndex ? 0.3 : 0.6);
        
        // Set style based on contour type - subtle grays
        if (isIndex) {
          ctx.strokeStyle = 'hsla(60, 68%, 94%, 0.05)';
          ctx.lineWidth = 1.2;
        } else {
          ctx.strokeStyle = 'hsla(60, 68%, 94%, 0.1)';
          ctx.lineWidth = 0.6;
        }
        
        paths.forEach(path => drawContourPath(path, isIndex));
      });
      
      // Add spot elevations at peaks - very subtle
      const peaks = findPeaks();
      ctx.fillStyle = 'hsla(60, 68%, 94%, 0.25)';
      ctx.font = '9px Arial';
      ctx.textAlign = 'center';
      
      peaks.forEach(peak => {
        ctx.fillText(peak.elevation.toString(), peak.x, peak.y - 5);
        ctx.beginPath();
        ctx.arc(peak.x, peak.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });
      
      time += 0.03;
      animationFrameId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      const container = canvas.parentElement;
      canvas.width = container.clientWidth * window.devicePixelRatio;
      canvas.height = container.clientHeight * window.devicePixelRatio;
      canvas.style.width = container.clientWidth + 'px';
      canvas.style.height = container.clientHeight + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}