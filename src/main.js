import './style.css';
import { renderFilmes } from './paginas/filmes.js';
import { buscarFilmes } from './servicos/wikidata.js';
buscarFilmes()
  .then((filmes) => {
    console.log('Filmes encontrados:', filmes);
  })
  .catch((erro) => {
    console.error('Erro ao buscar filmes:', erro);
  });
const app = document.querySelector('#app');

document.querySelector('#app').innerHTML = `
  <header class="cabecalho">
    <a href="#" class="logo">NERD<span>VERSE</span><i>.</i></a>

    <nav class="menu">
      <a href="#explorar">Explorar</a>
      <a href="#universos">Universos</a>
      <a href="#descobrir">Descobrir</a>
    </nav>

    <div class="pesquisa">
      <span class="icone-pesquisa">⌕</span>
      <input type="text" placeholder="Buscar filmes, séries, personagens...">
      <span class="atalho">⌘ K</span>
    </div>
  </header>

  <main>
    <section class="hero" id="descobrir">
      <div class="hero-conteudo">
        <div class="hero-etiqueta">
          <span class="ponto-luz"></span>
          SEU PORTAL PARA O EXTRAORDINÁRIO
        </div>

        <h1>
          Um universo inteiro de <span>possibilidades.</span>
        </h1>

        <div class="hero-frase">
          <span>Assista.</span>
          <span>Leia.</span>
          <span>Descubra.</span>
          <span>Explore.</span>
        </div>

        <p class="hero-descricao">
          De filmes e séries a jogos, livros, músicas, podcasts,
          animes, mangás e HQs. Encontre novas histórias,
          mergulhe em outros universos e reúna tudo o que
          faz parte do seu mundo em um só lugar.
        </p>

        <div class="hero-acoes">
          <a href="#explorar" class="botao-principal">
            Explorar universos <span>↗</span>
          </a>
          <a href="#universos" class="botao-secundario">
            Conhecer categorias
          </a>
        </div>

        <div class="hero-rodape">
          <span>UM MUNDO</span>
          <span class="linha-decorativa"></span>
          <span>INFINITAS HISTÓRIAS</span>
        </div>
      </div>

      <div class="hero-visual">
        <div class="orbita orbita-externa"></div>
        <div class="orbita orbita-interna"></div>

        <div class="portal">
          <div class="portal-centro">
            <span>NV</span>
          </div>
        </div>

        <div class="particula particula-1"></div>
        <div class="particula particula-2"></div>
        <div class="particula particula-3"></div>

        <div class="flutuante flutuante-1">
          <span>✦</span> CINEMA
        </div>

        <div class="flutuante flutuante-2">
          <span>◈</span> ANIME
        </div>

        <div class="flutuante flutuante-3">
          <span>⌘</span> GAMES
        </div>
      </div>
    </section>

    <section class="categorias" id="explorar">
      <div class="categorias-topo">
        <div>
          <span class="etiqueta">01 — PORTAIS DE DESCOBERTA</span>
          <h2>Explore o <span>multiverso.</span></h2>
          <p>
            Cada universo guarda uma história. Qual será sua próxima descoberta?
          </p>
        </div>

        <a href="#universos" class="ver-tudo">TODAS AS CATEGORIAS ↗</a>
      </div>

      <div class="grade-categorias" id="universos">

      <a href="#filmes" class="card-categoria"
                style="--imagem: url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1000')">
          <span class="numero">01 / 09</span>
          <div class="card-info">
            <span class="card-tipo">TELAS GRANDES</span>
            <h3>Filmes</h3>
            <p>Histórias que merecem ser vividas.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1000')">
          <span class="numero">02 / 09</span>
          <div class="card-info">
            <span class="card-tipo">MARATONAS</span>
            <h3>Séries</h3>
            <p>Um episódio leva a outro universo.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000')">
          <span class="numero">03 / 09</span>
          <div class="card-info">
            <span class="card-tipo">NOVAS DIMENSÕES</span>
            <h3>Jogos</h3>
            <p>Entre na aventura. Seja parte dela.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1000')">
          <span class="numero">04 / 09</span>
          <div class="card-info">
            <span class="card-tipo">ENTRE PÁGINAS</span>
            <h3>Livros</h3>
            <p>Mil mundos esperando por você.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000')">
          <span class="numero">05 / 09</span>
          <div class="card-info">
            <span class="card-tipo">ARTE E IMAGINAÇÃO</span>
            <h3>Animes e mangás</h3>
            <p>Histórias além da imaginação.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1000')">
          <span class="numero">06 / 09</span>
          <div class="card-info">
            <span class="card-tipo">ARTE EM QUADROS</span>
            <h3>HQs</h3>
            <p>Heróis, sagas e universos.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1000')">
          <span class="numero">07 / 09</span>
          <div class="card-info">
            <span class="card-tipo">SINTA O SOM</span>
            <h3>Músicas</h3>
            <p>Uma trilha para cada momento.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1000')">
          <span class="numero">08 / 09</span>
          <div class="card-info">
            <span class="card-tipo">VOZES E IDEIAS</span>
            <h3>Podcasts</h3>
            <p>Ideias que merecem ser ouvidas.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

        <a href="#" class="card-categoria"
          style="--imagem: url('https://images.unsplash.com/photo-1606503153255-59d8b8b8217c?w=1000')">
          <span class="numero">09 / 09</span>
          <div class="card-info">
            <span class="card-tipo">ESTRATÉGIA E COLEÇÃO</span>
            <h3>Jogos de cartas</h3>
            <p>Monte seu baralho. Domine o jogo.</p>
            <span class="card-seta">↗</span>
          </div>
        </a>

      </div>
    </section>

    <footer class="rodape">
      <a href="#" class="logo">NERD<span>VERSE</span><i>.</i></a>
      <p>Um universo inteiro de possibilidades.</p>
      <span>© 2026 NERDVERSE — EXPLORE SEM LIMITES.</span>
    </footer>
  </main>
`;
const paginaInicial = app.innerHTML;

