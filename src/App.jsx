import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

const App = () => {
  const mountRef = useRef(null);
  const videoRef = useRef(null);
  const [handDetected, setHandDetected] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const handPosRef = useRef({ x: 0, y: 0, z: 0 });

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

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000205);
    
    const camera = new THREE.PerspectiveCamera(
      50, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.set(0, 3, 38);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // ========== ESTRELLAS ==========
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 7000;
    const starsPos = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    const starsSizes = new Float32Array(starsCount);

    for (let i = 0; i < starsCount; i++) {
      starsPos[i * 3] = (Math.random() - 0.5) * 500;
      starsPos[i * 3 + 1] = (Math.random() - 0.5) * 500;
      starsPos[i * 3 + 2] = (Math.random() - 0.5) * 400 - 80;
      
      starsSizes[i] = Math.random() * 1.5 + 0.2;
      
      const brightness = 0.7 + Math.random() * 0.3;
      starsColors[i * 3] = brightness;
      starsColors[i * 3 + 1] = brightness;
      starsColors[i * 3 + 2] = brightness;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starsSizes, 1));

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.8,
      transparent: true,
      opacity: 0.6,
      vertexColors: true,
      sizeAttenuation: true
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // ========== SATURNO - PARTÍCULAS PEQUEÑAS ==========
    const particleCount = 15000;
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    let idx = 0;

    // PLANETA - Azul brillante con destellos
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
        // Azul cyan brillante
        colors[idx * 3] = 0.15 + sparkle * 0.1;
        colors[idx * 3 + 1] = 0.6 + sparkle * 0.2;
        colors[idx * 3 + 2] = 1.0;
      } else if (gradient < 0.5) {
        // Azul-púrpura
        const fade = (gradient - 0.3) / 0.2;
        colors[idx * 3] = 0.3 + fade * 0.3 + sparkle * 0.1;
        colors[idx * 3 + 1] = 0.5 - fade * 0.2 + sparkle * 0.1;
        colors[idx * 3 + 2] = 0.9;
      } else if (gradient < 0.7) {
        // Púrpura-naranja
        const fade = (gradient - 0.5) / 0.2;
        colors[idx * 3] = 0.6 + fade * 0.3;
        colors[idx * 3 + 1] = 0.3 + fade * 0.2;
        colors[idx * 3 + 2] = 0.7 - fade * 0.4;
      } else {
        // Naranja-dorado
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

    // ANILLOS - Dorados finos
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

    // Shader con efecto glow neón
    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      varying float vDistance;
      
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vDistance = -mvPosition.z;
        gl_PointSize = size * (300.0 / vDistance);
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
        
        // Centro brillante
        float core = 1.0 - smoothstep(0.0, 0.2, dist);
        core = pow(core, 2.5);
        
        // Glow exterior (efecto neón)
        float glow = exp(-dist * 4.5) * 0.6;
        
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

    // ========== ILUMINACIÓN ==========
    const ambientLight = new THREE.AmbientLight(0x0a0a15, 0.3);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x4488ff, 1.5, 100);
    blueLight.position.set(-25, 20, 30);
    scene.add(blueLight);

    const orangeLight = new THREE.PointLight(0xff9944, 1.2, 100);
    orangeLight.position.set(25, -15, 30);
    scene.add(orangeLight);

    const backLight = new THREE.PointLight(0x6644aa, 0.5, 120);
    backLight.position.set(0, 0, -40);
    scene.add(backLight);

    const handLight = new THREE.PointLight(0xff66dd, 2.5, 40);
    scene.add(handLight);

    // ========== PARTÍCULAS DE INTERACCIÓN ==========
    const sparkleGeometry = new THREE.BufferGeometry();
    const sparkleCount = 100;
    const sparklePos = new Float32Array(sparkleCount * 3);
    const sparkleColors = new Float32Array(sparkleCount * 3);
    const sparkleSizes = new Float32Array(sparkleCount);
    const sparklePhases = new Float32Array(sparkleCount);

    for (let i = 0; i < sparkleCount; i++) {
      sparklePos[i * 3] = 0;
      sparklePos[i * 3 + 1] = 0;
      sparklePos[i * 3 + 2] = 0;
      
      sparkleSizes[i] = Math.random() * 2.0 + 0.8;
      sparklePhases[i] = Math.random() * Math.PI * 2;
      
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        sparkleColors[i * 3] = 1.0;
        sparkleColors[i * 3 + 1] = 0.8;
        sparkleColors[i * 3 + 2] = 0.3;
      } else if (colorChoice < 0.7) {
        sparkleColors[i * 3] = 0.8;
        sparkleColors[i * 3 + 1] = 0.4;
        sparkleColors[i * 3 + 2] = 1.0;
      } else {
        sparkleColors[i * 3] = 0.4;
        sparkleColors[i * 3 + 1] = 0.8;
        sparkleColors[i * 3 + 2] = 1.0;
      }
    }

    sparkleGeometry.setAttribute('position', new THREE.BufferAttribute(sparklePos, 3));
    sparkleGeometry.setAttribute('color', new THREE.BufferAttribute(sparkleColors, 3));
    sparkleGeometry.setAttribute('size', new THREE.BufferAttribute(sparkleSizes, 1));

    // Busca esta parte en tu código y reemplázala:
