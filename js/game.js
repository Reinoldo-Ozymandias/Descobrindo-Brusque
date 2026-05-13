// =============================================================
//  DESCOBRINDO BRUSQUE — Game Logic
//  Projeto: Curricularização da Extensão | UNIFEBE x Sec. Educação
// =============================================================

'use strict';

// ── PERGUNTAS ────────────────────────────────────────────────
// correctIndex: 0=A, 1=B, 2=C
const QUESTIONS = [
  {
    text: 'Onde fica a cidade de Brusque?',
    correctIndex: 0,
    options: [
      { label: 'A - Brusque',       img: 'assets/imgs/q01_a.jpg', alt: 'Mapa de Santa Catarina' },
      { label: 'B - Rio de Janeiro', img: 'assets/imgs/q01_b.jpg', alt: 'Mapa do Rio de Janeiro' },
      { label: 'C - Argentina',      img: 'assets/imgs/q01_c.jpg', alt: 'Mapa da Argentina' },
    ],
  },
  {
    text: 'Quem ajudou a fundar Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Barão de Schneeburg', img: 'assets/imgs/q02_a.jpg', alt: 'Barão de Schneeburg' },
      { label: 'Jogador de Futebol',  img: 'assets/imgs/q02_b.jpg', alt: 'Jogador de futebol' },
      { label: 'Astronauta',          img: 'assets/imgs/q02_c.jpg', alt: 'Astronauta' },
    ],
  },
  {
    text: 'De onde vieram os primeiros moradores?',
    correctIndex: 0,
    options: [
      { label: 'Alemanha',      img: 'assets/imgs/q03_a.jpg', alt: 'Bandeira da Alemanha' },
      { label: 'Japão',         img: 'assets/imgs/q03_b.jpg', alt: 'Bandeira do Japão' },
      { label: 'África do Sul', img: 'assets/imgs/q03_c.jpg', alt: 'Bandeira da África do Sul' },
    ],
  },
  {
    text: 'Qual rio passa por Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Rio Itajaí-Mirim', img: 'assets/imgs/q04_a.jpg', alt: 'Rio Itajaí-Mirim' },
      { label: 'Amazonas',         img: 'assets/imgs/q04_b.jpg', alt: 'Rio Amazonas' },
      { label: 'Nilo',             img: 'assets/imgs/q04_c.jpg', alt: 'Rio Nilo' },
    ],
  },
  {
    text: 'Brusque é famosa por?',
    correctIndex: 0,
    options: [
      { label: 'Roupas',  img: 'assets/imgs/q05_a.jpg', alt: 'Fábrica de roupas' },
      { label: 'Aviões',  img: 'assets/imgs/q05_b.jpg', alt: 'Fábrica de aviões' },
      { label: 'Robôs',   img: 'assets/imgs/q05_c.jpg', alt: 'Fábrica de robôs' },
    ],
  },
  {
    text: 'Qual é o time da cidade?',
    correctIndex: 1,
    options: [
      { label: 'Barcelona',  img: 'assets/imgs/q06_a.jpg', alt: 'Escudo do Barcelona' },
      { label: 'Brusque FC', img: 'assets/imgs/q06_b.jpg', alt: 'Escudo do Brusque FC' },
      { label: 'Flamengo',   img: 'assets/imgs/q06_c.jpg', alt: 'Bandeira do Flamengo' },
    ],
  },
  {
    text: 'Como é o clima em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Quente e chuvoso', img: 'assets/imgs/q07_a.jpg', alt: 'Tempo quente e chuvoso' },
      { label: 'Neve',             img: 'assets/imgs/q07_b.jpg', alt: 'Neve na cidade' },
      { label: 'Seco',             img: 'assets/imgs/q07_c.jpg', alt: 'Deserto seco' },
    ],
  },
  {
    text: 'Qual é a comida comum em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Cuca',  img: 'assets/imgs/q08_a.jpg', alt: 'Cuca típica alemã' },
      { label: 'Sushi', img: 'assets/imgs/q08_b.jpg', alt: 'Sushi japonês' },
      { label: 'Pizza', img: 'assets/imgs/q08_c.jpg', alt: 'Pizza italiana' },
    ],
  },
  {
    text: 'Qual é a festa típica de Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Fenarreco', img: 'assets/imgs/q09_a.jpg', alt: 'Fenarreco em Brusque' },
      { label: 'Carnaval',  img: 'assets/imgs/q09_b.jpg', alt: 'Carnaval do Rio' },
      { label: 'Natal',     img: 'assets/imgs/q09_c.jpg', alt: 'Papai Noel' },
    ],
  },
  {
    text: 'Qual é a língua influente em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Alemão',  img: 'assets/imgs/q10_a.jpg', alt: 'Bandeira da Alemanha' },
      { label: 'Chinês',  img: 'assets/imgs/q10_b.jpg', alt: 'Bandeira da China' },
      { label: 'Árabe',   img: 'assets/imgs/q10_c.jpg', alt: 'Bandeira da Arábia Saudita' },
    ],
  },
  {
    text: 'O que tem de especial na cidade?',
    correctIndex: 0,
    options: [
      { label: 'Lojas',     img: 'assets/imgs/q11_a.jpg', alt: 'Lojas de Brusque' },
      { label: 'Florestas', img: 'assets/imgs/q11_b.jpg', alt: 'Floresta tropical' },
      { label: 'Montanhas', img: 'assets/imgs/q11_c.jpg', alt: 'Montanhas nevadas' },
    ],
  },
  {
    text: 'Onde trabalham as pessoas em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Fábricas', img: 'assets/imgs/q12_a.jpg', alt: 'Fábrica têxtil' },
      { label: 'Mar',      img: 'assets/imgs/q12_b.jpg', alt: 'Pescador no mar' },
      { label: 'Espaço',   img: 'assets/imgs/q12_c.jpg', alt: 'Astronauta no espaço' },
    ],
  },
  {
    text: 'Qual é o tamanho da cidade?',
    correctIndex: 1,
    options: [
      { label: 'Pequena', img: 'assets/imgs/q13_a.jpg', alt: 'Cidade pequena' },
      { label: 'Média',   img: 'assets/imgs/q13_b.jpg', alt: 'Cidade média — Brusque' },
      { label: 'Grande',  img: 'assets/imgs/q13_c.jpg', alt: 'Grande metrópole' },
    ],
  },
  {
    text: 'O que as crianças fazem em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Brincam',        img: 'assets/imgs/q14_a.jpg', alt: 'Crianças brincando' },
      { label: 'Voam de avião',  img: 'assets/imgs/q14_b.jpg', alt: 'Piloto de avião' },
      { label: 'Vão para a Lua', img: 'assets/imgs/q14_c.jpg', alt: 'Astronauta na Lua' },
    ],
  },
  {
    text: 'Por que Brusque é especial?',
    correctIndex: 0,
    options: [
      { label: 'História',     img: 'assets/imgs/q15_a.jpg', alt: 'Livro de história' },
      { label: 'Ouro',         img: 'assets/imgs/q15_b.jpg', alt: 'Pepitas de ouro' },
      { label: 'Sem pessoas',  img: 'assets/imgs/q15_c.jpg', alt: 'Rua vazia' },
    ],
  },
];

