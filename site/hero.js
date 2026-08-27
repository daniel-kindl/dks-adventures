const canvas = document.querySelector('#hero-terrain');
const hero = document.querySelector('.hero');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
const narrowViewport = window.matchMedia('(max-width: 700px)').matches;

if (canvas && hero && !reducedMotion && !coarsePointer && !narrowViewport) {
  enhanceHero(canvas, hero).catch(() => {
    canvas.hidden = true;
  });
}

async function enhanceHero(canvasElement, heroElement) {
  const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js');

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true,
    antialias: true,
    powerPreference: 'low-power',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x171a17, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x20251f, 0.047);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
  camera.position.set(0, 7.4, 15.5);
  camera.lookAt(0, 0.6, -3.5);

  const geometry = new THREE.PlaneGeometry(34, 28, 56, 44);
  geometry.rotateX(-Math.PI / 2);

  const positions = geometry.attributes.position;
  const colors = [];
  const low = new THREE.Color(0x1f291f);
  const mid = new THREE.Color(0x40513c);
  const high = new THREE.Color(0x7a8069);
  const color = new THREE.Color();

  for (let i = 0; i < positions.count; i += 1) {
    const x = positions.getX(i);
    const z = positions.getZ(i);
    const distance = Math.sqrt((x * 0.42) ** 2 + ((z + 4) * 0.36) ** 2);
    const ridge = Math.sin(x * 0.34 + z * 0.16) * 0.75 + Math.cos(z * 0.47 - x * 0.08) * 0.52;
    const detail = Math.sin(x * 0.91) * Math.cos(z * 0.72) * 0.28;
    const centralRange = Math.max(0, 5.7 - Math.abs(x + 2.5) * 0.28 - Math.abs(z + 5.5) * 0.16);
    const valley = Math.exp(-((x - 4.2) ** 2) / 18 - ((z - 1.5) ** 2) / 34) * 2.1;
    const y = ridge + detail + centralRange * 0.47 - distance * 0.035 - valley - 1.25;
    positions.setY(i, y);

    const t = THREE.MathUtils.clamp((y + 3) / 6.8, 0, 1);
    if (t < 0.58) color.copy(low).lerp(mid, t / 0.58);
    else color.copy(mid).lerp(high, (t - 0.58) / 0.42);
    colors.push(color.r, color.g, color.b);
  }

  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();

  const terrain = new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      flatShading: true,
      roughness: 1,
      metalness: 0,
    }),
  );
  terrain.position.z = -5.5;
  scene.add(terrain);

  scene.add(new THREE.HemisphereLight(0xc8c6ad, 0x111713, 1.35));
  const sun = new THREE.DirectionalLight(0xd5a85f, 2.1);
  sun.position.set(-7, 10, 8);
  scene.add(sun);

  const waypointMaterial = new THREE.MeshBasicMaterial({ color: 0xd5a85f });
  const points = [
    [-6.4, 1.25, -6.2],
    [1.2, 1.55, -10.8],
    [6.1, 1.1, -7.8],
  ];
  for (const [x, y, z] of points) {
    const marker = new THREE.Mesh(new THREE.SphereGeometry(0.09, 10, 10), waypointMaterial);
    marker.position.set(x, y, z);
    scene.add(marker);
  }

  let pointerX = 0;
  let pointerY = 0;
  let visible = true;
  let lastFrame = 0;
  let raf = 0;

  const resize = () => {
    const rect = heroElement.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !raf) raf = requestAnimationFrame(render);
  }, { threshold: 0.05 });
  observer.observe(heroElement);

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(heroElement);
  resize();

  heroElement.addEventListener('pointermove', (event) => {
    const rect = heroElement.getBoundingClientRect();
    pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  }, { passive: true });

  const render = (time) => {
    raf = 0;
    if (!visible) return;
    if (time - lastFrame < 33) {
      raf = requestAnimationFrame(render);
      return;
    }
    lastFrame = time;
    const drift = time * 0.000035;
    camera.position.x = Math.sin(drift) * 0.55 + pointerX * 0.24;
    camera.position.y = 7.4 - pointerY * 0.12;
    camera.lookAt(pointerX * 0.2, 0.55, -3.8);
    terrain.rotation.y = Math.sin(drift * 0.7) * 0.012;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  };

  raf = requestAnimationFrame(render);
}
