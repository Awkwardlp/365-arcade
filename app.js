// ponytail: client-side engine with Web Audio + LocalStorage. Upgrade to WebSocket/Supabase when multiplayer matchmaking needed.

// ==========================================
// 1. ADVANCED 3D & OPEN SOURCE GAMES DATA
// ==========================================

const ADVANCED_GAMES = [
  {
    id: '3d_city',
    title: '3D.City Builder',
    author: 'lo-th',
    repoUrl: 'https://github.com/lo-th/3d.city',
    demoUrl: 'https://lo-th.github.io/3d.city/',
    playUrl: 'https://lo-th.github.io/3d.city/',
    image: 'assets/games/3d_city.png',
    engine: 'Three.js / WebGL',
    category: '3d',
    desc: 'Simulasi pembangunan kota 3D prosedural real-time berbasis Three.js dengan sistem zonasi, lalu lintas kendaraan, dan visualisasi arsitektur 3D modern.',
    controls: 'Mouse Drag (Rotasi), Scroll (Zoom), Klik Kiri (Pilih/Bangun)',
    difficulty: 'Sedang'
  },
  {
    id: 'sandline_fps',
    title: 'Sandline ThreeJS FPS',
    author: 'xilinnihao-afk',
    repoUrl: 'https://github.com/xilinnihao-afk/sandline-threejs-fps',
    demoUrl: 'https://ihca.cn/sandline/',
    playUrl: 'https://ihca.cn/sandline/',
    image: 'assets/games/sandline_fps.png',
    engine: 'Three.js / PointerLock',
    category: '3d',
    desc: 'Game First-Person Shooter 3D di arena gurun pasir dengan kontrol mouse pointer lock, sistem proyektil senjata, dan efek partikel visual dinamis.',
    controls: 'WASD (Gerak), Mouse (Pandang), Klik Kiri (Tembak), Spasi (Lompat)',
    difficulty: 'Tinggi'
  },
  {
    id: 'mine_threejs',
    title: 'MineThreeJS Voxel',
    author: 'NeXz22',
    repoUrl: 'https://github.com/NeXz22/mineThreeJS',
    demoUrl: 'games/mine-threejs/index.html',
    playUrl: 'games/mine-threejs/index.html',
    image: 'assets/games/mine_threejs.png',
    engine: 'Three.js Voxel',
    category: '3d',
    desc: 'Rekreasi dunia voxel sandbox bergaya Minecraft di peramban web dengan generasi balok dinamis, sistem inventori, dan kalkulasi fisika pemain.',
    controls: 'WASD (Jalan), Mouse (Kamera), Klik Kiri (Hancurkan), Klik Kanan (Letak)',
    difficulty: 'Tinggi'
  },
  {
    id: 'match_3djs',
    title: 'Match-3Djs',
    author: 'fecolinhares',
    repoUrl: 'https://github.com/fecolinhares/match-3djs',
    demoUrl: 'https://fecolinhares.github.io/match-3djs/',
    playUrl: 'https://fecolinhares.github.io/match-3djs/',
    image: 'assets/games/match_3djs.png',
    engine: 'Three.js / Physics',
    category: '3d',
    desc: 'Evolusi teka-teki match-3 dalam ruang 3 dimensi penuh. Memanipulasi kubus geometri dan mencocokkan warna melalui interaksi rotasi multi-sudut.',
    controls: 'Klik & Drag Mouse (Rotasi 3D), Klik Objek (Pilih Elemen Match)',
    difficulty: 'Mudah'
  },
  {
    id: 'tideline',
    title: 'Tideline Maritime',
    author: 'bridge-mind',
    repoUrl: 'https://github.com/bridge-mind/tideline',
    demoUrl: 'https://bridge-mind.github.io/tideline/',
    playUrl: 'https://bridge-mind.github.io/tideline/',
    image: 'assets/games/tideline.png',
    engine: 'WebGL / Adventure',
    category: '3d',
    desc: 'Petualangan maritim dan penjelajahan garis pantai interaktif dengan simulasi permukaan air WebGL dinamis serta atmosfer visual estetik.',
    controls: 'Tombol Arah / WASD (Kemudi Kapal), Mouse (Pandangan Cakrawala)',
    difficulty: 'Sedang'
  },
  {
    id: 'contra_run',
    title: 'Contra Run 2.5D',
    author: 'pstarwars2026',
    repoUrl: 'https://github.com/pstarwars2026/contra-run',
    demoUrl: 'games/contra-run/index.html',
    playUrl: 'games/contra-run/index.html',
    image: 'assets/games/contra_run.png',
    engine: 'Three.js 2.5D Arcade',
    category: 'arcade',
    desc: 'Aksi endless runner berkecepatan tinggi terinspirasi oleh arcade klasik Contra. Hindari rintangan, lompati proyektil, dan bertahan sejauh mungkin.',
    controls: 'Spasi / Panah Atas (Lompat), Panah Bawah (Menunduk), Z (Tembak)',
    difficulty: 'Tinggi'
  },
  {
    id: 'pixel_jumper',
    title: 'Pixel Jumper Odyssey',
    author: 'Veroush',
    repoUrl: 'https://github.com/Veroush/pixel-jumper-arcade-odyssey',
    demoUrl: 'https://veroush.github.io/pixel-jumper-arcade-odyssey/',
    playUrl: 'https://veroush.github.io/pixel-jumper-arcade-odyssey/',
    image: 'assets/games/pixel_jumper.png',
    engine: 'Pixel Art / Canvas',
    category: 'arcade',
    desc: 'Game arcade vertical platform jumping dengan seni piksel otentik, pijakan rapuh, power-up pelontar roket, dan sistem combo pengganda skor.',
    controls: 'Panah A/D (Manuver Karakter), Spasi (Aktivasi Jetpack)',
    difficulty: 'Sedang'
  },
  {
    id: 'platformer_game',
    title: "Dino's Adventure 2D",
    author: 'AKAspanion',
    repoUrl: 'https://github.com/AKAspanion/platformer-game',
    demoUrl: 'https://akaspanion.github.io/platformer-game/',
    playUrl: 'https://akaspanion.github.io/platformer-game/',
    image: 'assets/games/platformer_game.png',
    engine: 'Physics Engine 2D',
    category: 'arcade',
    desc: 'Game platformer klasik berbasis kalkulasi inersia dan gravitasi presisi. Jelajahi labirin berundak, kumpulkan token permata, dan capai gerbang keluar.',
    controls: 'Tombol Panah / WASD (Manuver Bergerak), Spasi (Lompatan Ganda)',
    difficulty: 'Sedang'
  }
];

// Leaderboard benchmark data
const BENCHMARK_LEADERBOARDS = {
  reaction: [
    { name: 'Zephyr_Speed', score: 182, precision: 'Refleks Dewa' },
    { name: 'ApexReflex', score: 195, precision: 'Tingkat Pro' },
    { name: 'Chrono_99', score: 210, precision: 'Sangat Cepat' },
    { name: 'BlinkStrike', score: 228, precision: 'Diatas Rata-rata' }
  ],
  aim: [
    { name: 'PrecisionX', score: 285, precision: 'Akurasi 99%' },
    { name: 'HawkEye_ID', score: 310, precision: 'Akurasi 96%' },
    { name: 'QuickDraw', score: 342, precision: 'Akurasi 94%' },
    { name: 'TargetPro', score: 375, precision: 'Akurasi 90%' }
  ],
  cps: [
    { name: 'BoltClicker', score: 12.4, precision: 'Jari Petir' },
    { name: 'TurboThumb', score: 10.8, precision: 'Jitter Master' },
    { name: 'RapidFire', score: 9.2, precision: 'Butterfly Tap' },
    { name: 'SwiftTap', score: 8.1, precision: 'Diatas Rata-rata' }
  ],
  guess: [
    { name: 'BinaryWizard', score: 3, precision: 'Optimal Log2' },
    { name: 'Deducto_X', score: 4, precision: 'Deduksi Cepat' },
    { name: 'AlgoMind', score: 5, precision: 'Taktis' },
    { name: 'SmartOracle', score: 6, precision: 'Standar Biner' }
  ],
  memory: [
    { name: 'Mnemonist', score: 16, precision: 'Fotografik' },
    { name: 'NeuroMatch', score: 19, precision: 'Retensi Tinggi' },
    { name: 'Eidetic_Star', score: 22, precision: 'Sangat Cepat' },
    { name: 'MindLoom', score: 26, precision: 'Terlatih' }
  ],
  typing: [
    { name: 'KeySpeedster', score: 112, precision: '100% Akurasi' },
    { name: 'CodeNinja', score: 98, precision: '98% Akurasi' },
    { name: 'GhostTyper', score: 84, precision: '97% Akurasi' },
    { name: 'SwiftFingers', score: 72, precision: '95% Akurasi' }
  ],
  stroop: [
    { name: 'SynapsePro', score: 240, precision: 'Refleks Kognitif' },
    { name: 'BrainOptima', score: 210, precision: 'Fokus Tajam' },
    { name: 'CortexKing', score: 180, precision: 'Cepat & Tepat' },
    { name: 'NeuroSpeed', score: 150, precision: 'Tingkat Mahir' }
  ],
  sequence: [
    { name: 'ChimpMaster', score: 14, precision: 'Memori Fotogenik' },
    { name: 'PatternMind', score: 11, precision: 'Retensi Tinggi' },
    { name: 'EchoChamber', score: 9, precision: 'Sangat Baik' },
    { name: 'SeqTracker', score: 7, precision: 'Rata-rata Gamer' }
  ]
};

// ==========================================
// 2. PURE LOGIC HELPERS (Verified by test.js)
// ==========================================

function calculateLevel(xp) {
  const safeXp = Math.max(0, Math.floor(xp || 0));
  const level = Math.floor(safeXp / 100) + 1;
  const progressPercent = safeXp % 100;
  return { level, progressPercent, currentXp: safeXp };
}

function calculateAverage(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return Math.round(sum / numbers.length);
}

function calculateProximity(guess, target, maxRange) {
  const diff = Math.abs(guess - target);
  if (diff === 0) return { percent: 100, label: 'Tepat!', color: 'var(--green-top)' };
  const ratio = Math.max(0, 1 - (diff / maxRange));
  const percent = Math.round(ratio * 100);
  if (percent >= 85) return { percent, label: 'Mendidih! Sangat dekat', color: 'var(--red-top)' };
  if (percent >= 60) return { percent, label: 'Hangat!', color: 'var(--amber)' };
  return { percent, label: 'Dingin...', color: 'var(--cyan-top)' };
}

function compareGuess(guess, target, maxRange = 100) {
  if (typeof guess !== 'number' || isNaN(guess) || guess < 1 || guess > maxRange) return 'invalid';
  if (guess < target) return 'too_low';
  if (guess > target) return 'too_high';
  return 'correct';
}