// Correção
let currentQ   = 0;
let score      = 0;
let locked     = false; // evita duplo clique durante feedback

// Elementos
const screens = {
  home:    document.getElementById('screen-home'),
  quiz:    document.getElementById('screen-quiz'),
  wrong:   document.getElementById('screen-wrong'),
  win:     document.getElementById('screen-win'),
};

const questionText  = document.getElementById('question-text');
const optionsGrid   = document.getElementById('options-grid');
const progressFill  = document.getElementById('progress-fill');
const scoreDisplay  = document.getElementById('score-display');
const questionNum   = document.getElementById('question-num');

//Navegação
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function goHome() {
  currentQ = 0;
  score    = 0;
  locked   = false;
  showScreen('home');
}

// QUIZ
function startGame() {
  currentQ = 0;
  score    = 0;
  locked   = false;
  loadQuestion();
  showScreen('quiz');
}

function loadQuestion() {
  const q = QUESTIONS[currentQ];
  locked  = false;

  // Progresso
  const pct = (currentQ / QUESTIONS.length) * 100;
  progressFill.style.width = pct + '%';
  questionNum.textContent  = `${currentQ + 1} / ${QUESTIONS.length}`;

  // Texto
  questionText.textContent = q.text;
  questionText.classList.remove('anim-bounce');
  void questionText.offsetWidth; // reflow para reiniciar animação
  questionText.classList.add('anim-bounce');

  // Renderizar opções
  optionsGrid.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.innerHTML = `
      <div class="option-label">${opt.label}</div>
      <div class="option-img-wrap">
        <img src="${opt.img}" alt="${opt.alt}" onerror="this.src='assets/imgs/placeholder.svg'">
      </div>`;
    card.addEventListener('click', () => handleAnswer(idx, card));
    optionsGrid.appendChild(card);
  });
}

function handleAnswer(idx, card) {
  if (locked) return;
  locked = true;

  const correct = QUESTIONS[currentQ].correctIndex;

  if (idx === correct) {
    // ACERTOU
    card.classList.add('correct', 'anim-bounce');
    score++;
    setTimeout(() => {
      currentQ++;
      if (currentQ >= QUESTIONS.length) {
        showWin();
      } else {
        loadQuestion();
      }
    }, 800);
  } else {
    // ERROU
    card.classList.add('wrong', 'anim-shake');
    // Mostrar a correta também
    const cards = optionsGrid.querySelectorAll('.option-card');
    cards[correct].classList.add('correct');
    setTimeout(() => showScreen('wrong'), 1000);
  }
}

// TELA ERROU
function retryQuestion() {
  loadQuestion();
  showScreen('quiz');
}

// TELA WIN
function showWin() {
  progressFill.style.width = '100%';
  scoreDisplay.textContent = `Você acertou ${score} de ${QUESTIONS.length} perguntas!`;
  launchConfetti();
  showScreen('win');
}

function playAgain() {
  currentQ = 0;
  score    = 0;
  startGame();
}

// CONFETTI
function launchConfetti() {
  const colors = ['#E8734A','#4FC3C4','#F5C842','#5CB85C','#ffffff'];
  const container = document.getElementById('screen-win');
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top: -20px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      width: ${6 + Math.random() * 10}px;
      height: ${6 + Math.random() * 10}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.5 + Math.random() * 2.5}s;
      animation-delay: ${Math.random() * 1.2}s;
    `;
    container.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

// EXPOSE GLOBAL HANDLERS
window.startGame     = startGame;
window.goHome        = goHome;
window.retryQuestion = retryQuestion;
window.playAgain     = playAgain;
