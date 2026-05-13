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
      { label: 'A - Brusque / SC',   img: 'assets/imgs/mapa_santa_catarina.png', alt: 'Santa Catarina no Brasil' },
      { label: 'B - Rio de Janeiro', img: 'assets/imgs/mapa_mesorregioes_rio_de_janeiro.png', alt: 'Rio de Janeiro no Brasil' },
      { label: 'C - Argentina',      img: 'assets/imgs/mapa_argentina.png', alt: 'Mapa da Argentina' },
    ],
  },
  {
    text: 'Quem ajudou a fundar Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Barão de Schneeburg', img: 'assets/imgs/retrato_historico_pintura.png', alt: 'Barão de Schneeburg' },
      { label: 'Jogador de Futebol',  img: 'assets/imgs/jogador_futebol_brasil.png', alt: 'Jogador de futebol' },
      { label: 'Astronauta',          img: 'assets/imgs/astronauta_caminhada_espacial.png', alt: 'Astronauta' },
    ],
  },
  {
    text: 'De onde vieram os primeiros moradores?',
    correctIndex: 0,
    options: [
      { label: 'Alemanha',      img: 'assets/imgs/bandeira_alemanha_1.png', alt: 'Bandeira da Alemanha' },
      { label: 'Japão',         img: 'assets/imgs/bandeira_japao.png', alt: 'Bandeira do Japão' },
      { label: 'África do Sul', img: 'assets/imgs/bandeira_africa_do_sul.png', alt: 'Bandeira da África do Sul' },
    ],
  },
  {
    text: 'Qual rio passa por Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Rio Itajaí-Mirim', img: 'assets/imgs/enchente_cidade.png', alt: 'Rio Itajaí-Mirim em Brusque' },
      { label: 'Amazonas',         img: 'assets/imgs/manguezal_vista_aerea.png', alt: 'Rio Amazonas' },
      { label: 'Nilo',             img: 'assets/imgs/rio_nilo_vista_aerea.png', alt: 'Rio Nilo' },
    ],
  },
  {
    text: 'Brusque é famosa por?',
    correctIndex: 0,
    options: [
      { label: 'Roupas', img: 'assets/imgs/fabrica_confeccoes.png', alt: 'Fábrica de roupas' },
      { label: 'Aviões', img: 'assets/imgs/fabrica_avioes.png', alt: 'Fábrica de aviões' },
      { label: 'Robôs',  img: 'assets/imgs/robos_industriais.png', alt: 'Robô industrial' },
    ],
  },
  {
    text: 'Qual é o time da cidade?',
    correctIndex: 1,
    options: [
      { label: 'Barcelona',  img: 'assets/imgs/escudo_barcelona.png', alt: 'Escudo do Barcelona' },
      { label: 'Brusque FC', img: 'assets/imgs/escudo_brusque_fc.png', alt: 'Escudo do Brusque FC' },
      { label: 'Flamengo',   img: 'assets/imgs/escudo_flamengo.png', alt: 'Escudo do Flamengo' },
    ],
  },
  {
    text: 'Como é o clima em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Quente e chuvoso', img: 'assets/imgs/chuva_janela_por_do_sol.png', alt: 'Chuva e sol' },
      { label: 'Neve',             img: 'assets/imgs/cidade_nevada_inverno.png', alt: 'Cidade nevada' },
      { label: 'Seco',             img: 'assets/imgs/dunas_deserto.png', alt: 'Deserto seco' },
    ],
  },
  {
    text: 'Qual é a comida comum em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Cuca',  img: 'assets/imgs/bolo_kuchen_farofa.png', alt: 'Cuca típica' },
      { label: 'Sushi', img: 'assets/imgs/sushi_japones.png', alt: 'Sushi japonês' },
      { label: 'Pizza', img: 'assets/imgs/pizza_pepperoni.png', alt: 'Pizza italiana' },
    ],
  },
  {
    text: 'Qual é a festa típica de Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Fenarreco', img: 'assets/imgs/desfile_oktoberfest_blumenau.png', alt: 'Fenarreco em Brusque' },
      { label: 'Carnaval',  img: 'assets/imgs/carnaval_rio_sambodromo.png', alt: 'Carnaval' },
      { label: 'Natal',     img: 'assets/imgs/papai_noel_natal.png', alt: 'Natal' },
    ],
  },
  {
    text: 'Qual é a língua influente em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Alemão', img: 'assets/imgs/bandeira_alemanha_2.png', alt: 'Bandeira da Alemanha' },
      { label: 'Chinês', img: 'assets/imgs/bandeira_china.png', alt: 'Bandeira da China' },
      { label: 'Árabe',  img: 'assets/imgs/bandeira_arabia_saudita.png', alt: 'Bandeira Arábia Saudita' },
    ],
  },
  {
    text: 'O que tem de especial na cidade?',
    correctIndex: 0,
    options: [
      { label: 'Lojas',     img: 'assets/imgs/supermercado_fip.png', alt: 'Lojas de roupas' },
      { label: 'Florestas', img: 'assets/imgs/floresta_amazonica_aerea.png', alt: 'Floresta tropical' },
      { label: 'Montanhas', img: 'assets/imgs/montanhas_nevadas_floresta.png', alt: 'Montanhas' },
    ],
  },
  {
    text: 'Onde trabalham as pessoas em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Fábricas', img: 'assets/imgs/fabrica_textil.png', alt: 'Fábrica têxtil' },
      { label: 'Mar',      img: 'assets/imgs/pescador_por_do_sol.png', alt: 'Pescador no mar' },
      { label: 'Espaço',   img: 'assets/imgs/astronauta_flutuando_espaco.png', alt: 'Astronauta no espaço' },
    ],
  },
  {
    text: 'Qual é o tamanho da cidade?',
    correctIndex: 1,
    options: [
      { label: 'Pequena', img: 'assets/imgs/vista_aerea_cidade_campos.png', alt: 'Cidade pequena' },
      { label: 'Média',   img: 'assets/imgs/cidade_brasileira_vista_aerea.png', alt: 'Vista de Brusque' },
      { label: 'Grande',  img: 'assets/imgs/skyline_singapura_noite.png', alt: 'Grande metrópole' },
    ],
  },
  {
    text: 'O que as crianças fazem em Brusque?',
    correctIndex: 0,
    options: [
      { label: 'Brincam',        img: 'assets/imgs/criancas_brincando_ao_ar_livre.png', alt: 'Crianças brincando' },
      { label: 'Voam de avião',  img: 'assets/imgs/cockpit_aviao_pilotos.png', alt: 'Avião' },
      { label: 'Vão para a Lua', img: 'assets/imgs/astronauta_na_lua.png', alt: 'Lua' },
    ],
  },
  {
    text: 'Por que Brusque é especial?',
    correctIndex: 0,
    options: [
      { label: 'História e cultura', img: 'assets/imgs/banner_historia.png', alt: 'Livros de história' },
      { label: 'Ouro',               img: 'assets/imgs/pepitas_ouro.png', alt: 'Ouro' },
      { label: 'Sem pessoas',        img: 'assets/imgs/rua_cidade_noite.png', alt: 'Rua vazia' },
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
        <img src="${opt.img}" alt="${opt.alt}" onerror="this.src='assets/imgs/ilustracao_criancas_baloes.png'">
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
