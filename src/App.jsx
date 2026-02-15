import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const App = () => {
  const mountRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [handDetected, setHandDetected] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [mediapipeLoaded, setMediapipeLoaded] = useState(false);
  const [fingerPositions, setFingerPositions] = useState([]);
  const handPosRef = useRef({ x: 0, y: 0, z: 0 });
  const fingerPosRef = useRef([]);
  const handsInstanceRef = useRef(null);

  const romanticPhrases = [
    "Eres la estrella más brillante de mi universo 💫",
    "Cada día contigo es una nueva aventura 🌟",
    "Tu sonrisa ilumina mis días más oscuros ✨",
    "Eres mi planeta favorito en este cosmos infinito 🪐",
    "Contigo, hasta el espacio se siente como hogar 💖",
    "Eres la gravedad que mantiene mi mundo en órbita 🌍",
    "Mi amor por ti es infinito como el universo 💕",
    "Eres la luz que guía mi camino entre las estrellas 🌠"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % romanticPhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Cargar MediaPipe dinámicamente
  useEffect(() => {
    const loadMediaPipe = () => {
      if (window.Hands) {
        setMediapipeLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js';
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        console.log('MediaPipe cargado');
        setMediapipeLoaded(true);
      };
      script.onerror = () => {
        console.error('Error al cargar MediaPipe');
      };
      document.head.appendChild(script);

      const cameraScript = document.createElement('script');
      cameraScript.src = 'https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js';
      cameraScript.crossOrigin = 'anonymous';
      document.head.appendChild(cameraScript);
    };

    loadMediaPipe();
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000205);
    
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // ESTRELLAS MEJORADAS con brillo y destellos
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 7000;
    const starsPos = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    const starsSizes = new Float32Array(starsCount);
    const starsPhases = new Float32Array(starsCount); // Para animación de parpadeo

    for (let i = 0; i < starsCount; i++) {
      starsPos[i * 3] = (Math.random() - 0.5) * 500;
      starsPos[i * 3 + 1] = (Math.random() - 0.5) * 500;
      starsPos[i * 3 + 2] = (Math.random() - 0.5) * 400 - 80;
      starsSizes[i] = Math.random() * 2.5 + 0.5;
      starsPhases[i] = Math.random() * Math.PI * 2;
      
      const brightness = 0.8 + Math.random() * 0.2;
      const colorVariation = Math.random();
      
      // Colores variados para estrellas más realistas
      if (colorVariation < 0.7) {
        // Estrellas blancas/azuladas
        starsColors[i * 3] = brightness * 0.9;
        starsColors[i * 3 + 1] = brightness * 0.95;
        starsColors[i * 3 + 2] = brightness;
      } else if (colorVariation < 0.9) {
        // Estrellas amarillas/cálidas
        starsColors[i * 3] = brightness;
        starsColors[i * 3 + 1] = brightness * 0.9;
        starsColors[i * 3 + 2] = brightness * 0.7;
      } else {
        // Estrellas rojizas
        starsColors[i * 3] = brightness;
        starsColors[i * 3 + 1] = brightness * 0.7;
        starsColors[i * 3 + 2] = brightness * 0.6;
      }
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));
    starsGeometry.setAttribute('phase', new THREE.BufferAttribute(starsPhases, 1));

    // Shader personalizado para estrellas con destellos
    const starsVertexShader = `
      attribute float size;
      attribute float phase;
      varying vec3 vColor;
      varying float vPhase;
      void main() {
        vColor = color;
        vPhase = phase;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (400.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const starsFragmentShader = `
      varying vec3 vColor;
      varying float vPhase;
      uniform float time;
      
      void main() {
        // Crear forma de estrella con destellos
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        
        // Núcleo brillante circular
        float core = 1.0 - smoothstep(0.0, 0.15, dist);
        core = pow(core, 3.0);
        
        // Resplandor suave
        float glow = exp(-dist * 6.0) * 0.7;
        
        // Destellos en cruz
        float angle = atan(center.y, center.x);
        float sparkle1 = abs(sin(angle * 2.0)) * (1.0 - dist * 2.0);
        sparkle1 = pow(max(0.0, sparkle1), 4.0) * 0.5;
        
        float sparkle2 = abs(cos(angle * 2.0)) * (1.0 - dist * 2.0);
        sparkle2 = pow(max(0.0, sparkle2), 4.0) * 0.5;
        
        // Parpadeo suave
        float twinkle = sin(time * 2.0 + vPhase) * 0.3 + 0.7;
        
        // Combinar efectos
        float brightness = (core + glow + sparkle1 + sparkle2) * twinkle;
        
        // Color final con brillo
        vec3 finalColor = vColor * (1.0 + brightness * 0.5);
        float alpha = brightness * 0.9;
        
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const starsMaterial = new THREE.ShaderMaterial({
      vertexShader: starsVertexShader,
      fragmentShader: starsFragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      uniforms: {
        time: { value: 0 }
      }
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // SATURNO
    const particleCount = 15000;
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    let idx = 0;
    const planetCount = Math.floor(particleCount * 0.42);
    
    for (let i = 0; i < planetCount; i++) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 5.5 + Math.random() * 0.6;
      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(theta);

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = z;
      targetPositions[idx * 3] = x;
      targetPositions[idx * 3 + 1] = y;
      targetPositions[idx * 3 + 2] = z;

      const gradient = theta / Math.PI;
      const sparkle = Math.random();
      
      if (gradient < 0.3) {
        colors[idx * 3] = 0.15 + sparkle * 0.1;
        colors[idx * 3 + 1] = 0.6 + sparkle * 0.2;
        colors[idx * 3 + 2] = 1.0;
      } else if (gradient < 0.5) {
        const fade = (gradient - 0.3) / 0.2;
        colors[idx * 3] = 0.3 + fade * 0.3 + sparkle * 0.1;
        colors[idx * 3 + 1] = 0.5 - fade * 0.2 + sparkle * 0.1;
        colors[idx * 3 + 2] = 0.9;
      } else if (gradient < 0.7) {
        const fade = (gradient - 0.5) / 0.2;
        colors[idx * 3] = 0.6 + fade * 0.3;
        colors[idx * 3 + 1] = 0.3 + fade * 0.2;
        colors[idx * 3 + 2] = 0.7 - fade * 0.4;
      } else {
        const fade = (gradient - 0.7) / 0.3;
        colors[idx * 3] = 0.9 + fade * 0.1;
        colors[idx * 3 + 1] = 0.5 + fade * 0.2;
        colors[idx * 3 + 2] = 0.2;
      }

      sizes[idx] = 0.8 + Math.random() * 0.5;
      velocities[idx * 3] = 0;
      velocities[idx * 3 + 1] = 0;
      velocities[idx * 3 + 2] = 0;
      idx++;
    }

    // ANILLOS
    const ringCount = particleCount - planetCount;
    const ringBands = [
      { inner: 7.5, outer: 8.8, density: 0.5, thickness: 0.08 },
      { inner: 8.8, outer: 10.0, density: 1.0, thickness: 0.10 },
      { inner: 10.0, outer: 11.5, density: 1.4, thickness: 0.12 },
      { inner: 11.5, outer: 12.0, density: 0.2, thickness: 0.06 },
      { inner: 12.0, outer: 14.0, density: 1.2, thickness: 0.11 },
      { inner: 14.0, outer: 15.5, density: 0.7, thickness: 0.09 },
      { inner: 15.5, outer: 17.5, density: 0.4, thickness: 0.15 }
    ];

    ringBands.forEach((ring) => {
      const particlesInRing = Math.floor(ringCount * ring.density / 5.3);
      for (let i = 0; i < particlesInRing && idx < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = ring.inner + Math.random() * (ring.outer - ring.inner);
        const yOffset = (Math.random() - 0.5) * ring.thickness;

        positions[idx * 3] = Math.cos(angle) * radius;
        positions[idx * 3 + 1] = yOffset;
        positions[idx * 3 + 2] = Math.sin(angle) * radius;
        targetPositions[idx * 3] = positions[idx * 3];
        targetPositions[idx * 3 + 1] = positions[idx * 3 + 1];
        targetPositions[idx * 3 + 2] = positions[idx * 3 + 2];

        const variation = Math.random() * 0.15;
        const ringFade = (radius - 7.5) / 10.0;
        colors[idx * 3] = 1.0 - ringFade * 0.1;
        colors[idx * 3 + 1] = 0.75 - ringFade * 0.12 + variation;
        colors[idx * 3 + 2] = 0.30 + variation * 0.25;

        sizes[idx] = 0.6 + Math.random() * 0.4;
        velocities[idx * 3] = 0;
        velocities[idx * 3 + 1] = 0;
        velocities[idx * 3 + 2] = 0;
        idx++;
      }
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      varying float vDistance;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDistance = -mvPosition.z;
        gl_PointSize = size * (400.0 / vDistance);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vDistance;
      void main() {
        vec2 center = gl_PointCoord - 0.5;
        float dist = length(center);
        if (dist > 0.5) discard;
        float core = 1.0 - smoothstep(0.0, 0.2, dist);
        core = pow(core, 2.5);
        float glow = exp(-dist * 4.5) * 0.8;
        float depthFade = smoothstep(60.0, 25.0, vDistance);
        vec3 finalColor = vColor * (core + glow);
        float alpha = (core * 0.9 + glow * 0.5) * depthFade;
        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // LUCES
    scene.add(new THREE.AmbientLight(0x0a0a15, 0.3));
    const blueLight = new THREE.PointLight(0x4488ff, 1.5, 100);
    blueLight.position.set(-25, 20, 30);
    scene.add(blueLight);
    const orangeLight = new THREE.PointLight(0xff9944, 1.2, 100);
    orangeLight.position.set(25, -15, 30);
    scene.add(orangeLight);
    const backLight = new THREE.PointLight(0x6644aa, 0.5, 120);
    backLight.position.set(0, 0, -40);
    scene.add(backLight);
    
    // Luces para cada dedo
    const fingerLights = [];
    for (let i = 0; i < 5; i++) {
      const light = new THREE.PointLight(0xff66dd, 1.8, 35);
      fingerLights.push(light);
      scene.add(light);
    }



    // INTERACCIÓN MEJORADA CON DEDOS
    let sparkleTime = 0;
    const handleHandInteraction = () => {
      if (!handDetected) {
        fingerLights.forEach(light => light.intensity = 0);
        return;
      }

      sparkleTime += 0.05;
      
      const fingers = fingerPosRef.current;
      const influenceRadius = 10;
      const pushStrength = 0.8;
      const attractStrength = 0.3;

      // Actualizar luces de dedos
      if (fingers.length >= 5) {
        fingers.forEach((finger, idx) => {
          if (idx < fingerLights.length) {
            fingerLights[idx].position.set(finger.x, finger.y, finger.z);
            fingerLights[idx].intensity = 1.8;
          }
        });
      }

      // Interacción con partículas - cada dedo tiene efecto
      for (let i = 0; i < particleCount; i++) {
        let totalForceX = 0, totalForceY = 0, totalForceZ = 0;

        fingers.forEach((fingerPos, fingerIdx) => {
          const dx = positions[i * 3] - fingerPos.x;
          const dy = positions[i * 3 + 1] - fingerPos.y;
          const dz = positions[i * 3 + 2] - fingerPos.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < influenceRadius) {
            const force = ((influenceRadius - distance) / influenceRadius) * pushStrength;
            const direction = distance > 0 ? 1 / distance : 0;
            
            // Pulgar (índice 0) atrae, otros dedos empujan
            const multiplier = fingerIdx === 0 ? -attractStrength : 1;
            
            totalForceX += dx * direction * force * multiplier;
            totalForceY += dy * direction * force * multiplier;
            totalForceZ += dz * direction * force * multiplier;
          }
        });

        velocities[i * 3] += totalForceX;
        velocities[i * 3 + 1] += totalForceY;
        velocities[i * 3 + 2] += totalForceZ;
      }
    };

    // ANIMACIÓN
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      
      // Actualizar shader de estrellas con parpadeo
      if (starsMaterial.uniforms && starsMaterial.uniforms.time) {
        starsMaterial.uniforms.time.value = time;
      }
      
      handleHandInteraction();

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i * 3];
        positions[i * 3 + 1] += velocities[i * 3 + 1];
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        const dx = targetPositions[i * 3] - positions[i * 3];
        const dy = targetPositions[i * 3 + 1] - positions[i * 3 + 1];
        const dz = targetPositions[i * 3 + 2] - positions[i * 3 + 2];

        velocities[i * 3] += dx * 0.012;
        velocities[i * 3 + 1] += dy * 0.012;
        velocities[i * 3 + 2] += dz * 0.012;
        velocities[i * 3] *= 0.92;
        velocities[i * 3 + 1] *= 0.92;
        velocities[i * 3 + 2] *= 0.92;
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += 0.0018;
      particles.rotation.x = Math.sin(time * 0.15) * 0.06;
      stars.rotation.y += 0.00008;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [handDetected]);

  // MEDIAPIPE CON DETECCIÓN DE DEDOS
  useEffect(() => {
    if (!cameraActive || !mediapipeLoaded) return;

    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    if (!videoElement || !canvasElement) return;

    let animationFrameId;

    const initHands = async () => {
      try {
        if (!window.Hands) {
          console.error('MediaPipe no disponible');
          return;
        }

        const hands = new window.Hands({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        });

        hands.setOptions({
          maxNumHands: 1,
          modelComplexity: 1,
          minDetectionConfidence: 0.7,
          minTrackingConfidence: 0.7
        });

        // Suavizado para cada dedo
        const smoothFingers = [
          { x: 0, y: 0, z: 0 },
          { x: 0, y: 0, z: 0 },
          { x: 0, y: 0, z: 0 },
          { x: 0, y: 0, z: 0 },
          { x: 0, y: 0, z: 0 }
        ];

        hands.onResults((results) => {
          const canvasCtx = canvasElement.getContext('2d');
          canvasCtx.save();
          canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
          canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

          if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const hand = results.multiHandLandmarks[0];
            
            // Puntas de los dedos: Pulgar(4), Índice(8), Medio(12), Anular(16), Meñique(20)
            const fingerTips = [4, 8, 12, 16, 20];
            const newFingerPositions = [];

            fingerTips.forEach((tipIndex, i) => {
              const tip = hand[tipIndex];
              
              const targetX = (tip.x - 0.5) * 42;
              const targetY = -(tip.y - 0.5) * 42;
              const targetZ = -tip.z * 26;

              smoothFingers[i].x += (targetX - smoothFingers[i].x) * 0.25;
              smoothFingers[i].y += (targetY - smoothFingers[i].y) * 0.25;
              smoothFingers[i].z += (targetZ - smoothFingers[i].z) * 0.25;

              newFingerPositions.push({ ...smoothFingers[i] });

              // Dibujar puntas de dedos
              canvasCtx.fillStyle = i === 0 ? '#ff00ff' : '#00ff00';
              canvasCtx.beginPath();
              canvasCtx.arc(tip.x * canvasElement.width, tip.y * canvasElement.height, 5, 0, 2 * Math.PI);
              canvasCtx.fill();
            });

            fingerPosRef.current = newFingerPositions;
            setFingerPositions(newFingerPositions);
            
            // Palm para referencia
            const palm = hand[9];
            const palmX = (palm.x - 0.5) * 42;
            const palmY = -(palm.y - 0.5) * 42;
            const palmZ = -palm.z * 26;
            handPosRef.current = { x: palmX, y: palmY, z: palmZ };
            
            setHandDetected(true);

            // Dibujar líneas de la mano
            canvasCtx.strokeStyle = 'rgba(0, 255, 255, 0.5)';
            canvasCtx.lineWidth = 2;
            hand.forEach((landmark, idx) => {
              if (idx > 0) {
                const prev = hand[idx - 1];
                canvasCtx.beginPath();
                canvasCtx.moveTo(prev.x * canvasElement.width, prev.y * canvasElement.height);
                canvasCtx.lineTo(landmark.x * canvasElement.width, landmark.y * canvasElement.height);
                canvasCtx.stroke();
              }
            });
          } else {
            setHandDetected(false);
            setFingerPositions([]);
          }
          canvasCtx.restore();
        });

        handsInstanceRef.current = hands;

        const sendToHands = async () => {
          if (videoElement.readyState === 4) {
            await hands.send({ image: videoElement });
          }
          animationFrameId = requestAnimationFrame(sendToHands);
        };

        sendToHands();
      } catch (error) {
        console.error('Error MediaPipe:', error);
      }
    };

    initHands();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handsInstanceRef.current) handsInstanceRef.current.close();
    };
  }, [cameraActive, mediapipeLoaded]);

  const startCamera = async () => {
    if (!mediapipeLoaded) {
      alert('Cargando sistema de detección...');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          setCameraActive(true);
        };
      }
    } catch (err) {
      console.error('Error cámara:', err);
      alert('No se pudo acceder a la cámara');
    }
  };

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  // Corazones flotantes más numerosos
  const floatingHearts = [
    // Esquina superior derecha
    { top: '22px', right: '28px', size: '24px', emoji: '💕', delay: 0, duration: 3 },
    { top: '55px', right: '50px', size: '20px', emoji: '💖', delay: 0.5, duration: 3.5 },
    { top: '88px', right: '32px', size: '18px', emoji: '❤️', delay: 1.0, duration: 3.2 },
    { top: '120px', right: '45px', size: '16px', emoji: '💗', delay: 1.5, duration: 3.8 },
    
    // Esquina superior izquierda
    { top: '30px', left: '35px', size: '22px', emoji: '💝', delay: 0.3, duration: 3.3 },
    { top: '65px', left: '20px', size: '19px', emoji: '💓', delay: 0.8, duration: 3.6 },
    { top: '100px', left: '40px', size: '17px', emoji: '💞', delay: 1.3, duration: 3.1 },
    
    // Lado derecho medio
    { top: '45%', right: '25px', size: '21px', emoji: '💕', delay: 0.2, duration: 3.4 },
    { top: '55%', right: '40px', size: '18px', emoji: '❤️', delay: 0.7, duration: 3.7 },
    
    // Lado izquierdo medio  
    { top: '48%', left: '30px', size: '20px', emoji: '💖', delay: 0.4, duration: 3.5 },
    { top: '58%', left: '20px', size: '17px', emoji: '💗', delay: 0.9, duration: 3.3 },
    
    // Esquina inferior derecha
    { bottom: '120px', right: '35px', size: '19px', emoji: '💓', delay: 0.6, duration: 3.6 },
    { bottom: '150px', right: '20px', size: '16px', emoji: '💞', delay: 1.1, duration: 3.2 },
    
    // Esquina inferior izquierda
    { bottom: '130px', left: '28px', size: '18px', emoji: '💝', delay: 0.5, duration: 3.4 },
    { bottom: '160px', left: '45px', size: '15px', emoji: '💕', delay: 1.0, duration: 3.8 },
  ];

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', background: '#000205' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />
      
      {/* Cámara: visible en PC, invisible en móvil */}
      <canvas ref={canvasRef} width="160" height="120" style={{
        position: 'fixed', 
        bottom: '20px', 
        right: '20px',
        display: cameraActive ? 'block' : 'none',
        border: '2px solid rgba(255,255,255,0.3)', 
        borderRadius: '10px', 
        zIndex: 1001,
        opacity: isMobile ? 0 : 0.8  // Invisible en móvil, visible en PC
      }} />

      {/* Mensaje especial Feliz 14 */}
      <div style={{
        position: 'fixed',
        top: isMobile ? '20px' : '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        textAlign: 'center',
        padding: isMobile ? '12px 20px' : '16px 35px',
        background: 'linear-gradient(135deg, rgba(255,20,147,0.15) 0%, rgba(138,43,226,0.15) 100%)',
        backdropFilter: 'blur(15px)',
        borderRadius: '20px',
        border: '2px solid rgba(255,105,180,0.4)',
        boxShadow: '0 8px 32px rgba(255,20,147,0.3)',
        animation: 'heartbeat 2s ease-in-out infinite'
      }}>
        <h2 style={{
          margin: 0,
          fontSize: isMobile ? '20px' : '28px',
          fontFamily: "'Pacifico', cursive",
          background: 'linear-gradient(120deg, #ff1493 0%, #ff69b4 50%, #ff1493 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '1px',
          fontWeight: '400',
          textShadow: '0 0 20px rgba(255,20,147,0.5)'
        }}>
          ¡Feliz 14, mi amor! 💕
        </h2>
        <p style={{
          margin: '8px 0 0 0',
          fontSize: isMobile ? '13px' : '15px',
          color: 'rgba(255,255,255,0.9)',
          fontFamily: 'Georgia, serif',
          fontStyle: 'italic'
        }}>
          Te amo infinitamente, Gianella 💖✨
        </p>
      </div>

      {/* Nombre de Gianella */}
      <div style={{
        position: 'fixed',
        bottom: isMobile ? 'auto' : '50%',
        top: isMobile ? '140px' : 'auto',
        left: isMobile ? '50%' : 'auto',
        right: isMobile ? 'auto' : '50px',
        transform: isMobile ? 'translateX(-50%)' : 'translateY(50%)',
        zIndex: 1000, 
        pointerEvents: 'none', 
        textAlign: isMobile ? 'center' : 'right'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: isMobile ? '26px' : (isTablet ? '42px' : '56px'),
          fontFamily: "'Pacifico', cursive",
          fontWeight: '400',
          background: 'linear-gradient(120deg, #ffd89b 0%, #e8be8a 50%, #d4a574 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.5px',
          filter: 'drop-shadow(0 2px 12px rgba(255, 216, 155, 0.5))',
          fontStyle: 'italic'
        }}>
          Gianella Bustamante
        </h1>
      </div>

      {/* Corazones flotantes - solo en PC */}
      {!isMobile && floatingHearts.map((heart, i) => (
        <div key={i} style={{
          position: 'fixed', 
          top: heart.top, 
          bottom: heart.bottom,
          right: heart.right, 
          left: heart.left,
          fontSize: heart.size, 
          opacity: 0.7,
          animation: `float ${heart.duration}s ease-in-out infinite ${heart.delay}s`,
          zIndex: 999, 
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.6))'
        }}>
          {heart.emoji}
        </div>
      ))}

      {/* Botón de activación - pequeño en esquina */}
      {!cameraActive ? (
        <button onClick={startCamera} disabled={!mediapipeLoaded} style={{
          position: 'fixed',
          top: isMobile ? '15px' : '20px',
          left: isMobile ? '15px' : '20px',
          zIndex: 1000,
          padding: isMobile ? '8px 16px' : '10px 20px',
          background: mediapipeLoaded 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : '#666',
          border: 'none', 
          borderRadius: '25px', 
          color: 'white',
          fontSize: isMobile ? '11px' : '12px',
          fontWeight: '600',
          cursor: mediapipeLoaded ? 'pointer' : 'not-allowed',
          boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)',
          fontFamily: 'system-ui', 
          letterSpacing: '0.3px',
          transition: 'all 0.3s ease',
          opacity: mediapipeLoaded ? 0.9 : 0.5
        }}>
          {mediapipeLoaded ? '✨ Activar' : '⏳'}
        </button>
      ) : (
        <div style={{
          position: 'fixed',
          top: isMobile ? '15px' : '20px',
          left: isMobile ? '15px' : '20px',
          zIndex: 1000,
          padding: isMobile ? '8px 14px' : '9px 18px',
          background: handDetected 
            ? 'rgba(74,222,128,0.15)' 
            : 'rgba(248,113,113,0.15)',
          backdropFilter: 'blur(12px)',
          border: `2px solid ${handDetected ? 'rgba(74,222,128,0.5)' : 'rgba(248,113,113,0.5)'}`,
          borderRadius: '25px', 
          color: 'white',
          fontSize: isMobile ? '10px' : '11px',
          fontWeight: '600', 
          fontFamily: 'system-ui',
          letterSpacing: '0.3px',
          boxShadow: handDetected 
            ? '0 0 20px rgba(74,222,128,0.4)' 
            : '0 0 20px rgba(248,113,113,0.4)',
          textAlign: 'center'
        }}>
          {handDetected 
            ? `✨ ${fingerPositions.length} dedos` 
            : '👋 Mano'}
        </div>
      )}

      {/* Frases románticas */}
      <div style={{
        position: 'fixed',
        bottom: isMobile ? '20px' : '32px',
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 1000,
        textAlign: 'center',
        maxWidth: isMobile ? '93%' : (isTablet ? '86%' : '640px'),
        padding: isMobile ? '14px 22px' : '18px 35px',
        background: 'rgba(8,12,22,0.55)',
        backdropFilter: 'blur(20px)',
        borderRadius: '18px',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
        animation: 'phraseSlide 1s ease-out'
      }}>
        <p style={{
          margin: 0,
          fontSize: isMobile ? '15px' : (isTablet ? '16px' : '17px'),
          fontFamily: 'Georgia, serif',
          color: 'rgba(255,255,255,0.95)',
          fontWeight: '400', 
          lineHeight: '1.7',
          letterSpacing: '0.3px',
          textShadow: '0 2px 12px rgba(0,0,0,0.8)',
          fontStyle: 'italic'
        }}>
          {romanticPhrases[currentPhrase]}
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-10px) rotate(5deg) scale(1.05); 
          }
          50% { 
            transform: translateY(-15px) rotate(-3deg) scale(1.1); 
          }
          75% { 
            transform: translateY(-8px) rotate(7deg) scale(1.05); 
          }
        }
        
        @keyframes heartbeat {
          0%, 100% { 
            transform: translateX(-50%) scale(1); 
          }
          50% { 
            transform: translateX(-50%) scale(1.05); 
          }
        }
        
        @keyframes phraseSlide {
          0% { 
            opacity: 0; 
            transform: translateX(-50%) translateY(15px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(-50%) translateY(0); 
          }
        }
        
        * { 
          -webkit-tap-highlight-color: transparent; 
          user-select: none; 
        }
      `}</style>
    </div>
  );
};

export default App;