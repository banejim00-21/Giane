# ✨ Saturno Profesional - Gianella Bustamante

Sistema de partículas 3D profesional de Saturno con control total mediante las manos.

## 🪐 Características

### Diseño Profesional
- **8000 partículas** de alta calidad
- **Saturno realista** con gradiente azul → púrpura
- **Anillos dorados** en múltiples capas
- **Efectos de brillo** con shaders personalizados
- **Fondo espacial** con 3000 estrellas parpadeantes

### Control Total con las Manos
- Empuja cada partícula físicamente
- Sistema de física realista con springs
- Las partículas regresan suavemente a su posición
- Luz que sigue tu mano

### Efectos Visuales
- Rotación suave de Saturno
- Efecto de "respiración" sutil
- Iluminación dinámica (azul y dorada)
- Estrellas con efecto twinkle

## 🚀 Instalación

```bash
# 1. Extrae el ZIP

# 2. Instala dependencias
npm install

# 3. Inicia el servidor
npm run dev

# 4. Abre tu navegador
http://localhost:5173
```

## 🎮 Uso

1. Abre la aplicación
2. Click en "Activar Cámara para Controlar"
3. Permite el acceso a la cámara
4. Muestra tu mano frente a la cámara
5. ¡Mueve tu mano para empujar las partículas de Saturno!

## 📦 Deploy en GitHub Pages

```bash
# 1. Crea un repositorio en GitHub

# 2. Sube el código
git init
git add .
git commit -m "🪐 Saturno para Gianella"
git remote add origin https://github.com/TU_USUARIO/particle-magic-gianella.git
git branch -M main
git push -u origin main

# 3. Configurar GitHub Pages
# - Ve a Settings → Pages
# - Source: GitHub Actions
# - ¡Listo!
```

Tu sitio estará en: `https://TU_USUARIO.github.io/particle-magic-gianella/`

## ⚙️ Configuración

Edita `vite.config.js` y cambia el `base` por el nombre de tu repositorio:

```javascript
export default defineConfig({
  base: '/TU-REPO/', // Cambia esto
})
```

## 🎨 Tecnologías

- **React 18** - Framework moderno
- **Three.js** - Renderizado 3D de alto rendimiento
- **WebGL Shaders** - Efectos de brillo personalizados
- **MediaPipe Hands** - Detección de manos con IA
- **Vite** - Build tool ultrarrápido

## 💫 Detalles Técnicos

- Partículas del planeta: 35% (gradiente azul-púrpura)
- Partículas de anillos: 65% (dorado brillante)
- Sistema de física con velocidades y fuerzas
- Shaders GLSL para efectos de brillo
- Optimizado para 60 FPS

## 💝 Dedicado a Gianella Bustamante

Un Saturno hermoso y profesional que puedes controlar con tus manos.

---

**Hecho con 💖 y las mejores tecnologías web**