const sparkleMaterial = new THREE.PointsMaterial({
  size: 1.2, // Reduje un poco el tamaño para que sea más fino
  transparent: true,
  opacity: 0,
  vertexColors: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});

// AÑADE ESTA LÍNEA justo después de crear el sparkleMaterial:
sparkleMaterial.onBeforeCompile = (shader) => {
  shader.fragmentShader = shader.fragmentShader.replace(
    `#include <output_fragment>`,
    `
    // Esto hace que el cuadrado sea un círculo suave
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    
    float strength = 1.0 - r;
    gl_FragColor = vec4(diffuseColor.rgb, strength * opacity);
    `
  );
};

    const sparkles = new THREE.Points(sparkleGeometry, sparkleMaterial);
    scene.add(sparkles);

    // ========== INTERACCIÓN ==========
    let sparkleTime = 0;
    
    const handleHandInteraction = () => {
      if (!handDetected) {
        sparkleMaterial.opacity = Math.max(0, sparkleMaterial.opacity - 0.05);
        return;
      }

      sparkleMaterial.opacity = Math.min(0.7, sparkleMaterial.opacity + 0.1);
      sparkleTime += 0.04;

      const handPos = handPosRef.current;
      const influenceRadius = 12;
      const pushStrength = 0.6;

      // ACTUALIZACIÓN DE SPARKLES (Los destellos de la mano)
      for (let i = 0; i < sparkleCount; i++) {
        const angle = (i / sparkleCount) * Math.PI * 2 * 3;
        const spiral = (i / sparkleCount) * 3.0;
        const radius = 2.0 + Math.sin(sparkleTime * 2 + sparklePhases[i]) * 1.5;
        
        sparklePos[i * 3] = handPos.x + Math.cos(angle + sparkleTime) * (radius + spiral);
        sparklePos[i * 3 + 1] = handPos.y + Math.sin(sparkleTime * 1.5 + sparklePhases[i]) * 2.0;
        sparklePos[i * 3 + 2] = handPos.z + Math.sin(angle + sparkleTime) * (radius + spiral);
      }
      sparkleGeometry.attributes.position.needsUpdate = true;

      // INTERACCIÓN CON EL PLANETA (Empujar partículas)
      for (let i = 0; i < particleCount; i++) {
        const dx = positions[i * 3] - handPos.x;
        const dy = positions[i * 3 + 1] - handPos.y;
        const dz = positions[i * 3 + 2] - handPos.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < influenceRadius) {
          const force = ((influenceRadius - distance) / influenceRadius) * pushStrength;
          const direction = distance > 0 ? 1 / distance : 0;
          
          velocities[i * 3] += dx * direction * force;
          velocities[i * 3 + 1] += dy * direction * force;
          velocities[i * 3 + 2] += dz * direction * force;
        }
      }

      handLight.position.set(handPos.x, handPos.y, handPos.z);
    };

    // ========== ANIMACIÓN ==========
    let time = 0;
    
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

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

  // ========== MEDIAPIPE ==========
  useEffect(() => {
    if (!cameraActive) return;

    const videoElement = videoRef.current;
    if (!videoElement) return;

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7
    });

    let smoothX = 0, smoothY = 0, smoothZ = 0;

    hands.onResults((results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const hand = results.multiHandLandmarks[0];
        const palm = hand[9];

        const targetX = (palm.x - 0.5) * 42;
        const targetY = -(palm.y - 0.5) * 42;
        const targetZ = -palm.z * 26;

        smoothX += (targetX - smoothX) * 0.22;
        smoothY += (targetY - smoothY) * 0.22;
        smoothZ += (targetZ - smoothZ) * 0.22;

        handPosRef.current = { x: smoothX, y: smoothY, z: smoothZ };
        setHandDetected(true);
      } else {
        setHandDetected(false);
      }
    });

    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: 640,
      height: 480
    });

    camera.start();

    return () => {
      camera.stop();
      hands.close();
    };
  }, [cameraActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('No se pudo acceder a la cámara.');
    }
  };

  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      background: '#000205'
    }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <video ref={videoRef} style={{ display: 'none' }} autoPlay playsInline />

      {/* Nombre */}
      <div style={{
        position: 'fixed',
        bottom: isMobile ? 'auto' : '50%',
        top: isMobile ? '90px' : 'auto',
        left: isMobile ? '50%' : 'auto',
        right: isMobile ? 'auto' : '50px',
        transform: isMobile ? 'translateX(-50%)' : 'translateY(50%)',
        zIndex: 1000,
        pointerEvents: 'none',
        textAlign: isMobile ? 'center' : 'right'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: isMobile ? '24px' : (isTablet ? '40px' : '52px'),
          fontFamily: "'Brush Script MT', 'Pacifico', cursive",
          fontWeight: '400',
          background: 'linear-gradient(120deg, #ffd89b 0%, #e8be8a 50%, #d4a574 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '0.5px',
          filter: 'drop-shadow(0 2px 12px rgba(255, 216, 155, 0.4))',
          fontStyle: 'italic'
        }}>
          Gianella Bustamante
        </h1>
      </div>

      {/* Corazones */}
      {!isMobile && [
        { top: '22px', right: '28px', size: '22px', emoji: '💕', delay: 0 },
        { top: '55px', right: '50px', size: '19px', emoji: '💖', delay: 0.5 },
        { top: '88px', right: '32px', size: '16px', emoji: '❤️', delay: 1.0 }
      ].map((heart, i) => (
        <div key={i} style={{
          position: 'fixed',
          top: heart.top,
          right: heart.right,
          fontSize: heart.size,
          opacity: 0.6,
          animation: `float 3s ease-in-out infinite ${heart.delay}s`,
          zIndex: 999,
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 6px rgba(255, 105, 180, 0.5))'
        }}>
          {heart.emoji}
        </div>
      ))}

      {/* Botón */}
      {!cameraActive ? (
        <button
          onClick={startCamera}
          style={{
            position: 'fixed',
            top: isMobile ? '18px' : '25px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            padding: isMobile ? '12px 24px' : '14px 34px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            fontSize: isMobile ? '13px' : '14px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 6px 28px rgba(102, 126, 234, 0.45)',
            fontFamily: 'system-ui, sans-serif',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateX(-50%) translateY(-2px) scale(1.03)';
            e.target.style.boxShadow = '0 10px 35px rgba(102, 126, 234, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateX(-50%) translateY(0) scale(1)';
            e.target.style.boxShadow = '0 6px 28px rgba(102, 126, 234, 0.45)';
          }}
        >
          ✨ Activar Interacción
        </button>
      ) : (
        <div style={{
          position: 'fixed',
          top: isMobile ? '18px' : '25px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          padding: isMobile ? '11px 22px' : '13px 28px',
          background: handDetected ? 'rgba(74, 222, 128, 0.13)' : 'rgba(248, 113, 113, 0.13)',
          backdropFilter: 'blur(12px)',
          border: `1.5px solid ${handDetected ? 'rgba(74, 222, 128, 0.4)' : 'rgba(248, 113, 113, 0.4)'}`,
          borderRadius: '50px',
          color: 'white',
          fontSize: isMobile ? '13px' : '14px',
          fontWeight: '700',
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '0.4px',
          boxShadow: handDetected ? '0 0 22px rgba(74, 222, 128, 0.35)' : '0 0 22px rgba(248, 113, 113, 0.35)'
        }}>
          {handDetected ? '✨ ¡Mueve Saturno!' : '👋 Muestra tu mano'}
        </div>
      )}

      {/* Frases */}
      <div style={{
        position: 'fixed',
        bottom: isMobile ? '18px' : '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        textAlign: 'center',
        maxWidth: isMobile ? '93%' : (isTablet ? '86%' : '620px'),
        padding: isMobile ? '13px 20px' : '16px 30px',
        background: 'rgba(8, 12, 22, 0.5)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        animation: 'phraseSlide 1s ease-out'
      }}>
        <p style={{
          margin: 0,
          fontSize: isMobile ? '14px' : (isTablet ? '15px' : '16px'),
          fontFamily: "'Georgia', serif",
          color: 'rgba(255, 255, 255, 0.95)',
          fontWeight: '400',
          lineHeight: '1.6',
          letterSpacing: '0.2px',
          textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
          fontStyle: 'italic'
        }}>
          {romanticPhrases[currentPhrase]}
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        
        @keyframes phraseSlide {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(12px);
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