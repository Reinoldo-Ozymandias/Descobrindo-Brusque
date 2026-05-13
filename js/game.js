// =============================================================
//  DESCOBRINDO BRUSQUE — Game Logic
//  Projeto: Curricularização da Extensão | UNIFEBE x Sec. Educação
// =============================================================

'use strict';

const QUESTIONS = [
  {
    text: 'Onde fica a cidade de Brusque?',
    correctIndex: 0,
    options: [
      { label: 'A - Brusque / SC',   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Santa_Catarina_in_Brazil.svg/800px-Santa_Catarina_in_Brazil.svg.png', alt: 'Santa Catarina no Brasil' },
      { label: 'B - Rio de Janeiro', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rio_de_Janeiro_in_Brazil.svg/800px-Rio_de_Janeiro_in_Brazil.svg.png', alt: 'Rio de Janeiro no Brasil' },
      { label: 'C - Argentina',      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Argentina_in_South_America.svg/800px-Argentina_in_South_America.svg.png', alt: 'Mapa da Argentina' },
    ],
  },
  {
    text: 'Quem ajudou a fundar Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Barão de Schneeburg', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Francisco_Carlos_de_Schneeburg.jpg/400px-Francisco_Carlos_de_Schneeburg.jpg', alt: 'Barão de Schneeburg' },
      { label: 'Jogador de Futebol',  img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80', alt: 'Jogador de futebol' },
      { label: 'Astronauta',          img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=400&q=80', alt: 'Astronauta' },
    ],
  },
  {
    text: 'De onde vieram os primeiros moradores?',
    correctIndex: 0,
    options: [
      { label: 'Alemanha',      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png', alt: 'Bandeira da Alemanha' },
      { label: 'Japão',         img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png', alt: 'Bandeira do Japão' },
      { label: 'África do Sul', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png', alt: 'Bandeira da África do Sul' },
    ],
  },
  {
    text: 'Qual rio passa por Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Rio Itajaí-Mirim', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rio_Itaja%C3%AD-Mirim_em_Brusque.jpg/640px-Rio_Itaja%C3%AD-Mirim_em_Brusque.jpg', alt: 'Rio Itajaí-Mirim em Brusque' },
      { label: 'Amazonas',         img: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=400&q=80', alt: 'Rio Amazonas' },
      { label: 'Nilo',             img: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&q=80', alt: 'Rio Nilo' },
    ],
  },
  {
    text: 'Brusque é famosa por?',
    correctIndex: 0,
    options: [
      { label: 'Roupas', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', alt: 'Fábrica de roupas' },
      { label: 'Aviões', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80', alt: 'Fábrica de aviões' },
      { label: 'Robôs',  img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80', alt: 'Robô industrial' },
    ],
  },
  {
    text: 'Qual é o time da cidade?',
    correctIndex: 1,
    options: [
      { label: 'Barcelona',  img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/400px-FC_Barcelona_%28crest%29.svg.png', alt: 'Escudo do Barcelona' },
      { label: 'Brusque FC', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Brusque_FC.png/400px-Brusque_FC.png', alt: 'Escudo do Brusque FC' },
      { label: 'Flamengo',   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_Flamengo.svg/400px-Logo_Flamengo.svg.png', alt: 'Escudo do Flamengo' },
    ],
  },
  {
    text: 'Como é o clima em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Quente e chuvoso', img: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80', alt: 'Chuva forte' },
      { label: 'Neve',             img: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&q=80', alt: 'Cidade nevada' },
      { label: 'Seco',             img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80', alt: 'Deserto seco' },
    ],
  },
  {
    text: 'Qual é a comida comum em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Cuca',  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Cuca_de_banana.jpg/640px-Cuca_de_banana.jpg', alt: 'Cuca típica' },
      { label: 'Sushi', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80', alt: 'Sushi japonês' },
      { label: 'Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', alt: 'Pizza italiana' },
    ],
  },
  {
    text: 'Qual é a festa típica de Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Fenarreco', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Fenarreco_Brusque.jpg/640px-Fenarreco_Brusque.jpg', alt: 'Fenarreco em Brusque' },
      { label: 'Carnaval',  img: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=400&q=80', alt: 'Carnaval' },
      { label: 'Natal',     img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&q=80', alt: 'Natal' },
    ],
  },
  {
    text: 'Qual é a língua influente em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Alemão', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png', alt: 'Bandeira da Alemanha' },
      { label: 'Chinês', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png', alt: 'Bandeira da China' },
      { label: 'Árabe',  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/800px-Flag_of_Saudi_Arabia.svg.png', alt: 'Bandeira Arábia Saudita' },
    ],
  },
  {
    text: 'O que tem de especial na cidade?',
    correctIndex: 0,
    options: [
      { label: 'Lojas',     img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80', alt: 'Lojas de roupas' },
      { label: 'Florestas', img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80', alt: 'Floresta tropical' },
      { label: 'Montanhas', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80', alt: 'Montanhas' },
    ],
  },
  {
    text: 'Onde trabalham as pessoas em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Fábricas', img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&q=80', alt: 'Fábrica têxtil' },
      { label: 'Mar',      img: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?w=400&q=80', alt: 'Pescador no mar' },
      { label: 'Espaço',   img: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=400&q=80', alt: 'Astronauta no espaço' },
    ],
  },
  {
    text: 'Qual é o tamanho da cidade?',
    correctIndex: 1,
    options: [
      { label: 'Pequena', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80', alt: 'Cidade pequena' },
      { label: 'Média',   img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brusque_SC.jpg/640px-Brusque_SC.jpg', alt: 'Vista de Brusque' },
      { label: 'Grande',  img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80', alt: 'Grande metrópole' },
    ],
  },
  {
    text: 'O que as crianças fazem em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Brincam',        img: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=400&q=80', alt: 'Crianças brincando' },
      { label: 'Voam de avião',  img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80', alt: 'Avião' },
      { label: 'Vão para a Lua', img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80', alt: 'Lua' },
    ],
  },
  {
    text: 'Por que Brusque é especial?',
    correctIndex: 0,
    options: [
      { label: 'História e cultura', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80', alt: 'Livros de história' },
      { label: 'Ouro',               img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&q=80', alt: 'Ouro' },
      { label: 'Sem pessoas',        img: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=400&q=80', alt: 'Rua vazia' },
    ],
  },
];

// ── STATE ─────────────────────────────────────────────────────
let currentQ = 0;
let score    = 0;
let locked   = false;

// ── ELEMENTS ──────────────────────────────────────────────────
const screens = {
  home:  document.getElementById('screen-home'),
  quiz:  document.getElementById('screen-quiz'),
  wrong: document.getElementById('screen-wrong'),
  win:   document.getElementById('screen-win'),
};
const questionText = document.getElementById('question-text');
const optionsGrid  = document.getElementById('options-grid');
const progressFill = document.getElementById('progress-fill');
const scoreDisplay = document.getElementById('score-display');
const questionNum  = document.getElementById('question-num');

// ── NAVIGATION ────────────────────────────────────────────────
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function goHome() {
  currentQ = 0; score = 0; locked = false;
  showScreen('home');
}

// ── QUIZ ──────────────────────────────────────────────────────
function startGame() {
  currentQ = 0; score = 0; locked = false;
  loadQuestion();
  showScreen('quiz');
}

function loadQuestion() {
  const q = QUESTIONS[currentQ];
  locked  = false;

  progressFill.style.width = (currentQ / QUESTIONS.length * 100) + '%';
  questionNum.textContent  = `${currentQ + 1} / ${QUESTIONS.length}`;

  questionText.textContent = q.text;
  questionText.classList.remove('anim-bounce');
  void questionText.offsetWidth;
  questionText.classList.add('anim-bounce');

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
    card.classList.add('correct', 'anim-bounce');
    score++;
    setTimeout(() => {
      currentQ++;
      currentQ >= QUESTIONS.length ? showWin() : loadQuestion();
    }, 800);
  } else {
    card.classList.add('wrong', 'anim-shake');
    optionsGrid.querySelectorAll('.option-card')[correct].classList.add('correct');
    setTimeout(() => showScreen('wrong'), 1000);
  }
}

function retryQuestion() { loadQuestion(); showScreen('quiz'); }

function showWin() {
  progressFill.style.width = '100%';
  scoreDisplay.textContent = `Você acertou ${score} de ${QUESTIONS.length} perguntas!`;
  launchConfetti();
  showScreen('win');
}

function playAgain() { currentQ = 0; score = 0; startGame(); }

// ── CONFETTI ──────────────────────────────────────────────────
function launchConfetti() {
  const colors = ['#E8734A','#4FC3C4','#F5C842','#5CB85C','#fff'];
  const container = document.getElementById('screen-win');
  for (let i = 0; i < 80; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `left:${Math.random()*100}%;top:-20px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      width:${6+Math.random()*10}px;height:${6+Math.random()*10}px;
      border-radius:${Math.random()>.5?'50%':'2px'};
      animation-duration:${1.5+Math.random()*2.5}s;
      animation-delay:${Math.random()*1.2}s;`;
    container.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

window.startGame=startGame; window.goHome=goHome;
window.retryQuestion=retryQuestion; window.playAgain=playAgain;
