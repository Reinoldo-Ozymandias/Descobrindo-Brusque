# 🎈 Descobrindo Brusque

> Jogo educativo interativo sobre a história e cultura de Brusque para crianças de 4 a 5 anos.

---

## 📖 Sobre o Projeto

**Descobrindo Brusque** é um quiz interativo desenvolvido como parte do **Projeto de Curricularização da Extensão**, em parceria entre o curso de **Sistemas de Informação da UNIFEBE** e a **Secretaria Municipal de Educação de Brusque**.

O jogo apresenta 15 perguntas sobre a história, cultura, geografia e tradições da cidade de Brusque de forma lúdica, visual e acessível ao público infantil da Educação Infantil.

---

## 🎮 Como Funciona

1. O jogador clica em **INICIAR** na tela inicial
2. São exibidas 15 perguntas sequencialmente
3. Cada pergunta tem **3 opções** com imagem e legenda (A, B, C)
4. Se acertar → avança para a próxima pergunta
5. Se errar → tela de "Tente Novamente" e pode repetir a pergunta
6. Ao concluir todas as perguntas → tela de **PARABÉNS!** com pontuação

---

## 🗂️ Estrutura do Projeto

```
descobrindo-brusque/
├── index.html              # Página principal do jogo
├── css/
│   └── style.css           # Estilos visuais (cores, layout, animações)
├── js/
│   └── game.js             # Lógica do jogo e banco de perguntas
├── assets/
│   └── imgs/
│       ├── hero.png        # Ilustração principal (mascote)
│       ├── placeholder.svg # Imagem padrão para ausentes
│       ├── q01_a.jpg       # Imagens das questões (q01–q15, _a/_b/_c)
│       └── ...
└── README.md
```

---

## ❓ Perguntas do Jogo

| # | Pergunta | Resposta Correta |
|---|----------|-----------------|
| 1 | Onde fica a cidade de Brusque? | Brusque – Santa Catarina |
| 2 | Quem ajudou a fundar Brusque? | Barão de Schneeburg |
| 3 | De onde vieram os primeiros moradores? | Alemanha |
| 4 | Qual rio passa por Brusque? | Rio Itajaí-Mirim |
| 5 | Brusque é famosa por? | Roupas |
| 6 | Qual é o time da cidade? | Brusque FC |
| 7 | Como é o clima em Brusque? | Quente e chuvoso |
| 8 | Qual é a comida comum em Brusque? | Cuca |
| 9 | Qual é a festa típica de Brusque? | Fenarreco |
| 10 | Qual é a língua influente? | Alemão |
| 11 | O que tem de especial na cidade? | Lojas |
| 12 | Onde trabalham as pessoas? | Fábricas |
| 13 | Qual é o tamanho da cidade? | Média |
| 14 | O que as crianças fazem em Brusque? | Brincam |
| 15 | Por que Brusque é especial? | História |

---

## 🖼️ Adicionando as Imagens

As imagens ficam em `assets/imgs/`. Para cada questão existem 3 arquivos:

- `q01_a.jpg`, `q01_b.jpg`, `q01_c.jpg`
- `q02_a.jpg`, `q02_b.jpg`, `q02_c.jpg`
- ... até `q15_c.jpg`
- `hero.png` — ilustração dos mascotes (tela inicial e resultados)

Enquanto uma imagem não for adicionada, o jogo exibe automaticamente o `placeholder.svg`.

> **Dica:** use imagens em proporção 4:3 (ex: 400×300px) para melhor resultado.

---

## 🎨 Design

O projeto segue o Figma disponível em:  
[🔗 Figma — Descobrindo Brusque](https://www.figma.com/design/EwLTg2v38TZzNw0o8uaVTg/)

Paleta de cores:
| Nome | Hex |
|------|-----|
| Fundo | `#F5E4CC` |
| Laranja (principal) | `#E8734A` |
| Azul-esverdeado | `#4FC3C4` |
| Amarelo | `#F5C842` |
| Escuro | `#2D2D2D` |

Tipografia: **Bubblegum Sans** (títulos) + **Nunito** (corpo)

---

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/descobrindo-brusque.git

# Entre na pasta
cd descobrindo-brusque

# Abra o jogo (qualquer um dos métodos abaixo)
# — Opção 1: abra o index.html diretamente no navegador
# — Opção 2: use o Live Server do VS Code
# — Opção 3: servidor Python local
python3 -m http.server 3000
# Acesse http://localhost:3000
```

> Não há dependências de backend nem npm. Funciona com HTML + CSS + JS puro.

---

## 👥 Integrantes

| Nome | GitHub | Função |
|------|--------|--------|
| — | — | — |

> *Preencher com os nomes e usuários GitHub do grupo.*

---

## 🏫 Informações Acadêmicas

- **Instituição:** UNIFEBE — Centro Universitário de Brusque
- **Curso:** Sistemas de Informação
- **Projeto:** Curricularização da Extensão
- **Parceiro:** Secretaria Municipal de Educação de Brusque
- **Público-alvo:** Crianças de 4 a 5 anos (Educação Infantil)
- **Ano:** 2026

---

## 📜 Licença

Este projeto foi desenvolvido com fins educacionais, em parceria com o poder público municipal. Uso restrito ao contexto acadêmico e educacional.