function configurarPesquisa() {
  const campoPesquisa = document.querySelector('.pesquisa input');
  const categorias = document.querySelectorAll('.card-categoria');

  if (!campoPesquisa) return;

  campoPesquisa.addEventListener('input', () => {
    const termo = campoPesquisa.value.toLowerCase().trim();

    categorias.forEach((card) => {
      const conteudo = card.innerText.toLowerCase();
      card.style.display = conteudo.includes(termo) ? '' : 'none';
    });
  });
}
function configurarPesquisaFilmes() {
  const campoPesquisa = document.querySelector('.pesquisa input');
  const filtroGenero = document.querySelector('#filtro-genero');
  const ordenarFilmes = document.querySelector('#ordenar-filmes');
  const cards = document.querySelectorAll('.card-filme');
  const limparFiltros = document.querySelector('#limpar-filtros');

  if (limparFiltros) {
    limparFiltros.addEventListener('click', () => {
      campoPesquisa.value = '';
      filtroGenero.value = '';
      ordenarFilmes.value = '';

      aplicarFiltros();
    });
  }

  if (!campoPesquisa) return;

  function aplicarFiltros() {
    const termo = campoPesquisa.value.toLowerCase().trim();
    const genero = filtroGenero ? filtroGenero.value.toLowerCase() : '';
    const ordem = ordenarFilmes ? ordenarFilmes.value : '';

    const catalogo = document.querySelector('.catalogo-filmes');

    const cardsFiltrados = Array.from(cards).filter((card) => {
      const conteudo = card.innerText.toLowerCase();

      const correspondePesquisa = conteudo.includes(termo);
      const correspondeGenero = !genero || conteudo.includes(genero);

      return correspondePesquisa && correspondeGenero;
    });
    const contador = document.querySelector('#contador-filmes');

    if (contador) {
      const quantidade = cardsFiltrados.length;

      contador.textContent = `${quantidade} ${
        quantidade === 1 ? 'filme encontrado' : 'filmes encontrados'
      }`;
    }
    const mensagemVazia = document.querySelector('#mensagem-sem-resultados');

    if (mensagemVazia) {
      mensagemVazia.style.display =
        cardsFiltrados.length === 0 ? 'block' : 'none';
    }

    cards.forEach((card) => {
      card.style.display = 'none';
    });

    cardsFiltrados.sort((a, b) => {
      const tituloA = a.querySelector('.info-filme h3').innerText;
      const tituloB = b.querySelector('.info-filme h3').innerText;

      const anoA = Number(
        a.querySelector('.info-filme p').innerText.split('·')[0].trim()
      );
      const anoB = Number(
        b.querySelector('.info-filme p').innerText.split('·')[0].trim()
      );

      if (ordem === 'recentes') return anoB - anoA;
      if (ordem === 'antigos') return anoA - anoB;
      if (ordem === 'az') return tituloA.localeCompare(tituloB);
      if (ordem === 'za') return tituloB.localeCompare(tituloA);

      return 0;
    });

    cardsFiltrados.forEach((card) => {
      card.style.display = '';
      catalogo.appendChild(card);
    });
  }
  campoPesquisa.addEventListener('input', aplicarFiltros);
  if (ordenarFilmes) {
    ordenarFilmes.addEventListener('change', aplicarFiltros);
  }

  if (filtroGenero) {
    filtroGenero.addEventListener('change', aplicarFiltros);
  }
}
function navegar() {
  const rota = window.location.hash;

  if (rota === '#filmes') {
    app.innerHTML = `
      <header class="cabecalho">
        <a href="#" class="logo">NERD<span>VERSE</span><i>.</i></a>
        <nav class="menu">
          <a href="#">Início</a>
        </nav>
        <div class="pesquisa">
        <span class="icone-pesquisa">⌕</span>
        <input type="text" placeholder="Buscar filmes...">
      </div>
      </header>
      ${renderFilmes()}
    `;
    configurarPesquisaFilmes();
  } else {
    app.innerHTML = paginaInicial;
    configurarPesquisa();
  }
}

window.addEventListener('hashchange', navegar);

navegar();