function calculateCps(clicks, durationSec) {
  if (durationSec <= 0) return 0;
  return Number((clicks / durationSec).toFixed(1));
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function filterGames(games, category, query) {
  const q = (query || '').toLowerCase().trim();
  return games.filter(item => {
    const matchCat = category === 'all' || item.category === category;
    const matchQuery = !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || (item.engine && item.engine.toLowerCase().includes(q));
    return matchCat && matchQuery;
  });
}

function calculateRank(playerScore, boardScores, lowerIsBetter = true) {
  if (playerScore === null || playerScore === undefined) return boardScores.length + 1;
  let rank = 1;
  for (const item of boardScores) {
    if (lowerIsBetter ? playerScore > item.score : playerScore < item.score) {
      rank++;
    }
  }
  return rank;
}

function calculateWpm(charCount, timeSeconds) {
  if (!charCount || !timeSeconds || charCount <= 0 || timeSeconds <= 0) return 0;
  const words = charCount / 5;
  const minutes = timeSeconds / 60;
  return Math.round(words / minutes);
}

function evaluateStroopMatch(wordColor, fontColor) {
  return String(wordColor).toLowerCase().trim() === String(fontColor).toLowerCase().trim();
}

function checkSequenceStep(sequence, playerInputs) {
  if (!Array.isArray(sequence) || !Array.isArray(playerInputs)) return false;
  if (playerInputs.length > sequence.length) return false;
  for (let i = 0; i < playerInputs.length; i++) {
    if (playerInputs[i] !== sequence[i]) return false;
  }
  return true;
}

// Parse comma-separated game controls into structured keycap chips
function formatControlsChips(controlsStr) {
  if (!controlsStr) return '';
  const items = controlsStr.split(',').map(s => s.trim()).filter(Boolean);
  return items.map(item => {
    const match = item.match(/^(.+?)\s*\((.+?)\)$/);
    if (match) {
      return `<div class="adv-ctrl-row"><kbd class="adv-ctrl-kbd">${match[1]}</kbd><span class="adv-ctrl-act">${match[2]}</span></div>`;
    }
    return `<div class="adv-ctrl-row"><span class="adv-ctrl-act">${item}</span></div>`;
  }).join('');
}

// SVG Icons Registry for Memory Tiles and Badges
const SVG_ICONS = {
  zap: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon></svg>`,
  target: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>`,
  clock: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>`,
  brain: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z\"></path><path d=\"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z\"></path></svg>`,
  trophy: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9H4.5a2.5 2.5 0 0 1 0-5H6\"></path><path d=\"M18 9h1.5a2.5 2.5 0 0 0 0-5H18\"></path><path d=\"M4 22h16\"></path><path d=\"M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34\"></path><path d=\"M18 4H6v7a6 6 0 0 0 12 0V4z\"></path></svg>`,
  shield: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path></svg>`,
  flame: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z\"></path></svg>`,
  compass: `<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon></svg>`
};

// ==========================================
// 3. WEB AUDIO SYNTHESIZER (Native Zero-asset)
// ==========================================

const SoundFX = (() => {
  let ctx = null;
  let isEnabled = true;

  function init() {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('mgh_audio_enabled');
    isEnabled = stored === null ? true : stored === 'true';
    updateAudioIcon();
  }

  function getContext() {
    if (!ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }

  function playTone(freq, durationMs, type = 'sine', gainVal = 0.15) {
    if (!isEnabled) return;
    try {
      const audio = getContext();
      if (!audio) return;
      const osc = audio.createOscillator();
      const gain = audio.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audio.currentTime);

      gain.gain.setValueAtTime(gainVal, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + (durationMs / 1000));

      osc.connect(gain);
      gain.connect(audio.destination);

      osc.start();
      osc.stop(audio.currentTime + (durationMs / 1000));
    } catch {
      // Audio autoplay restriction safe fail
    }
  }

  function playClick() { playTone(800, 35, 'sine', 0.12); }
  function playHit() { playTone(1200, 45, 'triangle', 0.18); }
  function playTick() { playTone(440, 20, 'sine', 0.08); }
  function playFail() { playTone(180, 150, 'sawtooth', 0.15); }
  function playSuccess() {
    playTone(523.25, 80, 'sine', 0.15);
    setTimeout(() => playTone(659.25, 80, 'sine', 0.15), 90);
    setTimeout(() => playTone(783.99, 140, 'sine', 0.2), 180);
  }

  function toggle() {
    isEnabled = !isEnabled;
    localStorage.setItem('mgh_audio_enabled', String(isEnabled));
    updateAudioIcon();
    if (isEnabled) playClick();
    return isEnabled;
  }

  function updateAudioIcon() {
    if (typeof document === 'undefined') return;
    const onIcon = document.getElementById('audio-icon-on');
    const offIcon = document.getElementById('audio-icon-off');
    if (!onIcon || !offIcon) return;
    if (isEnabled) {
      onIcon.classList.remove('hidden');
      offIcon.classList.add('hidden');
    } else {
      onIcon.classList.add('hidden');
      offIcon.classList.remove('hidden');
    }
  }

  function play(type = 'click') {
    if (type === 'hit') playHit();
    else if (type === 'tick') playTick();
    else if (type === 'fail') playFail();
    else if (type === 'success') playSuccess();
    else playClick();
  }

  return {
    init,
    toggle,
    play,
    playTone,
    playClick,
    playHit,
    playTick,
    playFail,
    playSuccess
  };
})();

// ==========================================
// 4. MAIN HUB APP CONTROLLER
// ==========================================

const Hub = (() => {
  if (typeof window === 'undefined') return {};

  const storagePrefix = 'mgh_';
  let activeGameId = null;
  let activeCleanup = null;
  let activeRestartFn = null;
  let activeBoardGame = 'reaction';

  const gameConfigs = {
    reaction: { title: 'Reaction Time', unit: 'ms', lowerIsBetter: true, category: 'reflex' },
    aim: { title: 'Aim Trainer', unit: 'ms/tgt', lowerIsBetter: true, category: 'motoric' },
    cps: { title: 'Click Speed', unit: 'CPS', lowerIsBetter: false, category: 'motoric' },
    guess: { title: 'Tebak Angka', unit: 'tebakan', lowerIsBetter: true, category: 'cognition' },
    memory: { title: 'Memory Match', unit: 'detik', lowerIsBetter: true, category: 'cognition' },
    typing: { title: 'Typing Speed', unit: 'WPM', lowerIsBetter: false, category: 'motoric' },
    stroop: { title: 'Color Match (Stroop)', unit: 'poin', lowerIsBetter: false, category: 'cognition' },
    sequence: { title: 'Sequence Memory', unit: 'level', lowerIsBetter: false, category: 'cognition' }
  };

  const ACHIEVEMENTS = [
    { id: 'reaction_master', name: 'Refleks Kilat', desc: 'Capai Reaction Time <= 230ms', icon: SVG_ICONS.zap },
    { id: 'aim_sniper', name: 'Sniper Sejati', desc: 'Rata-rata Aim Trainer <= 360ms', icon: SVG_ICONS.target },
    { id: 'cps_beast', name: 'Jari Petir', desc: 'Hasilkan >= 8.5 CPS pada tes klik', icon: SVG_ICONS.clock },
    { id: 'guess_genius', name: 'Detektif Biner', desc: 'Tebak angka dalam <= 5 percobaan', icon: SVG_ICONS.brain },
    { id: 'memory_titan', name: 'Ingatan Baja', desc: 'Selesaikan Memory Match <= 25 detik', icon: SVG_ICONS.shield },
    { id: 'typing_pro', name: 'Juru Ketik Kilat', desc: 'Capai kecepatan ketik >= 60 WPM', icon: SVG_ICONS.flame },
    { id: 'stroop_ace', name: 'Pikiran Tajam', desc: 'Raih >= 150 poin pada Color Match', icon: SVG_ICONS.trophy },
    { id: 'sequence_guru', name: 'Pola Sempurna', desc: 'Capai Level >= 8 pada Sequence Memory', icon: SVG_ICONS.compass },
    { id: 'all_rounder', name: 'Master Polimatik', desc: 'Mainkan semua 8 game klasik setidaknya 1 kali', icon: SVG_ICONS.trophy }
  ];

  function getBest(id) {
    const val = localStorage.getItem(storagePrefix + id);
    return val !== null ? Number(val) : null;
  }

  function getHistory(id) {
    try {
      const data = localStorage.getItem(`${storagePrefix}hist_${id}`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  function recordSession(id, score) {
    const hist = getHistory(id);
    hist.unshift({ score, timestamp: Date.now() });
    if (hist.length > 5) hist.pop();
    localStorage.setItem(`${storagePrefix}hist_${id}`, JSON.stringify(hist));
    renderHistoryPanel(id);
  }

  function addXp(amount) {
    const currentXp = Number(localStorage.getItem(`${storagePrefix}xp`) || 0);
    const newXp = currentXp + amount;
    localStorage.setItem(`${storagePrefix}xp`, newXp);
    updateXpDisplay();
    checkAchievements();
  }

  function updateXpDisplay() {
    const xp = Number(localStorage.getItem(`${storagePrefix}xp`) || 0);
    const { level, progressPercent } = calculateLevel(xp);

    const lvlEl = document.getElementById('player-level');
    const xpEl = document.getElementById('player-xp');
    const fillEl = document.getElementById('xp-bar-fill');

    if (lvlEl) lvlEl.textContent = `LVL ${level}`;
    if (xpEl) xpEl.textContent = `${xp} XP`;
    if (fillEl) fillEl.style.width = `${progressPercent}%`;

    const xpRatioEl = document.getElementById('player-xp-ratio');
    if (xpRatioEl) xpRatioEl.textContent = `${progressPercent} / 100 XP`;

    const rankTitleEl = document.getElementById('player-rank-title');
    if (rankTitleEl) {
      if (level <= 1) rankTitleEl.textContent = 'ROOKIE CADET';
      else if (level <= 3) rankTitleEl.textContent = 'CYBER CONTENDER';
      else if (level <= 6) rankTitleEl.textContent = 'ARCADE SPECIALIST';
      else if (level <= 9) rankTitleEl.textContent = 'HYPER SPEEDSTER';
      else rankTitleEl.textContent = 'LEGENDARY MASTER';
    }

    const allGameKeys = Object.keys(gameConfigs);
    let gamesPlayed = 0;
    let bestGlobalRank = 999;
    allGameKeys.forEach(k => {
      const best = getBest(k);
      if (best !== null) {
        gamesPlayed++;
        const benchmarks = BENCHMARK_LEADERBOARDS[k] || [];
        const rank = calculateRank(best, benchmarks, gameConfigs[k].lowerIsBetter);
        if (rank < bestGlobalRank) bestGlobalRank = rank;
      }
    });

    const gamesCountEl = document.getElementById('player-games-count');
    if (gamesCountEl) gamesCountEl.textContent = `${gamesPlayed} / ${allGameKeys.length}`;

    const bestRankEl = document.getElementById('player-best-rank');
    if (bestRankEl) bestRankEl.textContent = bestGlobalRank <= 10 ? `#${bestGlobalRank}` : '-';

    const topXpEl = document.getElementById('topbar-xp');
    if (topXpEl) topXpEl.textContent = `${xp} XP`;
    const sideLvl = document.getElementById('sidebar-player-level');
    if (sideLvl) sideLvl.textContent = `Level ${level} / ${xp} XP`;
    const headerLvl = document.getElementById('header-player-level');
    if (headerLvl) headerLvl.textContent = `LVL ${level}`;
    const drawerLvl = document.getElementById('drawer-player-level');
    if (drawerLvl) drawerLvl.textContent = `LVL ${level}`;
    const drawerXp = document.getElementById('drawer-player-xp');
    if (drawerXp) drawerXp.textContent = `${xp} XP`;
    const drawerFill = document.getElementById('drawer-xp-fill');
    if (drawerFill) drawerFill.style.width = `${progressPercent}%`;
  }

  function saveBest(id, score) {
    const current = getBest(id);
    const config = gameConfigs[id];
    let isBetter = false;

    if (current === null) {
      isBetter = true;
    } else if (config.lowerIsBetter) {
      isBetter = score < current;
    } else {
      isBetter = score > current;
    }

    if (isBetter) {
      localStorage.setItem(storagePrefix + id, score);
      updateHubPills();
      addXp(50);
      SoundFX.playSuccess();
      renderLeaderboard(activeBoardGame);
      return true;
    }

    addXp(25);
    return false;
  }

  function checkAchievements() {
    let unlocked = [];
    try {
      unlocked = JSON.parse(localStorage.getItem(`${storagePrefix}achieve`) || '[]');
    } catch { unlocked = []; }

    const reactionBest = getBest('reaction');
    const aimBest = getBest('aim');
    const cpsBest = getBest('cps');
    const guessBest = getBest('guess');
    const memoryBest = getBest('memory');
    const typingBest = getBest('typing');
    const stroopBest = getBest('stroop');
    const sequenceBest = getBest('sequence');

    const criteria = {
      reaction_master: reactionBest !== null && reactionBest <= 230,
      aim_sniper: aimBest !== null && aimBest <= 360,
      cps_beast: cpsBest !== null && cpsBest >= 8.5,
      guess_genius: guessBest !== null && guessBest <= 5,
      memory_titan: memoryBest !== null && memoryBest <= 25,
      typing_pro: typingBest !== null && typingBest >= 60,
      stroop_ace: stroopBest !== null && stroopBest >= 150,
      sequence_guru: sequenceBest !== null && sequenceBest >= 8,
      all_rounder: [reactionBest, aimBest, cpsBest, guessBest, memoryBest, typingBest, stroopBest, sequenceBest].every(v => v !== null)
    };

    let newUnlockedCount = 0;
    ACHIEVEMENTS.forEach(ach => {
      if (criteria[ach.id] && !unlocked.includes(ach.id)) {
        unlocked.push(ach.id);
        newUnlockedCount++;
      }
    });

    localStorage.setItem(`${storagePrefix}achieve`, JSON.stringify(unlocked));

    const countEl = document.getElementById('achieve-count');
    if (countEl) countEl.textContent = `${unlocked.length} / ${ACHIEVEMENTS.length}`;

    const dot = document.getElementById('achieve-dot');
    if (dot) {
      if (newUnlockedCount > 0) dot.classList.remove('hidden');
    }
  }

  function toggleAchievements() {
    const dialog = document.getElementById('achievements-dialog');
    if (!dialog) return;

    if (dialog.open) {
      const currentScrollY = window.scrollY;
      dialog.close();
      if (window.scrollY !== currentScrollY) {
        window.scrollTo({ top: currentScrollY, behavior: 'instant' });
      }
    } else {
      renderAchievements();
      const currentScrollY = window.scrollY;
      dialog.showModal();
      if (window.scrollY !== currentScrollY) {
        window.scrollTo({ top: currentScrollY, behavior: 'instant' });
      }
      const dot = document.getElementById('achieve-dot');
      if (dot) dot.classList.add('hidden');
    }
  }

  function renderAchievements() {
    const listEl = document.getElementById('achievements-list');
    if (!listEl) return;

    let unlocked = [];
    try {
      unlocked = JSON.parse(localStorage.getItem(`${storagePrefix}achieve`) || '[]');
    } catch { unlocked = []; }

    listEl.innerHTML = '';
    ACHIEVEMENTS.forEach(ach => {
      const isDone = unlocked.includes(ach.id);
      const row = document.createElement('div');
      row.className = `achievement-row ${isDone ? 'unlocked' : ''}`;
      row.innerHTML = `
        <div class=\"achieve-icon-box\">${ach.icon}</div>
        <div class="achieve-info">
          <div class="achieve-name">${ach.name}</div>
          <div class="achieve-desc">${ach.desc}</div>
        </div>
        <div class="achieve-status">${isDone ? 'TERBUKA' : 'TERKUNCI'}</div>
      `;
      listEl.appendChild(row);
    });
  }

  function resetAllData() {
    if (!confirm('Hapus semua rekor, riwayat, dan XP pemain? Tindakan ini tidak dapat dibatalkan.')) return;
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(storagePrefix)) {
        localStorage.removeItem(key);
      }
    });
    updateHubPills();
    updateXpDisplay();
    renderLeaderboard(activeBoardGame);
    backToHub();
  }

  function updateHubPills() {
    Object.keys(gameConfigs).forEach((id) => {
      const el = document.getElementById(`best-${id}`);
      if (!el) return;
      const best = getBest(id);
      if (best === null) {
        el.textContent = '-';
      } else {
        const config = gameConfigs[id];
        el.textContent = `${best} ${config.unit}`;
      }
    });
  }

  function navigateTo(section) {
    backToHub();

    const targetSection = (section === 'hero') ? 'home' : section;

    document.querySelectorAll('.nav-link, .drawer-nav-item').forEach(link => {
      const linkNav = (link.dataset.nav === 'hero') ? 'home' : link.dataset.nav;
      link.classList.toggle('active', linkNav === targetSection);
    });

    if (section === 'home' || section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'minigames' || section === 'classic' || section === 'games-classic') {
      (document.getElementById('games-classic') || document.getElementById('minigames-section'))?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'advanced' || section === 'games-3d') {
      (document.getElementById('games-3d') || document.getElementById('advanced-section'))?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'leaderboard') {
      (document.getElementById('leaderboard') || document.getElementById('leaderboard-section'))?.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'faq') {
      document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function toggleMobileDrawer(open) {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (!drawer || !overlay) return;
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', isOpen);
    overlay.classList.toggle('open', isOpen);
    drawer.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function toggleFaq(btn) {
    if (!btn) return;
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!isExpanded));
    const item = btn.closest('.faq-item');
    if (item) {
      item.classList.toggle('open', !isExpanded);
    }
  }

  function filterCategory(category) {
    document.querySelectorAll('#minigames-section .tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    const cards = document.querySelectorAll('#games-grid .game-card');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  function filterAdvCategory(cat) {
    document.querySelectorAll('#adv-filter-tabs .tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.adv === cat);
    });
    renderAdvancedGrid(cat);
  }

  function searchGames(query) {
    const q = (query || '').toLowerCase().trim();
    const miniCards = document.querySelectorAll('#games-grid .game-card');
    miniCards.forEach(card => {
      const title = (card.querySelector('.card-title')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.card-desc')?.textContent || '').toLowerCase();
      if (!q || title.includes(q) || desc.includes(q)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });

    const advCards = document.querySelectorAll('#adv-games-grid .adv-card');
    advCards.forEach(card => {
      const title = (card.querySelector('.adv-title')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('.adv-desc')?.textContent || '').toLowerCase();
      const slot = card.closest('.adv-card-slot') || card;
      if (!q || title.includes(q) || desc.includes(q)) {
        slot.classList.remove('hidden');
      } else {
        slot.classList.add('hidden');
      }
    });
  }

  // Render Advanced 3D Grid with Direct Play button & sideways expanding details
  function renderAdvancedGrid(filterCat = 'all') {
    const grid = document.getElementById('adv-games-grid');
    if (!grid) return;

    const filtered = ADVANCED_GAMES.filter(g => filterCat === 'all' || g.category === filterCat);
    grid.innerHTML = '';

    filtered.forEach(game => {
      const slot = document.createElement('div');
      slot.className = 'adv-card-slot';

      const engineShort = (game.engine || 'WebGL').split('/')[0].trim();
      const renderMode = game.category === '3d' ? '3D WebGL' : '2D Canvas';

      const card = document.createElement('article');
      card.className = 'adv-card';
      card.innerHTML = `
        <div class="adv-card-main">
          <div class="game-card-thumb">
            <img src="${game.image}" alt="${game.title}" loading="lazy">
            <span class="thumb-badge">${game.category === '3d' ? '3D WEBGL' : 'ARCADE'}</span>
            <span class="thumb-diff">${game.difficulty}</span>
          </div>
          <div class="adv-tags-group">
            <span class="adv-tag engine">${game.engine}</span>
          </div>
          <h3 class="adv-title">${game.title}</h3>
          <p class="card-desc">${game.desc}</p>
          <div class="adv-actions">
            <button type="button" class="btn btn-primary adv-play-btn" onclick="window.Hub.playAdvancedGame('${game.id}')" title="Mainkan langsung di web ini">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Mainkan Game
            </button>
          </div>
        </div>
      `;

      slot.appendChild(card);
      grid.appendChild(slot);
    });
    init3DCardHover();
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }

  // Play an Advanced Repository Game directly in the on-site Stage
  function playAdvancedGame(gameId) {
    const game = ADVANCED_GAMES.find(g => g.id === gameId);
    if (!game) return;

    closeAdvModal();
    if (activeCleanup) {
      activeCleanup();
      activeCleanup = null;
    }
    activeGameId = gameId;

    document.getElementById('hub-view').classList.add('hidden');
    document.getElementById('game-view').classList.remove('hidden');

    document.getElementById('stage-game-title').textContent = `${game.title} [${game.engine}]`;
    document.getElementById('stage-best-score').textContent = 'Live Ready';

    const canvas = document.getElementById('game-canvas');
    const optionsPanel = document.getElementById('game-options-panel');
    canvas.innerHTML = '';
    optionsPanel.innerHTML = '';

    SoundFX.playSuccess();
    addXp(30);

    optionsPanel.innerHTML = `
      <div class="option-group">
        <span class="option-label">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px; margin-right:4px;">
            <rect x="2" y="6" width="20" height="12" rx="4"></rect>
            <line x1="6" y1="12" x2="10" y2="12"></line>
            <line x1="8" y1="10" x2="8" y2="14"></line>
            <line x1="15" y1="13" x2="15.01" y2="13"></line>
            <line x1="18" y1="11" x2="18.01" y2="11"></line>
          </svg>
          Kontrol:
        </span>
        <span style="font-size: 0.82rem; color: var(--text-primary); font-weight: 600;">${game.controls}</span>
      </div>
      <div class="option-group">
        <span class="option-label">Pengembang:</span>
        <span style="font-size: 0.82rem; color: var(--accent); font-weight: 700;">${game.author}</span>
      </div>
    `;

    const wrap = document.createElement('div');
    wrap.className = 'runner-stage-wrap';
    wrap.innerHTML = `
      <div class=\"runner-header-bar\">
        <div class=\"runner-keys-tip\">
          <svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">
            <polygon points=\"5 3 19 12 5 21 5 3\"></polygon>
          </svg>
          <span>Game aktif di browser. Klik kanvas untuk mulai berinteraksi.</span>
        </div>
        <div class=\"runner-header-actions\">
          <button class=\"btn btn-sm btn-outline\" id=\"btn-fullscreen-runner\" title=\"Fullscreen Mode [F]\">
            <svg viewBox=\"0 0 24 24\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">
              <path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>
            </svg>
            Fullscreen [F]
          </button>
          <a href=\"${game.playUrl}\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-sm\" title=\"Buka di Tab Baru\">
            Tab Baru
            <svg viewBox=\"0 0 24 24\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"display:inline-block; vertical-align:-1px; margin-left:4px;\"><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line></svg>
          </a>
        </div>
      </div>
      <div class=\"runner-iframe-frame\" id=\"runner-frame-box\">
        <iframe id=\"adv-iframe\" src=\"${game.playUrl}\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; pointer-lock\" allowfullscreen></iframe>
      </div>
    `;
    canvas.appendChild(wrap);

    const frameBox = wrap.querySelector('#runner-frame-box');
    const fsBtn = wrap.querySelector('#btn-fullscreen-runner');
    const iframeEl = wrap.querySelector('#adv-iframe');

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        frameBox.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }

    fsBtn.addEventListener('click', toggleFullscreen);

    function reloadGame() {
      if (iframeEl) iframeEl.src = game.playUrl;
    }

    activeRestartFn = reloadGame;
    activeCleanup = () => {
      fsBtn.removeEventListener('click', toggleFullscreen);
      if (iframeEl) iframeEl.src = 'about:blank';
    };

    // History panel display
    const listEl = document.getElementById('history-items');
    if (listEl) {
      listEl.innerHTML = `
        <span class=\"history-chip best\">Sedang Aktif: ${game.title} (+30 XP)</span>
        <span class=\"history-chip\">Engine: ${game.engine}</span>
        <span class=\"history-chip\">Repo: ${game.author}</span>
      `;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openAdvModal(gameId) {
    const game = ADVANCED_GAMES.find(g => g.id === gameId);
    if (!game) return;

    const currentScrollY = window.scrollY;

    const dialog = document.getElementById('adv-game-dialog');
    const titleEl = document.getElementById('adv-modal-title');
    const bodyEl = document.getElementById('adv-modal-body');
    const footerEl = document.getElementById('adv-modal-footer');

    titleEl.textContent = game.title;
    bodyEl.innerHTML = `
      <p class="footer-text" style="margin-bottom: 8px;">${game.desc}</p>
      
      <div class="adv-modal-specs">
        <div class="spec-item">
          <span class="spec-lbl">Engine Grafis</span>
          <span class="spec-val">${game.engine}</span>
        </div>
        <div class="spec-item">
          <span class="spec-lbl">Pengembang Repositori</span>
          <span class="spec-val">${game.author}</span>
        </div>
        <div class="spec-item">
          <span class="spec-lbl">Tingkat Kompleksitas</span>
          <span class="spec-val">${game.difficulty}</span>
        </div>
        <div class="spec-item">
          <span class="spec-lbl">Integrasi Game</span>
          <span class="spec-val">Direct Playable</span>
        </div>
      </div>

      <div class="adv-control-box">
        <div class="adv-control-title">Panduan Kendali & Navigasi:</div>
        <div class="control-item">
          <span>${game.controls}</span>
        </div>
      </div>
    `;

    footerEl.innerHTML = `
      <div class="modal-footer-links">
        <button type="button" class="btn btn-sm" onclick="window.Hub.closeAdvModal()">Tutup</button>
        <a href="${game.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm">
          GitHub
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
        <a href="${game.playUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm">
          Tab Baru
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
      <button type="button" class="btn btn-primary" onclick="window.Hub.playAdvancedGame('${game.id}')">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        Mainkan di Hub Ini
      </button>
    `;

    dialog.showModal();
    if (window.scrollY !== currentScrollY) {
      window.scrollTo({ top: currentScrollY, behavior: 'instant' });
    }
  }

  function closeAdvModal() {
    const dialog = document.getElementById('adv-game-dialog');
    if (dialog && dialog.open) {
      const currentScrollY = window.scrollY;
      dialog.close();
      if (window.scrollY !== currentScrollY) {
        window.scrollTo({ top: currentScrollY, behavior: 'instant' });
      }
    }
  }

  // Render Leaderboard
  function switchLeaderboard(gameId) {
    activeBoardGame = gameId;
    document.querySelectorAll('#board-game-tabs .segment-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.board === gameId);
    });
    renderLeaderboard(gameId);
  }

  function renderLeaderboard(gameId) {
    const rowsEl = document.getElementById('leaderboard-rows');
    if (!rowsEl) return;

    const config = gameConfigs[gameId];
    if (!config) return;
    const benchmarks = BENCHMARK_LEADERBOARDS[gameId] || [];
    const playerBest = getBest(gameId);

    const modeTitleEl = document.getElementById('board-active-mode-title');
    if (modeTitleEl) {
      modeTitleEl.textContent = config.title;
    }

    // Build combined score list
    const combined = benchmarks.map(b => ({ ...b, isPlayer: false }));
    let playerRank = null;
    if (playerBest !== null) {
      combined.push({
        name: 'Kamu (Pemain)',
        score: playerBest,
        precision: 'Rekor Lokal',
        isPlayer: true
      });
    }

    // Sort by lower or higher
    combined.sort((a, b) => config.lowerIsBetter ? a.score - b.score : b.score - a.score);

    rowsEl.innerHTML = '';
    combined.slice(0, 6).forEach((item, idx) => {
      const rank = idx + 1;
      if (item.isPlayer) playerRank = rank;
      const row = document.createElement('div');
      row.className = `leaderboard-row ${item.isPlayer ? 'player-highlight' : ''}`;
      row.innerHTML = `
        <div class="rank-badge-wrap">
          <span class="rank-badge top-${rank}">#${rank}</span>
        </div>
        <div class="player-name-cell">
          <div class="player-avatar-mini ${item.isPlayer ? 'avatar-player' : 'avatar-bot'}">
            ${item.isPlayer ? 'YOU' : rank === 1 ? 'TOP' : 'BOT'}
          </div>
          <div class="player-name-wrap">
            <span class="player-name">${item.name}</span>
            ${item.isPlayer ? '<span class="player-tag">KAMU (LOKAL)</span>' : ''}
          </div>
        </div>
        <div class="score-cell">
          <span class="score-val">${item.score}</span>
          <span class="score-unit">${config.unit}</span>
        </div>
        <div class="precision-cell">
          <span class="precision-pill ${item.isPlayer ? 'precision-player' : ''}">${item.precision}</span>
        </div>
      `;
      rowsEl.appendChild(row);
    });

    const calloutEl = document.getElementById('board-user-callout');
    if (calloutEl) {
      if (playerBest !== null && playerRank !== null) {
        calloutEl.innerHTML = `
          <div class="board-callout-inner has-record">
            <div class="callout-text">
              <span class="callout-label">REKOR PRIBADI ANDA</span>
              <span class="callout-val">Peringkat <strong>#${playerRank}</strong> dengan rekor <strong>${playerBest} ${config.unit}</strong></span>
            </div>
            <button class="btn btn-sm btn-primary" onclick="window.Hub.startGame('${gameId}')">
              Tantang Ulang
            </button>
          </div>
        `;
      } else {
        calloutEl.innerHTML = `
          <div class="board-callout-inner no-record">
            <div class="callout-text">
              <span class="callout-label">BELUM ADA REKOR LOKAL</span>
              <span class="callout-desc">Uji ketangkasanmu di mode <strong>${config.title}</strong> sekarang!</span>
            </div>
            <button class="btn btn-sm btn-primary" onclick="window.Hub.startGame('${gameId}')">
              Mulai Bermain
            </button>
          </div>
        `;
      }
    }
  }

  function renderHistoryPanel(gameId) {
    const listEl = document.getElementById('history-items');
    if (!listEl) return;
    const hist = getHistory(gameId);
    const config = gameConfigs[gameId];
    const best = getBest(gameId);

    if (hist.length === 0) {
      listEl.innerHTML = `<span class=\"empty-hint\">Belum ada riwayat sesi tercatat untuk mode ini.</span>`;
      return;
    }

    listEl.innerHTML = '';
    hist.forEach((item, idx) => {
      const isBest = best !== null && item.score === best;
      const chip = document.createElement('span');
      chip.className = `history-chip ${isBest ? 'best' : ''}`;
      chip.textContent = `#${idx + 1}: ${item.score} ${config.unit}${isBest ? ' [REKOR]' : ''}`;
      listEl.appendChild(chip);
    });
  }

  function backToHub() {
    if (activeCleanup) {
      activeCleanup();
      activeCleanup = null;
    }
    activeRestartFn = null;
    activeGameId = null;

    document.getElementById('game-view').classList.add('hidden');
    document.getElementById('hub-view').classList.remove('hidden');
    document.getElementById('game-canvas').innerHTML = '';
    document.getElementById('game-options-panel').innerHTML = '';
    updateHubPills();
  }

  function restartActiveGame() {
    SoundFX.playClick();
    if (activeRestartFn) activeRestartFn();
  }

  function startGame(gameId) {
    if (activeCleanup) {
      activeCleanup();
      activeCleanup = null;
    }
    activeGameId = gameId;

    document.getElementById('hub-view').classList.add('hidden');
    document.getElementById('game-view').classList.remove('hidden');

    const config = gameConfigs[gameId];
    const best = getBest(gameId);
    document.getElementById('stage-game-title').textContent = config.title;
    document.getElementById('stage-best-score').textContent = best !== null ? `${best} ${config.unit}` : '-';

    const canvas = document.getElementById('game-canvas');
    const optionsPanel = document.getElementById('game-options-panel');
    canvas.innerHTML = '';
    optionsPanel.innerHTML = '';

    renderHistoryPanel(gameId);

    if (gameId === 'reaction') initReactionGame(canvas, optionsPanel);
    else if (gameId === 'aim') initAimGame(canvas, optionsPanel);
    else if (gameId === 'cps') initCpsGame(canvas, optionsPanel);
    else if (gameId === 'guess') initGuessGame(canvas, optionsPanel);
    else if (gameId === 'memory') initMemoryGame(canvas, optionsPanel);
    else if (gameId === 'typing') initTypingGame(canvas, optionsPanel);
    else if (gameId === 'stroop') initStroopGame(canvas, optionsPanel);
    else if (gameId === 'sequence') initSequenceGame(canvas, optionsPanel);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==========================================
  // GAME 1: REACTION TIME (Single & Marathon)
  // ==========================================
  function initReactionGame(canvas, optionsPanel) {
    let mode = 'single';
    let rounds = [];
    let state = 'idle';
    let timer = null;
    let startTime = 0;

    optionsPanel.innerHTML = `
      <div class=\"option-group\">
        <span class=\"option-label\">Mode Tes:</span>
        <div class=\"segmented-control\">
          <button class=\"segment-btn active\" data-mode=\"single\">Single Round</button>
          <button class=\"segment-btn\" data-mode=\"marathon\">Marathon (5 Ronde)</button>
        </div>
      </div>
      <div class=\"option-group\">
        <span class=\"option-label\" id=\"reaction-round-status\">Status: Siap Mulai</span>
      </div>
    `;

    optionsPanel.querySelectorAll('.segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        optionsPanel.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mode = btn.dataset.mode;
        reset();
      });
    });

    const stage = document.createElement('div');
    stage.className = 'reaction-stage idle';
    stage.setAttribute('tabindex', '0');
    stage.setAttribute('role', 'button');
    stage.setAttribute('aria-label', 'Kanvas Reaction Time');
    canvas.appendChild(stage);

    function updateView() {
      if (state === 'idle') {
        stage.className = 'reaction-stage idle';
        stage.innerHTML = `
          <div class="reaction-text">Mulai Uji Refleks</div>
          <div class="reaction-sub">Klik area ini atau tekan [Space]. Layar akan merah, lalu hijau.</div>
        `;
      } else if (state === 'waiting') {
        stage.className = 'reaction-stage waiting';
        stage.innerHTML = `
          <div class="reaction-text">Tunggu Hijau...</div>
          <div class="reaction-sub">Fokus penuh. Jangan klik sebelum warna hijau solid muncul!</div>
        `;
      } else if (state === 'ready') {
        stage.className = 'reaction-stage ready';
        stage.innerHTML = `
          <div class="reaction-text">KLIK SEKARANG!</div>
          <div class="reaction-sub">Klik secepat kilat!</div>
        `;
      }
    }

    function triggerAction(e) {
      if (e && e.type === 'pointerdown') e.preventDefault();
      if (state === 'idle') {
        SoundFX.playTick();
        state = 'waiting';
        updateView();
        const delay = Math.floor(Math.random() * 2500) + 1500;
        timer = setTimeout(() => {
          state = 'ready';
          startTime = performance.now();
          SoundFX.playHit();
          updateView();
        }, delay);
      } else if (state === 'waiting') {
        clearTimeout(timer);
        SoundFX.playFail();
        state = 'idle';
        stage.className = 'reaction-stage early';
        stage.innerHTML = `
          <div class="reaction-text">Terlalu Cepat!</div>
          <div class="reaction-sub">Refleks tergesa-gesa sebelum hijau. Klik lagi untuk mencoba kembali.</div>
        `;
      } else if (state === 'ready') {
        const ms = Math.round(performance.now() - startTime);
        SoundFX.playClick();
        rounds.push(ms);

        if (mode === 'single' || rounds.length >= 5) {
          const finalScore = mode === 'marathon' ? calculateAverage(rounds) : ms;
          const isBest = saveBest('reaction', finalScore);
          recordSession('reaction', finalScore);
          state = 'idle';
          stage.className = 'reaction-stage result';
          stage.innerHTML = `
            <div class="reaction-text">${finalScore} ms</div>
            <div class="reaction-sub">${mode === 'marathon' ? `Rata-rata 5 ronde (${rounds.join(', ')})` : 'Kecepatan refleks satu ronde'}</div>
            <div class="reaction-sub" style="margin-top: 10px; color: var(--cyan-text); font-weight: 700;">${isBest ? 'Rekor Baru Tercatat!' : 'Klik untuk mengulang'}</div>
          `;
          rounds = [];
          document.getElementById('stage-best-score').textContent = `${getBest('reaction')} ms`;
        } else {
          state = 'idle';
          stage.className = 'reaction-stage result';
          stage.innerHTML = `
            <div class="reaction-text">${ms} ms</div>
            <div class="reaction-sub">Ronde ${rounds.length} dari 5 selesai. Klik untuk ronde berikutnya.</div>
          `;
        }
      }
    }

    function reset() {
      clearTimeout(timer);
      rounds = [];
      state = 'idle';
      updateView();
    }

    stage.addEventListener('pointerdown', triggerAction);
    activeRestartFn = reset;
    activeCleanup = () => {
      clearTimeout(timer);
      stage.removeEventListener('pointerdown', triggerAction);
    };

    updateView();
  }

  // ==========================================
  // GAME 2: AIM TRAINER
  // ==========================================
  function initAimGame(canvas, optionsPanel) {
    let targetSize = 40;
    let totalTargets = 20;
    let hitCount = 0;
    let startTime = 0;
    let isRunning = false;

    optionsPanel.innerHTML = `
      <div class=\"option-group\">
        <span class=\"option-label\">Ukuran Sasaran:</span>
        <div class=\"segmented-control\" id=\"aim-size-control\">
          <button class=\"segment-btn active\" data-size=\"40\">Normal (40px)</button>
          <button class=\"segment-btn\" data-size=\"30\">Pro (30px)</button>
          <button class=\"segment-btn\" data-size=\"22\">Extreme (22px)</button>
        </div>
      </div>
      <div class=\"option-group\">
        <span class=\"option-label\">Jumlah:</span>
        <div class=\"segmented-control\" id=\"aim-count-control\">
          <button class=\"segment-btn active\" data-count=\"20\">20 Target</button>
          <button class=\"segment-btn\" data-count=\"30\">30 Target</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#aim-size-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#aim-size-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      targetSize = Number(btn.dataset.size);
      reset();
    });

    optionsPanel.querySelector('#aim-count-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#aim-count-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      totalTargets = Number(btn.dataset.count);
      reset();
    });

    const wrap = document.createElement('div');
    wrap.className = 'aim-canvas-wrap';
    wrap.innerHTML = `
      <div class="aim-hud">
        <span>Sasaran Terkena: <strong id="aim-hud-count">0 / ${totalTargets}</strong></span>
        <span id="aim-hud-msg">Klik "Mulai Latihan" untuk aktivasi arena.</span>
      </div>
      <div class="aim-stage" id="aim-field"></div>
      <div style="display: flex; justify-content: center;">
        <button class="btn btn-primary" id="aim-start-btn">Mulai Latihan</button>
      </div>
    `;
    canvas.appendChild(wrap);

    const field = wrap.querySelector('#aim-field');
    const startBtn = wrap.querySelector('#aim-start-btn');
    const countEl = wrap.querySelector('#aim-hud-count');
    const msgEl = wrap.querySelector('#aim-hud-msg');

    function spawnTarget() {
      field.innerHTML = '';
      const dot = document.createElement('div');
      dot.className = 'aim-target';
      dot.style.width = `${targetSize}px`;
      dot.style.height = `${targetSize}px`;

      const x = Math.floor(Math.random() * 80) + 10;
      const y = Math.floor(Math.random() * 80) + 10;
      dot.style.left = `${x}%`;
      dot.style.top = `${y}%`;

      dot.addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        hitCount++;
        SoundFX.playHit();
        countEl.textContent = `${hitCount} / ${totalTargets}`;

        if (hitCount >= totalTargets) {
          finish();
        } else {
          spawnTarget();
        }
      });

      field.appendChild(dot);
    }

    field.addEventListener('pointerdown', () => {
      if (isRunning) SoundFX.playTick();
    });

    function start() {
      isRunning = true;
      hitCount = 0;
      countEl.textContent = `0 / ${totalTargets}`;
      msgEl.textContent = 'Klik setiap sasaran secepat mungkin!';
      startBtn.style.display = 'none';
      startTime = performance.now();
      spawnTarget();
    }

    function finish() {
      isRunning = false;
      field.innerHTML = '';
      const elapsed = performance.now() - startTime;
      const avg = Math.round(elapsed / totalTargets);
      const isBest = saveBest('aim', avg);
      recordSession('aim', avg);
      document.getElementById('stage-best-score').textContent = `${getBest('aim')} ms/tgt`;

      msgEl.innerHTML = `Selesai! Rata-rata: <strong>${avg} ms/target</strong> ${isBest ? '<span class="stat-highlight">Rekor Baru!</span>' : ''}`;
      startBtn.style.display = 'inline-flex';
      startBtn.textContent = 'Ulangi Latihan';
    }

    function reset() {
      isRunning = false;
      hitCount = 0;
      field.innerHTML = '';
      countEl.textContent = `0 / ${totalTargets}`;
      msgEl.textContent = 'Pengaturan diperbarui. Klik Mulai.';
      startBtn.style.display = 'inline-flex';
      startBtn.textContent = 'Mulai Latihan';
    }

    startBtn.addEventListener('click', start);
    activeRestartFn = reset;
    activeCleanup = () => {
      field.innerHTML = '';
      startBtn.removeEventListener('click', start);
    };
  }

  // ==========================================
  // GAME 3: CPS TEST
  // ==========================================
  function initCpsGame(canvas, optionsPanel) {
    let duration = 5;
    let clicks = 0;
    let isRunning = false;
    let isFinished = false;
    let interval = null;

    optionsPanel.innerHTML = `
      <div class=\"option-group\">
        <span class=\"option-label\">Durasi Tes:</span>
        <div class=\"segmented-control\" id=\"cps-dur-control\">
          <button class=\"segment-btn\" data-dur=\"1\">1 Detik (Burst)</button>
          <button class=\"segment-btn active\" data-dur=\"5\">5 Detik (Reguler)</button>
          <button class=\"segment-btn\" data-dur=\"10\">10 Detik (Endurance)</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#cps-dur-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#cps-dur-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      duration = Number(btn.dataset.dur);
      reset();
    });

    const wrap = document.createElement('div');
    wrap.className = 'cps-canvas-wrap';
    wrap.innerHTML = `
      <div class="cps-hud">
        <div class="cps-hud-cell">
          <div class="cps-cell-val" id="cps-timer">${duration}.0s</div>
          <div class="cps-cell-lbl">Waktu Tersisa</div>
        </div>
        <div class="cps-hud-cell">
          <div class="cps-cell-val" id="cps-clicks-num">0</div>
          <div class="cps-cell-lbl">Jumlah Klik</div>
        </div>
        <div class="cps-hud-cell">
          <div class="cps-cell-val" id="cps-rate">0.0</div>
          <div class="cps-cell-lbl">Laju CPS</div>
        </div>
      </div>
      <div class="cps-stage">
        <button class="cps-click-btn" id="cps-clicker" aria-label="Tekan tombol untuk menghitung klik">
          <span class="cps-count" id="cps-big-count">0</span>
          <span class="cps-lbl" id="cps-big-lbl">KLIK / TAP</span>
        </button>
      </div>
      <div style="display: flex; justify-content: center;">
        <button class="btn btn-outline" id="cps-retry-btn" style="display: none;">Ulangi Tes</button>
      </div>
    `;
    canvas.appendChild(wrap);

    const timerEl = wrap.querySelector('#cps-timer');
    const clicksEl = wrap.querySelector('#cps-clicks-num');
    const rateEl = wrap.querySelector('#cps-rate');
    const clicker = wrap.querySelector('#cps-clicker');
    const bigCount = wrap.querySelector('#cps-big-count');
    const bigLbl = wrap.querySelector('#cps-big-lbl');
    const retryBtn = wrap.querySelector('#cps-retry-btn');

    function handleClick(e) {
      if (e) e.preventDefault();
      if (isFinished) return;
      SoundFX.playTick();

      if (!isRunning) {
        isRunning = true;
        clicks = 1;
        clicksEl.textContent = clicks;
        bigCount.textContent = clicks;
        bigLbl.textContent = 'CEPAT!';

        const startTimestamp = performance.now();
        interval = setInterval(() => {
          const elapsed = (performance.now() - startTimestamp) / 1000;
          const remaining = Math.max(0, duration - elapsed);
          timerEl.textContent = `${remaining.toFixed(1)}s`;

          const currentCps = calculateCps(clicks, Math.max(0.1, elapsed));
          rateEl.textContent = currentCps.toFixed(1);

          if (remaining <= 0) {
            clearInterval(interval);
            finish();
          }
        }, 40);
        return;
      }

      clicks++;
      clicksEl.textContent = clicks;
      bigCount.textContent = clicks;
    }

    function finish() {
      isRunning = false;
      isFinished = true;
      timerEl.textContent = '0.0s';
      const finalCps = calculateCps(clicks, duration);
      rateEl.textContent = finalCps.toFixed(1);
      clicker.disabled = true;

      const isBest = saveBest('cps', finalCps);
      recordSession('cps', finalCps);
      document.getElementById('stage-best-score').textContent = `${getBest('cps')} CPS`;

      bigCount.textContent = finalCps;
      bigLbl.textContent = isBest ? 'REKOR BARU!' : 'SELESAI';
      retryBtn.style.display = 'inline-flex';
    }

    function reset() {
      clearInterval(interval);
      isRunning = false;
      isFinished = false;
      clicks = 0;
      timerEl.textContent = `${duration}.0s`;
      clicksEl.textContent = '0';
      rateEl.textContent = '0.0';
      bigCount.textContent = '0';
      bigLbl.textContent = 'KLIK / TAP';
      clicker.disabled = false;
      retryBtn.style.display = 'none';
    }

    clicker.addEventListener('pointerdown', handleClick);
    retryBtn.addEventListener('click', reset);
    activeRestartFn = reset;
    activeCleanup = () => {
      clearInterval(interval);
      clicker.removeEventListener('pointerdown', handleClick);
      retryBtn.removeEventListener('click', reset);
    };
  }

  // ==========================================
  // GAME 4: TEBAK ANGKA
  // ==========================================
  function initGuessGame(canvas, optionsPanel) {
    let maxRange = 100;
    let target = Math.floor(Math.random() * maxRange) + 1;
    let attempts = 0;
    let isGameOver = false;

    optionsPanel.innerHTML = `
      <div class=\"option-group\">
        <span class=\"option-label\">Rentang Tebakan:</span>
        <div class=\"segmented-control\" id=\"guess-range-control\">
          <button class=\"segment-btn active\" data-range=\"100\">1 - 100 (Standar)</button>
          <button class=\"segment-btn\" data-range=\"500\">1 - 500 (Tantangan)</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#guess-range-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#guess-range-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      maxRange = Number(btn.dataset.range);
      reset();
    });

    const wrap = document.createElement('div');
    wrap.className = 'guess-canvas-wrap';
    wrap.innerHTML = `
      <div class="guess-stage">
        <h2>Tebak Angka Rahasia (1 - <span id="max-label">${maxRange}</span>)</h2>
        <div class="guess-bar-wrap">
          <div class="guess-bar-header">
            <span class="guess-bar-title">KEDEKATAN LOGIKA TARGET</span>
            <span class="guess-bar-status" id="prox-status">Siap Menebak (0%)</span>
          </div>
          <div class="guess-bar-track" title="Indikator Kedekatan Nilai">
            <div class="guess-bar-fill" id="prox-fill"></div>
          </div>
        </div>
        <form class="guess-input-wrap" id="guess-input-form">
          <input type="number" id="guess-val" class="guess-input" min="1" max="${maxRange}" placeholder="Ketik angka..." required />
          <button type="submit" class="btn btn-primary">Tebak [Enter]</button>
        </form>
        <div class="guess-msg-box" id="guess-msg">Masukkan angka pertamamu untuk memulai pelacakan logika.</div>
        <div class="guess-log-chips" id="guess-chips"></div>
        <div style="display:flex; justify-content:center;">
          <button class="btn btn-outline" id="guess-repeat-btn" style="display:none;">Main Lagi</button>
        </div>
      </div>
    `;
    canvas.appendChild(wrap);

    const form = wrap.querySelector('#guess-input-form');
    const input = wrap.querySelector('#guess-val');
    const msg = wrap.querySelector('#guess-msg');
    const chips = wrap.querySelector('#guess-chips');
    const proxFill = wrap.querySelector('#prox-fill');
    const proxStatus = wrap.querySelector('#prox-status');
    const repeatBtn = wrap.querySelector('#guess-repeat-btn');
    const maxLabel = wrap.querySelector('#max-label');

    function handleSubmit(e) {
      e.preventDefault();
      if (isGameOver) return;

      const val = parseInt(input.value, 10);
      const res = compareGuess(val, target, maxRange);

      if (res === 'invalid') {
        SoundFX.playFail();
        msg.textContent = `Masukkan angka valid antara 1 hingga ${maxRange}.`;
        return;
      }

      attempts++;
      input.value = '';
      input.focus();

      const prox = calculateProximity(val, target, maxRange);
      proxFill.style.width = `${prox.percent}%`;
      proxFill.style.backgroundColor = prox.color;
      if (proxStatus) {
        proxStatus.textContent = `${prox.label} (${prox.percent}%)`;
        proxStatus.style.color = prox.color;
      }

      const chip = document.createElement('span');
      chip.className = 'history-chip';

      if (res === 'too_low') {
        SoundFX.playTick();
        msg.textContent = `Nilai ${val} terlalu KECIL. [${prox.label}]`;
        chip.textContent = `${val} [Naik]`;
      } else if (res === 'too_high') {
        SoundFX.playTick();
        msg.textContent = `Nilai ${val} terlalu BESAR. [${prox.label}]`;
        chip.textContent = `${val} [Turun]`;
      } else {
        isGameOver = true;
        SoundFX.playSuccess();
        msg.innerHTML = `<strong>TEPAT!</strong> Angka <strong>${target}</strong> berhasil ditebak dalam ${attempts} percobaan.`;
        chip.textContent = `${val} [TEPAT]`;
        chip.classList.add('best');
        input.disabled = true;
        repeatBtn.style.display = 'inline-flex';

        saveBest('guess', attempts);
        recordSession('guess', attempts);
        document.getElementById('stage-best-score').textContent = `${getBest('guess')} tebakan`;
      }

      chips.appendChild(chip);
    }

    function reset() {
      target = Math.floor(Math.random() * maxRange) + 1;
      attempts = 0;
      isGameOver = false;
      input.disabled = false;
      input.max = String(maxRange);
      maxLabel.textContent = String(maxRange);
      input.value = '';
      proxFill.style.width = '0%';
      proxFill.style.backgroundColor = 'var(--cyan-top)';
      if (proxStatus) {
        proxStatus.textContent = 'Siap Menebak (0%)';
        proxStatus.style.color = '';
      }
      chips.innerHTML = '';
      msg.textContent = `Angka baru 1 - ${maxRange} siap ditebak!`;
      repeatBtn.style.display = 'none';
      input.focus();
    }

    form.addEventListener('submit', handleSubmit);
    repeatBtn.addEventListener('click', reset);
    activeRestartFn = reset;
    activeCleanup = () => {
      form.removeEventListener('submit', handleSubmit);
      repeatBtn.removeEventListener('click', reset);
    };
  }

  // ==========================================
  // GAME 5: MEMORY MATCH
  // ==========================================
  function initMemoryGame(canvas, optionsPanel) {
    const ALL_KEYS = ['zap', 'target', 'clock', 'brain', 'trophy', 'shield', 'flame', 'compass'];
    let pairCount = 8;
    let cards = [];
    let flipped = [];
    let matched = 0;
    let moves = 0;
    let isLocked = false;
    let startTime = 0;
    let timer = null;

    optionsPanel.innerHTML = `
      <div class=\"option-group\">
        <span class=\"option-label\">Ukuran Papan:</span>
        <div class=\"segmented-control\" id=\"mem-pairs-control\">
          <button class=\"segment-btn active\" data-pairs=\"8\">8 Pasang (16 Kartu)</button>
          <button class=\"segment-btn\" data-pairs=\"6\">6 Pasang (12 Kartu)</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#mem-pairs-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#mem-pairs-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      pairCount = Number(btn.dataset.pairs);
      reset();
    });

    const wrap = document.createElement('div');
    wrap.className = 'memory-canvas-wrap';
    wrap.innerHTML = `
      <div class="memory-hud">
        <span>Langkah: <strong id="mem-hud-moves">0</strong></span>
        <span>Waktu: <strong id="mem-hud-time">0s</strong></span>
        <span>Pasangan: <strong id="mem-hud-pairs">0/${pairCount}</strong></span>
      </div>
      <div class="memory-stage" id="mem-board"></div>
      <div style="display:flex; justify-content:center;">
        <button class="btn btn-outline" id="mem-shuffle-btn">Acak Ulang Kartu</button>
      </div>
    `;
    canvas.appendChild(wrap);

    const board = wrap.querySelector('#mem-board');
    const movesEl = wrap.querySelector('#mem-hud-moves');
    const timeEl = wrap.querySelector('#mem-hud-time');
    const pairsEl = wrap.querySelector('#mem-hud-pairs');
    const shuffleBtn = wrap.querySelector('#mem-shuffle-btn');

    function buildDeck() {
      const selectedKeys = ALL_KEYS.slice(0, pairCount);
      cards = shuffleArray([...selectedKeys, ...selectedKeys]);
      board.innerHTML = '';

      cards.forEach((key, idx) => {
        const tile = document.createElement('button');
        tile.className = 'memory-tile';
        tile.dataset.index = idx;
        tile.setAttribute('aria-label', 'Kartu tersembunyi');
        tile.innerHTML = SVG_ICONS[key];
        tile.addEventListener('click', () => onTileClick(idx, tile));
        board.appendChild(tile);
      });
    }

    function onTileClick(idx, el) {
      if (isLocked || el.classList.contains('open') || el.classList.contains('matched')) return;

      SoundFX.playTick();

      if (moves === 0 && flipped.length === 0 && !timer) {
        startTime = performance.now();
        timer = setInterval(() => {
          const sec = Math.floor((performance.now() - startTime) / 1000);
          timeEl.textContent = `${sec}s`;
        }, 1000);
      }

      el.classList.add('open');
      flipped.push({ index: idx, key: cards[idx], element: el });

      if (flipped.length === 2) {
        moves++;
        movesEl.textContent = moves;
        checkPair();
      }
    }

    function checkPair() {
      const [first, second] = flipped;
      if (first.key === second.key) {
        SoundFX.playHit();
        first.element.classList.remove('open');
        second.element.classList.remove('open');
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        matched++;
        pairsEl.textContent = `${matched}/${pairCount}`;
        flipped = [];

        if (matched >= pairCount) {
          finish();
        }
      } else {
        isLocked = true;
        setTimeout(() => {
          first.element.classList.remove('open');
          second.element.classList.remove('open');
          flipped = [];
          isLocked = false;
        }, 600);
      }
    }

    function finish() {
      clearInterval(timer);
      const totalSec = Math.max(1, Math.round((performance.now() - startTime) / 1000));
      const isBest = saveBest('memory', totalSec);
      recordSession('memory', totalSec);
      document.getElementById('stage-best-score').textContent = `${getBest('memory')} detik`;
      pairsEl.textContent = `${pairCount}/${pairCount} (Selesai!)`;
    }

    function reset() {
      clearInterval(timer);
      timer = null;
      flipped = [];
      matched = 0;
      moves = 0;
      isLocked = false;
      movesEl.textContent = '0';
      timeEl.textContent = '0s';
      pairsEl.textContent = `0/${pairCount}`;
      buildDeck();
    }

    shuffleBtn.addEventListener('click', reset);
    activeRestartFn = reset;
    activeCleanup = () => {
      clearInterval(timer);
      shuffleBtn.removeEventListener('click', reset);
      board.innerHTML = '';
    };

    buildDeck();
  }

  // ==========================================
  // GAME 6: TYPING SPEED (WPM)
  // ==========================================
  function initTypingGame(canvas, optionsPanel) {
    const WORD_BANK = [
      'speed', 'react', 'pixel', 'focus', 'logic', 'cyber', 'arcade', 'turbo',
      'frame', 'input', 'matrix', 'stream', 'engine', 'canvas', 'memory', 'timing',
      'vector', 'online', 'signal', 'sensor', 'master', 'record', 'future', 'hyper',
      'system', 'shadow', 'gaming', 'photon', 'render', 'sprite', 'reflex', 'circuit'
    ];

    let duration = 30;
    let words = [];
    let currentWordIdx = 0;
    let correctChars = 0;
    let totalTyped = 0;
    let isRunning = false;
    let isFinished = false;
    let timer = null;
    let timeLeft = duration;

    optionsPanel.innerHTML = `
      <div class="option-group">
        <span class="option-label">Durasi Ketik:</span>
        <div class="segmented-control" id="typing-dur-control">
          <button class="segment-btn" data-dur="15">15 Detik (Sprint)</button>
          <button class="segment-btn active" data-dur="30">30 Detik (Reguler)</button>
          <button class="segment-btn" data-dur="60">60 Detik (Maraton)</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#typing-dur-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#typing-dur-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      duration = Number(btn.dataset.dur);
      reset();
    });

    const wrap = document.createElement('div');
    wrap.className = 'typing-stage';
    wrap.innerHTML = `
      <div class="typing-stats-row">
        <div class="typing-stat-item">
          <span class="typing-stat-val" id="type-wpm">0</span>
          <span class="typing-stat-lbl">WPM</span>
        </div>
        <div class="typing-stat-item">
          <span class="typing-stat-val" id="type-acc">100%</span>
          <span class="typing-stat-lbl">Akurasi</span>
        </div>
        <div class="typing-stat-item">
          <span class="typing-stat-val" id="type-time">${duration}s</span>
          <span class="typing-stat-lbl">Waktu</span>
        </div>
      </div>
      <div class="typing-prompt-box" id="type-prompt"></div>
      <input type="text" class="typing-input" id="type-input" placeholder="Mulai mengetik kata pertama..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
      <div style="display:flex; justify-content:center;">
        <button class="btn btn-outline" id="type-retry-btn" style="display:none;">Ulangi Tes</button>
      </div>
    `;
    canvas.appendChild(wrap);

    const wpmEl = wrap.querySelector('#type-wpm');
    const accEl = wrap.querySelector('#type-acc');
    const timeEl = wrap.querySelector('#type-time');
    const promptEl = wrap.querySelector('#type-prompt');
    const inputEl = wrap.querySelector('#type-input');
    const retryBtn = wrap.querySelector('#type-retry-btn');

    function generateWords() {
      words = shuffleArray(WORD_BANK).slice(0, 45);
      currentWordIdx = 0;
      renderPrompt('');
    }

    function renderPrompt(typedSoFar) {
      promptEl.innerHTML = '';
      words.forEach((word, wIdx) => {
        const span = document.createElement('span');
        span.style.marginRight = '8px';
        span.style.display = 'inline-block';

        if (wIdx < currentWordIdx) {
          span.className = 'typing-char-correct';
          span.textContent = word;
        } else if (wIdx === currentWordIdx) {
          let html = '';
          for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (i < typedSoFar.length) {
              if (typedSoFar[i] === char) {
                html += `<span class="typing-char-correct">${char}</span>`;
              } else {
                html += `<span class="typing-char-incorrect">${char}</span>`;
              }
            } else if (i === typedSoFar.length) {
              html += `<span class="typing-char-current">${char}</span>`;
            } else {
              html += `<span>${char}</span>`;
            }
          }
          span.innerHTML = html;
        } else {
          span.textContent = word;
        }

        promptEl.appendChild(span);
      });
    }

    function onInput() {
      if (isFinished) return;
      const val = inputEl.value;

      if (!isRunning) {
        isRunning = true;
        timeLeft = duration;
        const startTs = performance.now();
        timer = setInterval(() => {
          const elapsed = (performance.now() - startTs) / 1000;
          const rem = Math.max(0, Math.ceil(duration - elapsed));
          timeEl.textContent = `${rem}s`;

          const currentWpm = calculateWpm(correctChars, Math.max(1, elapsed));
          wpmEl.textContent = currentWpm;

          if (rem <= 0) {
            clearInterval(timer);
            finish();
          }
        }, 200);
      }

      totalTyped++;

      if (val.endsWith(' ')) {
        const trimmed = val.trim();
        const targetWord = words[currentWordIdx];
        if (trimmed === targetWord) {
          correctChars += targetWord.length + 1;
          SoundFX.playHit();
        } else {
          SoundFX.playTick();
        }
        currentWordIdx++;
        inputEl.value = '';
        renderPrompt('');

        const acc = totalTyped > 0 ? Math.round((correctChars / totalTyped) * 100) : 100;
        accEl.textContent = `${Math.min(100, acc)}%`;
        return;
      }

      SoundFX.playClick();
      renderPrompt(val);
    }

    function finish() {
      isRunning = false;
      isFinished = true;
      timeEl.textContent = '0s';
      inputEl.disabled = true;

      const finalWpm = calculateWpm(correctChars, duration);
      wpmEl.textContent = finalWpm;

      const isBest = saveBest('typing', finalWpm);
      recordSession('typing', finalWpm);
      document.getElementById('stage-best-score').textContent = `${getBest('typing')} WPM`;

      retryBtn.style.display = 'inline-flex';
    }

    function reset() {
      clearInterval(timer);
      isRunning = false;
      isFinished = false;
      correctChars = 0;
      totalTyped = 0;
      timeLeft = duration;
      wpmEl.textContent = '0';
      accEl.textContent = '100%';
      timeEl.textContent = `${duration}s`;
      inputEl.disabled = false;
      inputEl.value = '';
      retryBtn.style.display = 'none';
      generateWords();
      inputEl.focus();
    }

    inputEl.addEventListener('input', onInput);
    retryBtn.addEventListener('click', reset);
    activeRestartFn = reset;
    activeCleanup = () => {
      clearInterval(timer);
      inputEl.removeEventListener('input', onInput);
      retryBtn.removeEventListener('click', reset);
    };

    generateWords();
    inputEl.focus();
  }

  // ==========================================
  // GAME 7: COLOR MATCH (STROOP EFFECT)
  // ==========================================
  function initStroopGame(canvas, optionsPanel) {
    const COLOR_ITEMS = [
      { name: 'MERAH', color: '#ef4444' },
      { name: 'BIRU', color: '#38bdf8' },
      { name: 'HIJAU', color: '#22c55e' },
      { name: 'KUNING', color: '#eab308' },
      { name: 'UNGU', color: '#a855f7' }
    ];

    let totalRounds = 20;
    let currentRound = 0;
    let score = 0;
    let streak = 0;
    let currentWordItem = null;
    let currentFontItem = null;
    let isGameOver = false;

    optionsPanel.innerHTML = `
      <div class="option-group">
        <span class="option-label">Panjang Tantangan:</span>
        <div class="segmented-control" id="stroop-len-control">
          <button class="segment-btn active" data-len="20">20 Ronde</button>
          <button class="segment-btn" data-len="30">30 Ronde</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#stroop-len-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#stroop-len-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      totalRounds = Number(btn.dataset.len);
      reset();
    });

    const wrap = document.createElement('div');
    wrap.className = 'stroop-stage';
    wrap.innerHTML = `
      <div class="stroop-hud">
        <span>Skor: <strong id="stroop-score-val">0</strong></span>
        <span>Ronde: <strong id="stroop-round-val">1 / ${totalRounds}</strong></span>
        <span>Streak: <strong id="stroop-streak-val">0</strong></span>
      </div>
      <div class="stroop-card">
        <div class="stroop-word" id="stroop-display-word">---</div>
        <div class="stroop-question">Apakah ARTI KATA cocok dengan WARNA TINTA?</div>
      </div>
      <div class="stroop-buttons-row">
        <button class="stroop-btn-match" id="stroop-match-btn">COCOK [<-]</button>
        <button class="stroop-btn-diff" id="stroop-diff-btn">BEDA [->]</button>
      </div>
      <div style="display:flex; justify-content:center;">
        <button class="btn btn-outline" id="stroop-retry-btn" style="display:none;">Ulangi Tantangan</button>
      </div>
    `;
    canvas.appendChild(wrap);

    const scoreEl = wrap.querySelector('#stroop-score-val');
    const roundEl = wrap.querySelector('#stroop-round-val');
    const streakEl = wrap.querySelector('#stroop-streak-val');
    const wordEl = wrap.querySelector('#stroop-display-word');
    const matchBtn = wrap.querySelector('#stroop-match-btn');
    const diffBtn = wrap.querySelector('#stroop-diff-btn');
    const retryBtn = wrap.querySelector('#stroop-retry-btn');

    function nextPrompt() {
      const wordIdx = Math.floor(Math.random() * COLOR_ITEMS.length);
      currentWordItem = COLOR_ITEMS[wordIdx];

      // 50% chance match, 50% mismatch
      const shouldMatch = Math.random() < 0.5;
      if (shouldMatch) {
        currentFontItem = currentWordItem;
      } else {
        const others = COLOR_ITEMS.filter((_, idx) => idx !== wordIdx);
        currentFontItem = others[Math.floor(Math.random() * others.length)];
      }

      wordEl.textContent = currentWordItem.name;
      wordEl.style.color = currentFontItem.color;
      roundEl.textContent = `${currentRound + 1} / ${totalRounds}`;
    }

    function handleAnswer(playerGuessMatch) {
      if (isGameOver) return;
      const actualMatch = evaluateStroopMatch(currentWordItem.name, currentFontItem.name);

      if (playerGuessMatch === actualMatch) {
        streak++;
        const bonus = streak >= 3 ? 15 : 10;
        score += bonus;
        SoundFX.playHit();
      } else {
        streak = 0;
        score = Math.max(0, score - 5);
        SoundFX.playFail();
      }

      scoreEl.textContent = score;
      streakEl.textContent = streak;
      currentRound++;

      if (currentRound >= totalRounds) {
        finish();
      } else {
        nextPrompt();
      }
    }

    function finish() {
      isGameOver = true;
      wordEl.textContent = 'SELESAI';
      wordEl.style.color = 'var(--cyan-text)';
      matchBtn.disabled = true;
      diffBtn.disabled = true;

      const isBest = saveBest('stroop', score);
      recordSession('stroop', score);
      document.getElementById('stage-best-score').textContent = `${getBest('stroop')} poin`;

      retryBtn.style.display = 'inline-flex';
    }

    function reset() {
      score = 0;
      streak = 0;
      currentRound = 0;
      isGameOver = false;
      scoreEl.textContent = '0';
      streakEl.textContent = '0';
      matchBtn.disabled = false;
      diffBtn.disabled = false;
      retryBtn.style.display = 'none';
      nextPrompt();
    }

    const onKeyDown = (e) => {
      if (activeGameId !== 'stroop' || isGameOver) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleAnswer(true);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleAnswer(false);
      }
    };

    matchBtn.addEventListener('click', () => handleAnswer(true));
    diffBtn.addEventListener('click', () => handleAnswer(false));
    retryBtn.addEventListener('click', reset);
    window.addEventListener('keydown', onKeyDown);

    activeRestartFn = reset;
    activeCleanup = () => {
      window.removeEventListener('keydown', onKeyDown);
      matchBtn.removeEventListener('click', () => handleAnswer(true));
      diffBtn.removeEventListener('click', () => handleAnswer(false));
    };

    nextPrompt();
  }

  // ==========================================
  // GAME 8: SEQUENCE MEMORY
  // ==========================================
  function initSequenceGame(canvas, optionsPanel) {
    let level = 1;
    let sequence = [];
    let playerInputs = [];
    let isPlayingSeq = false;
    let isGameOver = false;
    let speedMs = 400;

    const TONES = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33];

    optionsPanel.innerHTML = `
      <div class="option-group">
        <span class="option-label">Tempo Pola:</span>
        <div class="segmented-control" id="seq-speed-control">
          <button class="segment-btn active" data-speed="400">Standar (400ms)</button>
          <button class="segment-btn" data-speed="260">Cepat (260ms)</button>
        </div>
      </div>
    `;

    optionsPanel.querySelector('#seq-speed-control').addEventListener('click', (e) => {
      const btn = e.target.closest('.segment-btn');
      if (!btn) return;
      optionsPanel.querySelectorAll('#seq-speed-control .segment-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      speedMs = Number(btn.dataset.speed);
    });

    const wrap = document.createElement('div');
    wrap.className = 'sequence-stage';
    wrap.innerHTML = `
      <div class="sequence-hud">
        <span>Tingkat: <strong id="seq-level-val">Level 1</strong></span>
        <span id="seq-status-msg">Perhatikan Pola...</span>
      </div>
      <div class="sequence-grid" id="seq-grid"></div>
      <div style="display:flex; justify-content:center;">
        <button class="btn btn-outline" id="seq-retry-btn" style="display:none;">Ulangi Tes</button>
      </div>
    `;
    canvas.appendChild(wrap);

    const levelEl = wrap.querySelector('#seq-level-val');
    const statusEl = wrap.querySelector('#seq-status-msg');
    const grid = wrap.querySelector('#seq-grid');
    const retryBtn = wrap.querySelector('#seq-retry-btn');
    const pads = [];

    for (let i = 0; i < 9; i++) {
      const pad = document.createElement('button');
      pad.className = 'sequence-pad';
      pad.dataset.index = i;
      pad.setAttribute('aria-label', `Tombol Pola ${i + 1}`);
      pad.addEventListener('pointerdown', () => onPadClick(i));
      grid.appendChild(pad);
      pads.push(pad);
    }

    function flashPad(idx, duration = 220) {
      const pad = pads[idx];
      if (!pad) return;
      pad.classList.add('active');
      SoundFX.playTone(TONES[idx] || 330, duration, 'sine', 0.18);
      setTimeout(() => {
        pad.classList.remove('active');
      }, duration);
    }

    async function playSequence() {
      isPlayingSeq = true;
      playerInputs = [];
      statusEl.textContent = 'Perhatikan Pola...';
      await new Promise(r => setTimeout(r, 600));

      for (let i = 0; i < sequence.length; i++) {
        flashPad(sequence[i], speedMs * 0.7);
        await new Promise(r => setTimeout(r, speedMs));
      }

      isPlayingSeq = false;
      statusEl.textContent = `Giliranmu! (0 / ${sequence.length})`;
    }

    function onPadClick(idx) {
      if (isPlayingSeq || isGameOver) return;
      flashPad(idx, 180);
      playerInputs.push(idx);

      const isValid = checkSequenceStep(sequence, playerInputs);
      if (!isValid) {
        gameOver(idx);
        return;
      }

      statusEl.textContent = `Giliranmu! (${playerInputs.length} / ${sequence.length})`;

      if (playerInputs.length === sequence.length) {
        SoundFX.playSuccess();
        level++;
        levelEl.textContent = `Level ${level}`;
        statusEl.textContent = 'Tepat! Bersiap ke level berikutnya...';
        sequence.push(Math.floor(Math.random() * 9));
        setTimeout(playSequence, 900);
      }
    }

    function gameOver(failedIdx) {
      isGameOver = true;
      const pad = pads[failedIdx];
      if (pad) pad.classList.add('error');
      SoundFX.playFail();

      const finalLevel = level;
      const isBest = saveBest('sequence', finalLevel);
      recordSession('sequence', finalLevel);
      document.getElementById('stage-best-score').textContent = `${getBest('sequence')} level`;

      statusEl.innerHTML = `Pola Salah! Capai: <strong>Level ${finalLevel}</strong> ${isBest ? '<span class="stat-highlight">[Rekor Baru]</span>' : ''}`;
      retryBtn.style.display = 'inline-flex';
    }

    function reset() {
      level = 1;
      sequence = [
        Math.floor(Math.random() * 9),
        Math.floor(Math.random() * 9),
        Math.floor(Math.random() * 9)
      ];
      playerInputs = [];
      isPlayingSeq = false;
      isGameOver = false;
      levelEl.textContent = 'Level 1';
      retryBtn.style.display = 'none';
      pads.forEach(p => { p.classList.remove('active', 'error'); });
      playSequence();
    }

    retryBtn.addEventListener('click', reset);
    activeRestartFn = reset;
    activeCleanup = () => {
      isPlayingSeq = false;
      retryBtn.removeEventListener('click', reset);
      grid.innerHTML = '';
    };

    reset();
  }

  function toggleSidebar(forceState) {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (!sidebar) return;
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', shouldOpen);
    if (overlay) overlay.classList.toggle('active', shouldOpen);
  }

  function initDailyCountdown() {
    const timerEls = document.querySelectorAll('.daily-countdown-val');
    if (!timerEls.length) return;

    function update() {
      const now = new Date();
      const nextReset = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
      const diffSec = Math.max(0, Math.floor((nextReset - now) / 1000));
      const hours = String(Math.floor(diffSec / 3600)).padStart(2, '0');
      const mins = String(Math.floor((diffSec % 3600) / 60)).padStart(2, '0');
      const secs = String(diffSec % 60).padStart(2, '0');
      const timeStr = `${hours} : ${mins} : ${secs}`;
      timerEls.forEach(el => { el.textContent = timeStr; });
    }
    update();
    setInterval(update, 1000);
  }

  // Keyboard Shortcuts Setup
  function initKeyboardControls() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        if (e.key === 'Escape') document.activeElement.blur();
        return;
      }

      if (e.key === 'Escape') {
        const dialog = document.getElementById('achievements-dialog');
        const advDialog = document.getElementById('adv-game-dialog');
        if (dialog && dialog.open) {
          dialog.close();
        } else if (advDialog && advDialog.open) {
          advDialog.close();
        } else {
          backToHub();
        }
      } else if (e.key === 'r' || e.key === 'R') {
        if (activeGameId) restartActiveGame();
      } else if (e.key === 'f' || e.key === 'F') {
        const frameBox = document.getElementById('runner-frame-box');
        if (frameBox) {
          if (!document.fullscreenElement) frameBox.requestFullscreen().catch(() => {});
          else document.exitFullscreen().catch(() => {});
        }
      } else if (e.key === ' ') {
        if (activeGameId === 'cps') {
          e.preventDefault();
          document.getElementById('cps-clicker')?.click();
        } else if (activeGameId === 'reaction') {
          e.preventDefault();
          document.querySelector('.reaction-stage')?.click();
        }
      } else if (e.key === '/') {
        e.preventDefault();
        document.getElementById('game-search')?.focus();
      } else if (['1', '2', '3', '4', '5', '6', '7', '8'].includes(e.key) && !activeGameId) {
        const gameMap = {
          '1': 'reaction',
          '2': 'aim',
          '3': 'cps',
          '4': 'guess',
          '5': 'memory',
          '6': 'typing',
          '7': 'stroop',
          '8': 'sequence'
        };
        startGame(gameMap[e.key]);
      }
    });
  }

  // Interactive 3D Hero Logo Parallax & Tactile Click (GSAP-powered)
  function initHeroInteractiveLogo() {
    const wrap = document.getElementById('hero-logo-wrap');
    const img = document.getElementById('hero-logo-img');
    const glow = document.getElementById('hero-logo-glow');
    if (!wrap || !img) return;

    const gsap = window.gsap;
    let isHovered = false;

    wrap.addEventListener('mouseenter', () => {
      isHovered = true;
      wrap.classList.add('is-interacting');
    });

    wrap.addEventListener('mousemove', (e) => {
      if (!isHovered) return;
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateY = (x / (rect.width / 2)) * 18;
      const rotateX = -(y / (rect.height / 2)) * 18;

      if (gsap) {
        gsap.to(img, {
          rotationX: rotateX,
          rotationY: rotateY,
          z: 32,
          scale: 1.06,
          duration: 0.35,
          ease: 'power2.out',
          overwrite: 'auto'
        });
        if (glow) {
          gsap.to(glow, {
            x: x * 0.25,
            y: y * 0.25,
            scale: 1.15,
            opacity: 0.85,
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      } else {
        img.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.06, 1.06, 1.06) translateZ(30px)`;
        if (glow) {
          glow.style.transform = `translate(calc(-50% + ${(x * 0.25).toFixed(1)}px), calc(-50% + ${(y * 0.25).toFixed(1)}px)) scale(1.15)`;
          glow.style.opacity = '0.8';
        }
      }
    });

    wrap.addEventListener('mouseleave', () => {
      isHovered = false;
      wrap.classList.remove('is-interacting');
      if (gsap) {
        gsap.to(img, {
          rotationX: 0,
          rotationY: 0,
          z: 0,
          scale: 1,
          duration: 0.7,
          ease: 'elastic.out(1, 0.45)',
          overwrite: 'auto'
        });
        if (glow) {
          gsap.to(glow, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 0.55,
            duration: 0.6,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      } else {
        img.style.transform = '';
        if (glow) {
          glow.style.transform = 'translate(-50%, -50%) scale(1)';
          glow.style.opacity = '0.55';
        }
      }
    });

    wrap.addEventListener('click', () => {
      SoundFX.play('click');
      if (gsap) {
        gsap.fromTo(img,
          { scale: 0.92, z: -15 },
          { scale: isHovered ? 1.06 : 1, z: isHovered ? 32 : 0, duration: 0.45, ease: 'elastic.out(1.2, 0.4)' }
        );
      } else {
        img.style.transform = 'perspective(1000px) scale(0.92) translateZ(-15px)';
        setTimeout(() => {
          if (isHovered) {
            img.style.transform = 'perspective(1000px) scale(1.06) translateZ(30px)';
          } else {
            img.style.transform = '';
          }
        }, 160);
      }
    });
  }

  // React Bits Particles (WebGL2 Particle System)
  function initHeroParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    const container = canvas.parentElement || document.getElementById('hero') || document.body;

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });

    if (!gl) {
      // 2D Canvas Fallback if WebGL2 is not supported
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let w = 0, h = 0, aid = 0, vis = true;
      const res = () => {
        w = canvas.width = container.offsetWidth || window.innerWidth;
        h = canvas.height = container.offsetHeight || window.innerHeight;
      };
      res();
      window.addEventListener('resize', res, { passive: true });
      const pts = Array.from({ length: 36 }, () => ({
        x: Math.random() * (w || 800),
        y: Math.random() * (h || 600),
        vx: (Math.random() - 0.5) * 0.55,
        vy: (Math.random() - 0.5) * 0.55,
        r: Math.random() * 2 + 1,
        a: Math.random() * 0.45 + 0.15
      }));
      const anim = () => {
        if (!vis) return;
        ctx.clearRect(0, 0, w, h);
        pts.forEach(p => {
          p.x = (p.x + p.vx + w) % w;
          p.y = (p.y + p.vy + h) % h;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.a})`;
          ctx.fill();
        });
        aid = requestAnimationFrame(anim);
      };
      anim();
      return;
    }

    const MAX_COUNT = 20000;
    const MAX_LINKED = 900;
    const MAX_LINES = 9000;
    const MAX_BURSTS = 4;
    const DEPTH = 10;
    const FOCAL = 1 / Math.tan((7.5 * Math.PI) / 180);
    const NEAR = 0.1;
    const FAR = 100;
    const INTRO_SECONDS = 1.8;
    const BURST_SECONDS = 1.5;
    const BURST_SPEED = 520;
    const BURST_WIDTH = 46;

    const PARTICLE_VERTEX = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec3 aPosition;
layout(location = 2) in vec4 aRandom;
layout(location = 3) in vec3 aColor;
uniform mat3 uRotation;
uniform vec3 uOffset;
uniform float uSpread;
uniform float uTime;
uniform float uCamera;
uniform float uAspect;
uniform vec2 uView;
uniform float uRatio;
uniform float uSize;
uniform float uRandomness;
uniform float uBlur;
uniform float uFocus;
uniform float uGlow;
uniform float uTwinkle;
uniform int uShape;
uniform int uDrift;
uniform float uTravel;
uniform vec4 uPointer;
uniform int uEffect;
uniform float uStrength;
uniform vec4 uBursts[${MAX_BURSTS}];
uniform int uBurstCount;
uniform float uReveal;
out vec2 vLocal;
out float vRadius;
out float vBlur;
out float vAlpha;
out float vHalo;
out float vSeed;
out vec3 vColor;

vec3 bob(vec4 r, float t) {
  return vec3(
    sin(t * r.z + 6.28 * r.w) * mix(0.1, 1.5, r.x),
    sin(t * r.y + 6.28 * r.x) * mix(0.1, 1.5, r.w),
    sin(t * r.w + 6.28 * r.y) * mix(0.1, 1.5, r.z)
  );
}

void main() {
  vec3 pos = aPosition * uSpread;
  pos.z *= ${DEPTH.toFixed(1)};
  vec3 wobble = bob(aRandom, uTime);
  vec3 world = uRotation * pos + uOffset + wobble;
  float edge = 1.0;
  if (uDrift == 1 || uDrift == 2) {
    float span = uSpread * 2.0 + 3.0;
    float k = mod(aRandom.w * span + uOffset.y + wobble.y + (uDrift == 1 ? uTravel : -uTravel), span);
    world.y = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.12, k) * smoothstep(span, span * 0.88, k);
  } else if (uDrift == 3) {
    float span = uSpread * ${DEPTH.toFixed(1)} * 2.0 + 3.0;
    float k = mod(aRandom.y * span + uOffset.z + wobble.z + uTravel, span);
    world.z = k - span * 0.5;
    edge = smoothstep(0.0, span * 0.1, k);
  }
  vec3 view = world - vec3(0.0, 0.0, uCamera);
  float dist = length(view);
  float ahead = -view.z;
  if (ahead < ${NEAR.toFixed(2)} || ahead > ${FAR.toFixed(1)}) {
    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
    return;
  }
  edge *= smoothstep(1.0, 4.0, ahead);
  vec2 ndc = vec2(view.x * ${FOCAL.toFixed(6)} / uAspect, view.y * ${FOCAL.toFixed(6)}) / ahead;
  vec2 screen = (ndc * 0.5 + 0.5) * uView;

  vec2 shift = vec2(0.0);
  float flash = 0.0;
  if (uEffect != 0 && uPointer.z > 0.001) {
    vec2 delta = screen - uPointer.xy;
    float reach = length(delta);
    float falloff = exp(-dot(delta, delta) / (uPointer.w * uPointer.w));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    shift += (uEffect == 1 ? away * uPointer.w * 0.5 : -delta * 0.6) * falloff * uStrength * uPointer.z;
  }
  for (int i = 0; i < ${MAX_BURSTS}; i++) {
    if (i >= uBurstCount) break;
    vec4 burst = uBursts[i];
    vec2 delta = screen - burst.xy;
    float reach = length(delta);
    float wave = exp(-pow((reach - burst.z * ${BURST_SPEED.toFixed(1)}) / ${BURST_WIDTH.toFixed(1)}, 2.0));
    vec2 away = reach > 0.001 ? delta / reach : vec2(0.0);
    float fade = (1.0 - burst.z) * (1.0 - burst.z) * burst.w;
    shift += away * wave * fade * 56.0 * smoothstep(0.0, 30.0, reach);
    flash += wave * fade;
  }
  screen += shift;

  float diameter = (uRandomness <= 0.0 ? uSize : uSize * (1.0 + uRandomness * (aRandom.x - 0.5)) / dist) * (1.0 + min(flash, 1.0) * 0.6);
  float device = diameter * uRatio;
  float radius = max(diameter, 1.0 / uRatio) * 0.5;
  float coverage = min(1.0, device * device);
  float blur = uBlur * max(uFocus - dist, 0.0) / max(dist, 1.0);
  float halo = uGlow > 0.0 ? radius * 2.5 + 2.0 : 0.0;
  float extent = radius * (uShape == 3 ? 1.6 : 1.0) + blur + halo + 1.5;

  float twinkle = 1.0 - uTwinkle * 0.6 * (0.5 + 0.5 * sin(uTime * (6.0 + aRandom.y * 14.0) + aRandom.w * 40.0));
  float far = smoothstep(${FAR.toFixed(1)}, ${(FAR * 0.9).toFixed(1)}, ahead);
  float focus = radius / (radius + blur);
  float reveal = clamp(uReveal * 1.6 - aRandom.z * 0.6, 0.0, 1.0);

  vLocal = aCorner * extent;
  vRadius = radius;
  vBlur = blur;
  vHalo = halo;
  vSeed = aRandom.y;
  vAlpha = min(1.0, coverage * twinkle * (1.0 + flash * 1.4)) * far * edge * max(focus, 0.35) * reveal * reveal;
  vColor = aColor;
  gl_Position = vec4((screen + aCorner * extent) / uView * 2.0 - 1.0, 0.0, 1.0);
}`;

    const PARTICLE_FRAGMENT = `#version 300 es
precision highp float;
precision highp int;
uniform int uShape;
uniform float uGlow;
uniform float uRatio;
uniform float uTime;
uniform float uSoft;
uniform float uShimmer;
uniform float uOpacity;
in vec2 vLocal;
in float vRadius;
in float vBlur;
in float vAlpha;
in float vHalo;
in float vSeed;
in vec3 vColor;
out vec4 outColor;

float ray(vec2 q, float aa) {
  float width = 0.14 * max(0.0, 1.0 - q.x);
  return (1.0 - smoothstep(width - aa, width + aa, q.y)) * step(q.x, 1.0);
}

void main() {
  float soft = vBlur + 0.7 / uRatio + vRadius * uSoft;
  float d = length(vLocal);
  float shape;
  if (uShape == 1) {
    float box = max(abs(vLocal.x), abs(vLocal.y));
    shape = 1.0 - smoothstep(vRadius * 0.86 - soft, vRadius * 0.86 + soft, box);
  } else if (uShape == 2) {
    float edge = max(vRadius * 0.22, 0.6 / uRatio);
    shape = 1.0 - smoothstep(edge - soft, edge + soft, abs(d - vRadius * 0.8));
  } else if (uShape == 3) {
    float reach = vRadius * 1.6;
    vec2 q = abs(vLocal) / max(reach, 0.0001);
    float aa = soft / max(reach, 0.0001);
    shape = max(max(ray(q, aa), ray(q.yx, aa)), 1.0 - smoothstep(vRadius * 0.32 - soft, vRadius * 0.32 + soft, d));
  } else {
    shape = 1.0 - smoothstep(vRadius - soft, vRadius + soft, d);
  }
  float halo = vHalo > 0.0 ? exp(-d / (vHalo * 0.35)) * uGlow * 0.4 : 0.0;
  float alpha = clamp(shape + halo * (1.0 - shape), 0.0, 1.0) * vAlpha * uOpacity * (1.0 - uSoft);
  if (alpha < 0.002) discard;
  vec2 uv = vLocal / max(vRadius * 2.0, 0.0001) + 0.5;
  vec3 color = clamp(vColor + uShimmer * 0.2 * sin(uv.yxx + uTime + vSeed * 6.28), 0.0, 1.0);
  outColor = vec4(color * alpha, alpha);
}`;

    const LINE_VERTEX = `#version 300 es
precision highp float;
layout(location = 0) in vec2 aCorner;
layout(location = 1) in vec4 aEnds;
layout(location = 2) in vec4 aTint;
uniform vec2 uView;
uniform float uRatio;
uniform float uWidth;
out float vAcross;
out float vHalf;
out vec4 vTint;

void main() {
  vec2 a = aEnds.xy;
  vec2 b = aEnds.zw;
  vec2 along = b - a;
  float span = max(length(along), 0.0001);
  vec2 normal = vec2(-along.y, along.x) / span;
  float reach = uWidth * 0.5 + 1.0 / uRatio;
  vec2 point = mix(a, b, aCorner.x * 0.5 + 0.5) + normal * aCorner.y * reach;
  vAcross = aCorner.y * reach;
  vHalf = uWidth * 0.5;
  vTint = aTint;
  gl_Position = vec4(point / uView * 2.0 - 1.0, 0.0, 1.0);
}`;

    const LINE_FRAGMENT = `#version 300 es
precision highp float;
uniform float uRatio;
uniform float uOpacity;
in float vAcross;
in float vHalf;
in vec4 vTint;
out vec4 outColor;

void main() {
  float edge = 0.6 / uRatio;
  float cover = 1.0 - smoothstep(vHalf - edge, vHalf + edge, abs(vAcross));
  float alpha = cover * vTint.a * uOpacity;
  outColor = vec4(vTint.rgb * alpha, alpha);
}`;

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const compile = (glCtx, type, source) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, source);
      glCtx.compileShader(shader);
      if (glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) return shader;
      glCtx.deleteShader(shader);
      return null;
    };

    const link = (glCtx, vertexSource, fragmentSource) => {
      const vertex = compile(glCtx, glCtx.VERTEX_SHADER, vertexSource);
      const fragment = compile(glCtx, glCtx.FRAGMENT_SHADER, fragmentSource);
      const program = glCtx.createProgram();
      if (!vertex || !fragment || !program) return null;
      glCtx.attachShader(program, vertex);
      glCtx.attachShader(program, fragment);
      glCtx.linkProgram(program);
      glCtx.deleteShader(vertex);
      glCtx.deleteShader(fragment);
      if (!glCtx.getProgramParameter(program, glCtx.LINK_STATUS)) {
        glCtx.deleteProgram(program);
        return null;
      }
      const uniforms = {};
      const count = glCtx.getProgramParameter(program, glCtx.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const info = glCtx.getActiveUniform(program, i);
        if (info) uniforms[info.name.replace('[0]', '')] = glCtx.getUniformLocation(program, info.name);
      }
      return { program, uniforms };
    };

    const seeded = seed => {
      let state = seed >>> 0;
      return () => {
        state = (state + 0x6d2b79f5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    };

    const easeOut = t => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
    const wrap = (val, span) => ((val % span) + span) % span;

    const dots = link(gl, PARTICLE_VERTEX, PARTICLE_FRAGMENT);
    const lines = link(gl, LINE_VERTEX, LINE_FRAGMENT);
    if (!dots || !lines) return;

    const corners = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, corners);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionBuffer = gl.createBuffer();
    const randomBuffer = gl.createBuffer();
    const colorBuffer = gl.createBuffer();
    const dotVao = gl.createVertexArray();
    gl.bindVertexArray(dotVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, corners);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const attach = (buffer, location, width) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, width, gl.FLOAT, false, 0, 0);
      gl.vertexAttribDivisor(location, 1);
    };
    attach(positionBuffer, 1, 3);
    attach(randomBuffer, 2, 4);
    attach(colorBuffer, 3, 3);

    const lineBuffer = gl.createBuffer();
    const lineData = new Float32Array(MAX_LINES * 8);
    const lineVao = gl.createVertexArray();
    gl.bindVertexArray(lineVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, corners);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, lineData.byteLength, gl.DYNAMIC_DRAW);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, 32, 0);
    gl.vertexAttribDivisor(1, 1);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 4, gl.FLOAT, false, 32, 16);
    gl.vertexAttribDivisor(2, 1);
    gl.bindVertexArray(null);

    const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const cache = new Map();
    const parse = value => {
      if (cache.has(value)) return cache.get(value);
      let rgb = [1, 1, 1];
      if (probe) {
        probe.clearRect(0, 0, 1, 1);
        probe.fillStyle = '#ffffff';
        probe.fillStyle = value;
        probe.fillRect(0, 0, 1, 1);
        const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
        rgb = [r / 255, g / 255, b / 255];
      }
      cache.set(value, rgb);
      return rgb;
    };

    const settings = {
      count: 140,
      spread: 10,
      speed: 0.1,
      colors: ['#ffffff'],
      mouse: true,
      hoverFactor: 1,
      soft: false,
      size: 100,
      randomness: 0.8,
      camera: 20,
      rotate: true,
      shape: 0,
      glow: 0.45,
      twinkle: 0.35,
      depthOfField: 0.1,
      connections: true,
      connectionDistance: 110,
      hoverEffect: 0,
      hoverRadius: 150,
      clickBurst: true,
      drift: 0,
      driftSpeed: 1,
      variation: 1,
      intro: false,
      opacity: 0.85
    };

    const view = { width: 1, height: 1, ratio: 1 };
    const pointer = { x: 0, y: 0, sx: 0, sy: 0, nx: 0, ny: 0, inside: false, active: 0 };
    const state = {
      clock: 0,
      spin: 0,
      travel: 0,
      offsetX: 0,
      offsetY: 0,
      reveal: 1
    };
    const bursts = [];
    const packedBursts = new Float32Array(MAX_BURSTS * 4);
    const cloud = {
      key: '',
      count: 0,
      positions: new Float32Array(0),
      randoms: new Float32Array(0),
      colors: new Float32Array(0)
    };
    const screen = {
      x: new Float32Array(0),
      y: new Float32Array(0),
      ahead: new Float32Array(0),
      alpha: new Float32Array(0)
    };
    let raf = 0;
    let last = 0;
    let visible = true;

    const rebuild = () => {
      const key = `${settings.count}|${settings.variation}|${settings.colors.join(',')}`;
      if (key === cloud.key) return;
      cloud.key = key;
      const next = seeded(settings.variation * 7919 + 1);
      const total = settings.count;
      const positions = new Float32Array(total * 3);
      const randoms = new Float32Array(total * 4);
      const tints = new Float32Array(total * 3);
      const swatches = settings.colors.map(parse);

      for (let i = 0; i < total; i++) {
        let x, y, z, len;
        do {
          x = next() * 2 - 1;
          y = next() * 2 - 1;
          z = next() * 2 - 1;
          len = x * x + y * y + z * z;
        } while (len > 1 || len === 0);
        const r = Math.cbrt(next());
        positions.set([x * r, y * r, z * r], i * 3);
        randoms.set([next(), next(), next(), next()], i * 4);
        tints.set(swatches[Math.floor(next() * swatches.length)], i * 3);
      }
      cloud.count = total;
      cloud.positions = positions;
      cloud.randoms = randoms;
      cloud.colors = tints;
      const linked = Math.min(total, MAX_LINKED);
      screen.x = new Float32Array(linked);
      screen.y = new Float32Array(linked);
      screen.ahead = new Float32Array(linked);
      screen.alpha = new Float32Array(linked);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, randomBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, randoms, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, tints, gl.STATIC_DRAW);
    };

    const rotationOf = () => {
      const elapsed = state.clock * 1000;
      const x = settings.rotate ? Math.sin(elapsed * 0.0002) * 0.1 : 0;
      const y = settings.rotate ? Math.cos(elapsed * 0.0005) * 0.15 : 0;
      const z = settings.rotate ? state.spin : 0;
      const [sx, cx, sy, cy, sz, cz] = [Math.sin(x), Math.cos(x), Math.sin(y), Math.cos(y), Math.sin(z), Math.cos(z)];
      return [
        cy * cz + sy * sx * sz,
        cx * sz,
        -sy * cz + cy * sx * sz,
        -cy * sz + sy * sx * cz,
        cx * cz,
        sy * sz + cy * sx * cz,
        sy * cx,
        -sx,
        cy * cx
      ];
    };

    const offsetOf = () => [state.offsetX, state.offsetY, -(1 - easeOut(state.reveal)) * 70];

    const project = matrix => {
      const total = Math.min(cloud.count, MAX_LINKED);
      const [ox, oy, oz] = offsetOf();
      const aspect = view.width / view.height;
      const time = state.clock;
      const radius = settings.hoverRadius;
      const active = settings.hoverEffect !== 0 ? pointer.active : 0;
      const spanY = settings.spread * 2 + 3;
      const spanZ = settings.spread * DEPTH * 2 + 3;

      for (let i = 0; i < total; i++) {
        const px = cloud.positions[i * 3] * settings.spread;
        const py = cloud.positions[i * 3 + 1] * settings.spread;
        const pz = cloud.positions[i * 3 + 2] * settings.spread * DEPTH;
        const r0 = cloud.randoms[i * 4];
        const r1 = cloud.randoms[i * 4 + 1];
        const r2 = cloud.randoms[i * 4 + 2];
        const r3 = cloud.randoms[i * 4 + 3];
        const bobX = Math.sin(time * r2 + 6.28 * r3) * (0.1 + 1.4 * r0);
        const bobY = Math.sin(time * r1 + 6.28 * r0) * (0.1 + 1.4 * r3);
        const bobZ = Math.sin(time * r3 + 6.28 * r1) * (0.1 + 1.4 * r2);
        const wx = matrix[0] * px + matrix[3] * py + matrix[6] * pz + ox + bobX;
        let wy = matrix[1] * px + matrix[4] * py + matrix[7] * pz + oy + bobY;
        let wz = matrix[2] * px + matrix[5] * py + matrix[8] * pz + oz + bobZ;
        let edge = 1;

        if (settings.drift === 1 || settings.drift === 2) {
          const k = wrap(r3 * spanY + oy + bobY + (settings.drift === 1 ? state.travel : -state.travel), spanY);
          wy = k - spanY / 2;
          const low = clamp(k / (spanY * 0.12), 0, 1);
          const high = clamp((spanY - k) / (spanY * 0.12), 0, 1);
          edge = low * low * (3 - 2 * low) * high * high * (3 - 2 * high);
        } else if (settings.drift === 3) {
          const k = wrap(r1 * spanZ + oz + bobZ + state.travel, spanZ);
          wz = k - spanZ / 2;
          const fresh = clamp(k / (spanZ * 0.1), 0, 1);
          edge = fresh * fresh * (3 - 2 * fresh);
        }

        const ahead = settings.camera - wz;
        if (ahead < NEAR || ahead > FAR) {
          screen.alpha[i] = 0;
          continue;
        }

        const close = clamp((ahead - 1) / 3, 0, 1);
        edge *= close * close * (3 - 2 * close);
        let sx = ((wx * FOCAL) / aspect / ahead) * 0.5 * view.width + view.width / 2;
        let sy = ((wy * FOCAL) / ahead) * 0.5 * view.height + view.height / 2;
        let dx = 0, dy = 0;

        if (active > 0.001) {
          const ex = sx - pointer.sx;
          const ey = sy - pointer.sy;
          const reach = Math.hypot(ex, ey);
          const falloff = Math.exp(-(ex * ex + ey * ey) / (radius * radius)) * settings.hoverFactor * active;
          if (settings.hoverEffect === 1 && reach > 0.001) {
            dx += (ex / reach) * radius * 0.5 * falloff;
            dy += (ey / reach) * radius * 0.5 * falloff;
          } else if (settings.hoverEffect === 2) {
            dx -= ex * 0.6 * falloff;
            dy -= ey * 0.6 * falloff;
          }
        }

        for (const burst of bursts) {
          const progress = burst.age / BURST_SECONDS;
          const ex = sx - burst.x;
          const ey = sy - burst.y;
          const reach = Math.hypot(ex, ey);
          if (reach < 0.001) continue;
          const wave = Math.exp(-Math.pow((reach - progress * BURST_SPEED) / BURST_WIDTH, 2));
          const ramp = clamp(reach / 30, 0, 1);
          const push = wave * (1 - progress) * (1 - progress) * 56 * ramp * ramp * (3 - 2 * ramp);
          dx += (ex / reach) * push;
          dy += (ey / reach) * push;
        }
        sx += dx;
        sy += dy;
        const far = clamp((FAR - ahead) / (FAR - FAR * 0.9), 0, 1);
        const reveal = clamp(state.reveal * 1.6 - r2 * 0.6, 0, 1);
        screen.x[i] = sx;
        screen.y[i] = sy;
        screen.ahead[i] = ahead;
        screen.alpha[i] = far * far * (3 - 2 * far) * edge * reveal * reveal;
      }
      return total;
    };

    const buildLines = matrix => {
      const total = project(matrix);
      const reach = settings.connectionDistance;
      const columns = Math.max(1, Math.ceil(view.width / reach) + 2);
      const buckets = new Map();

      for (let i = 0; i < total; i++) {
        if (screen.alpha[i] < 0.02) continue;
        const key = (Math.floor(screen.y[i] / reach) + 1) * columns + Math.floor(screen.x[i] / reach) + 1;
        const bucket = buckets.get(key);
        if (bucket) bucket.push(i);
        else buckets.set(key, [i]);
      }

      let lineCount = 0;
      const limit = reach * reach;
      for (const [key, members] of buckets) {
        for (const offset of [0, 1, columns - 1, columns, columns + 1]) {
          const others = offset === 0 ? members : buckets.get(key + offset);
          if (!others) continue;
          for (let a = 0; a < members.length; a++) {
            const i = members[a];
            for (let b = offset === 0 ? a + 1 : 0; b < others.length; b++) {
              const j = others[b];
              const dx = screen.x[i] - screen.x[j];
              const dy = screen.y[i] - screen.y[j];
              const gap = dx * dx + dy * dy;
              if (gap > limit) continue;
              const layer = clamp(1 - Math.abs(screen.ahead[i] - screen.ahead[j]) / 18, 0, 1);
              if (layer <= 0) continue;
              if (lineCount >= MAX_LINES) return lineCount;
              const fade = 1 - Math.sqrt(gap) / reach;
              const base = lineCount * 8;
              lineData[base] = screen.x[i];
              lineData[base + 1] = screen.y[i];
              lineData[base + 2] = screen.x[j];
              lineData[base + 3] = screen.y[j];
              lineData[base + 4] = (cloud.colors[i * 3] + cloud.colors[j * 3]) / 2;
              lineData[base + 5] = (cloud.colors[i * 3 + 1] + cloud.colors[j * 3 + 1]) / 2;
              lineData[base + 6] = (cloud.colors[i * 3 + 2] + cloud.colors[j * 3 + 2]) / 2;
              lineData[base + 7] = fade * fade * layer * 0.7 * Math.min(screen.alpha[i], screen.alpha[j]);
              lineCount++;
            }
          }
        }
      }
      return lineCount;
    };

    const render = () => {
      rebuild();
      const matrix = rotationOf();
      const [ox, oy, oz] = offsetOf();
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      if (settings.connections) {
        const lineCount = buildLines(matrix);
        if (lineCount) {
          gl.useProgram(lines.program);
          gl.bindVertexArray(lineVao);
          gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
          gl.bufferSubData(gl.ARRAY_BUFFER, 0, lineData.subarray(0, lineCount * 8));
          gl.uniform2f(lines.uniforms.uView, view.width, view.height);
          gl.uniform1f(lines.uniforms.uRatio, view.ratio);
          gl.uniform1f(lines.uniforms.uWidth, 1);
          gl.uniform1f(lines.uniforms.uOpacity, settings.opacity);
          gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, lineCount);
        }
      }

      const u = dots.uniforms;
      let burstCount = 0;
      for (let i = bursts.length - 1; i >= 0 && burstCount < MAX_BURSTS; i--) {
        packedBursts.set([bursts[i].x, bursts[i].y, bursts[i].age / BURST_SECONDS, 1], burstCount * 4);
        burstCount++;
      }

      gl.useProgram(dots.program);
      gl.bindVertexArray(dotVao);
      gl.uniformMatrix3fv(u.uRotation, false, matrix);
      gl.uniform3f(u.uOffset, ox, oy, oz);
      gl.uniform1f(u.uSpread, settings.spread);
      gl.uniform1f(u.uTime, state.clock);
      gl.uniform1f(u.uCamera, settings.camera);
      gl.uniform1f(u.uAspect, view.width / view.height);
      gl.uniform2f(u.uView, view.width, view.height);
      gl.uniform1f(u.uRatio, view.ratio);
      gl.uniform1f(u.uSize, settings.size);
      gl.uniform1f(u.uRandomness, settings.randomness);
      gl.uniform1f(u.uBlur, settings.depthOfField * 14);
      gl.uniform1f(u.uFocus, settings.camera + 14);
      gl.uniform1f(u.uGlow, settings.glow);
      gl.uniform1f(u.uTwinkle, settings.twinkle);
      gl.uniform1i(u.uShape, settings.shape);
      gl.uniform1i(u.uDrift, settings.drift);
      gl.uniform1f(u.uTravel, state.travel);
      gl.uniform4f(u.uPointer, pointer.sx, pointer.sy, pointer.active, settings.hoverRadius);
      gl.uniform1i(u.uEffect, settings.hoverEffect);
      gl.uniform1f(u.uStrength, settings.hoverFactor);
      gl.uniform4fv(u.uBursts, packedBursts);
      gl.uniform1i(u.uBurstCount, burstCount);
      gl.uniform1f(u.uReveal, state.reveal);
      gl.uniform1f(u.uSoft, settings.soft ? 0.2 : 0);
      gl.uniform1f(u.uShimmer, 0);
      gl.uniform1f(u.uOpacity, settings.opacity);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, cloud.count);
      gl.bindVertexArray(null);
    };

    const frame = now => {
      raf = 0;
      if (!visible || document.hidden) return;
      const dt = last ? clamp((now - last) / 1000, 0.0005, 0.05) : 1 / 60;
      last = now;

      const motion = reduce ? 0 : 1;
      const pace = dt * settings.speed * motion;
      state.clock += pace;
      if (settings.rotate) state.spin += pace * 0.6;
      state.travel += dt * settings.driftSpeed * motion * (settings.drift === 3 ? 6 : 0.9);

      const engaged = settings.mouse && pointer.inside && !reduce;
      const follow = 1 - Math.exp(-dt / 0.35);
      const parallax = engaged && settings.hoverEffect === 0 ? settings.hoverFactor : 0;
      state.offsetX += (-pointer.nx * parallax - state.offsetX) * follow;
      state.offsetY += (-pointer.ny * parallax - state.offsetY) * follow;
      pointer.sx += (pointer.x - pointer.sx) * (1 - Math.exp(-dt / 0.06));
      pointer.sy += (pointer.y - pointer.sy) * (1 - Math.exp(-dt / 0.06));
      pointer.active += ((engaged ? 1 : 0) - pointer.active) * (1 - Math.exp(-dt / 0.2));

      for (let i = bursts.length - 1; i >= 0; i--) {
        bursts[i].age += dt;
        if (bursts[i].age >= BURST_SECONDS) bursts.splice(i, 1);
      }

      if (!settings.intro || reduce) state.reveal = 1;
      else if (state.reveal < 1) state.reveal = Math.min(1, state.reveal + dt / INTRO_SECONDS);

      render();
      raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      view.width = width;
      view.height = height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      view.ratio = canvas.width / width;
      render();
      wake();
    };

    const locate = event => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const wasInside = pointer.inside;
      pointer.inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      pointer.x = x;
      pointer.y = rect.height - y;
      pointer.nx = (x / Math.max(1, rect.width)) * 2 - 1;
      pointer.ny = -((y / Math.max(1, rect.height)) * 2 - 1);
      if (pointer.inside && !wasInside) {
        pointer.sx = pointer.x;
        pointer.sy = pointer.y;
      }
    };

    window.addEventListener('pointermove', event => {
      locate(event);
      wake();
    }, { passive: true });

    window.addEventListener('pointerdown', event => {
      locate(event);
      if (!pointer.inside || !settings.clickBurst || reduce) return;
      bursts.push({ x: pointer.x, y: pointer.y, age: 0 });
      if (bursts.length > MAX_BURSTS) bursts.shift();
      wake();
    }, { passive: true });

    document.documentElement.addEventListener('pointerleave', () => {
      pointer.inside = false;
    });

    document.addEventListener('visibilitychange', () => {
      last = 0;
      wake();
    });

    if ('ResizeObserver' in window) {
      const ro = new ResizeObserver(resize);
      ro.observe(container);
    } else {
      window.addEventListener('resize', resize, { passive: true });
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        visible = entries.some(entry => entry.isIntersecting);
        if (visible) {
          last = 0;
          wake();
        }
      }, { threshold: 0.05 });
      io.observe(container);
    }

    resize();
  }

  // Pure CSS hover used across all cards (.game-card and .adv-card)
  // ponytail: cards rely on native CSS hover transitions; add JS gesture engine if drag/swipe cards needed.
  function init3DCardHover() {}

  // GSAP ScrollTrigger & Micro-interaction Engine
  function initGSAPAnimations() {
    if (typeof window.gsap === 'undefined') return;
    const gsap = window.gsap;

    if (typeof window.ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // 1. Hero Parallax ScrollTrigger
    if (document.getElementById('hero') && typeof window.ScrollTrigger !== 'undefined') {
      gsap.to('.hero-orb-cyan', {
        y: 130,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });
      gsap.to('.hero-orb-purple', {
        y: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      });
      gsap.to('.hero-bg-grid', {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });
    }

    // 2. Section Headers Entrance on Scroll
    if (typeof window.ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.section-head').forEach((head) => {
        gsap.from(head, {
          scrollTrigger: {
            trigger: head,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 28,
          duration: 0.7,
          ease: 'power2.out'
        });
      });

      // 3. Classic Games Grid Stagger Reveal
      const classicCards = gsap.utils.toArray('.cards-grid .game-card');
      if (classicCards.length > 0) {
        gsap.from(classicCards, {
          scrollTrigger: {
            trigger: '#games-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 35,
          stagger: 0.08,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        });
      }

      // 4. 3D Showcase Grid Stagger Reveal
      const advGrid = document.getElementById('adv-games-grid');
      if (advGrid) {
        gsap.from('#adv-games-grid .adv-card-slot', {
          scrollTrigger: {
            trigger: '#adv-games-grid',
            start: 'top 82%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 35,
          stagger: 0.07,
          duration: 0.65,
          ease: 'power2.out',
          clearProps: 'transform,opacity'
        });
      }

      // 5. Leaderboard Box Scroll Reveal
      const lbBox = document.querySelector('.leaderboard-box');
      if (lbBox) {
        gsap.from(lbBox, {
          scrollTrigger: {
            trigger: lbBox,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power2.out'
        });
      }

      // 6. FAQ Items Stagger Reveal
      const faqList = document.querySelector('.faq-list');
      if (faqList) {
        gsap.from('.faq-item', {
          scrollTrigger: {
            trigger: faqList,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 0,
          y: 22,
          stagger: 0.07,
          duration: 0.55,
          ease: 'power2.out'
        });
      }
    }

    // 7. Micro-tactile Hover for Buttons
    if (window.matchMedia('(hover: hover)').matches) {
      const btns = document.querySelectorAll('.btn-primary, .btn-lg, .tab-btn');
      btns.forEach(btn => {
        if (btn.dataset.hasGsapHover) return;
        btn.dataset.hasGsapHover = 'true';

        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.04, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.35, ease: 'elastic.out(1, 0.5)', overwrite: 'auto' });
        });
      });
    }
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    SoundFX.init();
    updateHubPills();
    updateXpDisplay();
    checkAchievements();
    renderAdvancedGrid('all');
    renderLeaderboard('reaction');
    initKeyboardControls();
    initDailyCountdown();
    initHeroInteractiveLogo();
    initHeroParticles();
    init3DCardHover();
    initGSAPAnimations();

    if (window.location.hash) {
      try {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'instant' });
        }
      } catch (e) {}
    }
  });

  return {
    startGame,
    playAdvancedGame,
    backToHub,
    restartActiveGame,
    navigateTo,
    toggleAudio: () => SoundFX.toggle(),
    toggleAchievements,
    toggleSidebar: toggleMobileDrawer,
    toggleMobileDrawer,
    toggleFaq,
    resetAllData,
    filterCategory,
    filterAdvCategory,
    searchGames,
    onSearch: searchGames,
    switchLeaderboard,
    openAdvModal,
    closeAdvModal,
    formatControlsChips,
    getBest
  };
})();

if (typeof window !== 'undefined') {
  window.Hub = Hub;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculateLevel,
    calculateAverage,
    calculateProximity,
    compareGuess,
    calculateCps,
    shuffleArray,
    filterGames,
    calculateRank,
    calculateWpm,
    evaluateStroopMatch,
    checkSequenceStep,
    ADVANCED_GAMES,
    formatControlsChips
  };
}
