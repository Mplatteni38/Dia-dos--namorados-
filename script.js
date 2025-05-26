
const questions = [
  {
    image: "https://cdn.folhadomate.com/wp-content/uploads/2021/06/5-maneiras-de-recuperar-o-amor-em-um-relacionamento-696x447.jpg",
    text: "1. Como você descreveria seu amor?",
    options: [
      { text: "Aventureiro(a)", value: "A" },
      { text: "Romântico(a)", value: "B" },
      { text: "Divertido(a)", value: "C" }
    ]
  },
  {
    image: "https://img.freepik.com/fotos-gratis/jovem-casal-apaixonado-namorado-segurando-um-violao_1157-35421.jpg?semt=ais_hybrid&w=740",
    text: "2. O que ele(a) gosta de fazer no tempo livre?",
    options: [
      { text: "Explorar novos lugares", value: "A" },
      { text: "Jantar à luz de velas", value: "B" },
      { text: "Dar boas risadas com amigos", value: "C" }
    ]
  },
  {
    image: "https://cdn.mensagenscomamor.com/content/images/p000019482.jpg?v=1&w=800&h=450&c=1",
    text: "3. Qual o tipo de presente ideal?",
    options: [
      { text: "Uma viagem surpresa", value: "A" },
      { text: "Um jantar especial", value: "B" },
      { text: "Um presente criativo e divertido", value: "C" }
    ]
  },
  {
    image: "https://cdn.mensagenscomamor.com/content/images/p000028547.jpg?v=3&w=736&h=414&c=1://images.unsplash.com/photo-1524594154908-5d8e0a9f6e1e?auto=format&fit=crop&w=800&q=80",
    text: "4. Qual a atividade preferida juntos?",
    options: [
      { text: "Aventuras ao ar livre", value: "A" },
      { text: "Assistir a filmes românticos", value: "B" },
      { text: "Jogos e brincadeiras", value: "C" }
    ]
  },
  {
    image: "https://st4.depositphotos.com/5938794/25407/i/450/depositphotos_254071954-stock-photo-young-couple-love-having-fun.jpg",
    text: "5. Como ele(a) demonstra amor?",
    options: [
      { text: "Surpresas inesperadas", value: "A" },
      { text: "Palavras doces e carinhosas", value: "B" },
      { text: "Gestos engraçados e divertidos", value: "C" }
    ]
  }
];

let currentQuestion = 0;
const answers = [];

function renderQuestion() {
  const quiz = document.getElementById('quiz');
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    quiz.innerHTML = `
      <img src="${q.image}" alt="Imagem da pergunta" class="question-image"/>
      <div class="question-text">${q.text}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label>
            <input type="radio" name="option" value="${opt.value}" ${i === 0 ? 'checked' : ''}/>
            ${opt.text}
          </label>
        `).join('')}
      </div>
      <div class="navigation">
        <button onclick="nextQuestion()">Próxima</button>
      </div>
    `;
  } else {
    showResult();
  }
}

function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected) {
    answers.push(selected.value);
    currentQuestion++;
    renderQuestion();
  } else {
    alert("Por favor, selecione uma opção.");
  }
}

function showResult() {
  const quiz = document.getElementById('quiz');
  const count = { A: 0, B: 0, C: 0 };
  answers.forEach(a => count[a]++);
  let resultText = "";
  let resultImage = "";

  if (count.A >= 3) {
    resultText = "Seu amor é uma aventura constante, cheio de surpresas e momentos inesquecíveis. Um presente ideal seria uma viagem surpresa para explorar novos horizontes juntos.";
    resultImage = "https://cdnm.westwing.com.br/glossary/uploads/br/2021/06/21123958/Dicas-de-como-dar-presente-para-namorada-Unsplash.jpg";
  } else if (count.B >= 3) {
    resultText = "Seu relacionamento é puro romance, com gestos carinhosos e palavras doces. Um jantar à luz de velas seria o presente perfeito para celebrar esse amor.";
    resultImage = "https://img.freepik.com/fotos-premium/casal-desfrutando-de-um-jantar-a-luz-de-velas-em-um-restaurante-chique_118124-45427.jpg";
  } else {
    resultText = "Vocês compartilham momentos divertidos e cheios de alegria. Um presente criativo e inesperado seria ideal para manter a chama da diversão acesa.";
    resultImage = "https://lembrancinha.net/wp-content/uploads/2020/03/DIY-de-Presente-dia-dos-namorados.jpg";
  }

  quiz.innerHTML = `
    <div class="result">
      <p>${resultText}</p>
      <img src="${resultImage}" alt="Resultado"/>
    </div>
  `;
}

function toggleMusic() {
  const music = document.getElementById('romanticMusic');
  const playButton = document.getElementById('Play')   // <<<<<<
  
  if (music.paused) {
    music.play();
    playButton.textContent = "⏸️"; //<<<<<<<

  } else {
    music.pause();
    playButton.textContent = "▶️"; //<<<<<
  }
}

function criarCorações() {
  const coracao = document.createElement('div');
  coracao.classList.add('falling');
  coracao.innerText = '❤';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 5000);
}

setInterval(criarCorações, 300);

// Inicializa o quiz
renderQuestion();