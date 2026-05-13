# 🎈 Descobrindo Brusque

> Jogo educativo interativo sobre a história e cultura de Brusque para crianças de 4 a 5 anos.

---

## 📖 Sobre o Projeto

**Descobrindo Brusque** é um quiz interativo desenvolvido como parte do **Projeto de Curricularização da Extensão**, em parceria entre o curso de **Sistemas de Informação da UNIFEBE** e a **Secretaria Municipal de Educação de Brusque**.

O jogo apresenta 15 perguntas sobre a história, cultura, geografia e tradições da cidade de Brusque de forma lúdica, visual e acessível ao público infantil da Educação Infantil (crianças de 4 a 5 anos).

---

## 🎮 Como Funciona

1. O jogador clica em **INICIAR** na tela inicial
2. São exibidas 15 perguntas sequencialmente
3. Cada pergunta tem **3 opções** com imagem e legenda
4. Se acertar → avança para a próxima pergunta com feedback visual
5. Se errar → tela de "Tente Novamente" e repete a mesma pergunta
6. Ao concluir todas as perguntas → tela de **PARABÉNS!** com pontuação final

---

## 🗂️ Estrutura do Projeto

```
Descobrindo-Brusque/
├── index.html                          # Estrutura HTML do jogo (4 telas)
├── css/
│   └── style.css                       # Estilos visuais, animações e layout
├── js/
│   └── game.js                         # Lógica do jogo e banco de perguntas
├── assets/
│   └── imgs/
│       ├── ilustracao_criancas_baloes.png  # Ilustração principal (mascote)
│       ├── placeholder.svg                 # Imagem padrão para ausentes
│       ├── mapa_santa_catarina.png
│       ├── mapa_mesorregioes_rio_de_janeiro.png
│       ├── mapa_argentina.png
│       ├── retrato_historico_pintura.png
│       ├── jogador_futebol_brasil.png
│       ├── astronauta_caminhada_espacial.png
│       ├── bandeira_alemanha_1.png
│       ├── bandeira_alemanha_2.png
│       ├── bandeira_japao.png
│       ├── bandeira_africa_do_sul.png
│       ├── bandeira_china.png
│       ├── bandeira_arabia_saudita.png
│       ├── enchente_cidade.png
│       ├── manguezal_vista_aerea.png
│       ├── rio_nilo_vista_aerea.png
│       ├── fabrica_confeccoes.png
│       ├── fabrica_avioes.png
│       ├── fabrica_textil.png
│       ├── robos_industriais.png
│       ├── escudo_barcelona.png
│       ├── escudo_brusque_fc.png
│       ├── escudo_flamengo.png
│       ├── chuva_janela_por_do_sol.png
│       ├── cidade_nevada_inverno.png
│       ├── dunas_deserto.png
│       ├── bolo_kuchen_farofa.png
│       ├── sushi_japones.png
│       ├── pizza_pepperoni.png
│       ├── desfile_oktoberfest_blumenau.png
│       ├── carnaval_rio_sambodromo.png
│       ├── papai_noel_natal.png
│       ├── supermercado_fip.png
│       ├── floresta_amazonica_aerea.png
│       ├── montanhas_nevadas_floresta.png
│       ├── pescador_por_do_sol.png
│       ├── astronauta_flutuando_espaco.png
│       ├── vista_aerea_cidade_campos.png
│       ├── cidade_brasileira_vista_aerea.png
│       ├── skyline_singapura_noite.png
│       ├── criancas_brincando_ao_ar_livre.png
│       ├── cockpit_aviao_pilotos.png
│       ├── astronauta_na_lua.png
│       ├── banner_historia.png
│       ├── pepitas_ouro.png
│       └── rua_cidade_noite.png
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
| 15 | Por que Brusque é especial? | História e cultura |

---

## 🎨 Design

O projeto segue o protótipo desenvolvido no Figma:  
[🔗 Figma — Descobrindo Brusque](https://www.figma.com/design/EwLTg2v38TZzNw0o8uaVTg/)

**Paleta de cores:**

| Nome | Hex |
|------|-----|
| Fundo | `#F5E4CC` |
| Laranja principal | `#E8734A` |
| Azul-esverdeado | `#4FC3C4` |
| Amarelo | `#F5C842` |
| Escuro | `#2D2D2D` |

**Tipografia:** Bubblegum Sans (títulos) + Nunito (corpo) — ambas via Google Fonts.

---

## 🚀 Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/Reinoldo-Ozymandias/Descobrindo-Brusque.git

# 2. Entre na pasta
cd Descobrindo-Brusque

# 3. Abra o jogo — escolha uma das opções:

# Opção A: abra o index.html diretamente no navegador

# Opção B: Live Server do VS Code (recomendado)

# Opção C: servidor Python local
python3 -m http.server 3000
# Acesse http://localhost:3000
```

> Não há dependências de backend, npm ou build. Funciona com HTML + CSS + JS puro.

---

## 👥 Integrantes

| Nome | GitHub |
|------|--------|
| Reinoldo | [@Reinoldo-Ozymandias](https://github.com/Reinoldo-Ozymandias) |

---

## 🏫 Informações Acadêmicas

| | |
|---|---|
| **Instituição** | UNIFEBE — Centro Universitário de Brusque |
| **Curso** | Sistemas de Informação |
| **Projeto** | Curricularização da Extensão |
| **Parceiro** | Secretaria Municipal de Educação de Brusque |
| **Público-alvo** | Crianças de 4 a 5 anos (Educação Infantil) |
| **Ano** | 2026 |

---

## 📜 Licença

Este projeto foi desenvolvido com fins educacionais, em parceria com o poder público municipal. Uso restrito ao contexto acadêmico e educacional.
