import { filmes } from '../dados/filmes.js';
export function renderFilmes() {
  const listaFilmes = filmes;
  return `
    <main class="pagina-categoria">

      <section class="categoria-banner">
        <span class="etiqueta">NERDVERSE — CINEMA</span>

        <h1>Universo dos <span>Filmes</span></h1>

        <p>
          Grandes histórias, mundos extraordinários
          e personagens inesquecíveis.
        </p>
      </section>

      <section class="filme-destaque">
        <div class="destaque-conteudo">
          <span class="etiqueta">DESTAQUE DA SEMANA</span>

          <h2>Uma nova história começa aqui.</h2>

          <p>
            Explore universos cinematográficos,
            descubra novas histórias e encontre
            seu próximo filme favorito.
          </p>

          <a href="#catalogo-filmes" class="botao-destaque">
            Explorar filmes
          </a>
        </div>
      </section>

      <section class="conteudo-categoria" id="catalogo-filmes">
        <div class="secao-topo">
          <div>
            <span class="etiqueta">EXPLORE O MULTIVERSO</span>
            <h2>Descubra seu próximo filme</h2>
            <p>Histórias para todos os gostos e universos.</p>

          </div>
          <div class="filtros-catalogo">
  <select id="filtro-genero">
    <option value="">Todos os gêneros</option>
    <option value="Ficção científica">Ficção científica</option>
    <option value="Animação">Animação</option>
    </select>

    <select id="ordenar-filmes">
      <option value="">Ordenar por</option>
      <option value="recentes">Mais recentes</option>
      <option value="antigos">Mais antigos</option>
      <option value="az">Nome (A–Z)</option>
      <option value="za">Nome (Z–A)</option>
    </select>
    <button id="limpar-filtros" type="button">Limpar filtros</button>
  </div>
  <p id="contador-filmes">4 filmes encontrados</p>
  <p id="mensagem-sem-resultados" style="display: none;">
  Não encontramos nenhum filme. Que tal tentar outra pesquisa?
</p>
          <div class="catalogo-filmes">
          ${filmes
            .map(
              (filme) => `
            <article class="card-filme">
            <div class="poster ${filme.posterClass}">
            ${
              filme.imagem
                ? `<img src="${filme.imagem}" alt="Pôster de ${filme.titulo}">`
                : `<span>NERDVERSE ORIGINAL</span>
                 <h3>${filme.tituloOriginal.toUpperCase()}</h3>`
            }
          </div>
        
              <div class="info-filme">
                <h3>${filme.titulo}</h3>
                <p>${filme.ano} · ${filme.categoria}</p>
              </div>
            </article>
          `
            )
            .join('')}
        </div>
        </section>

    </main>
  `;
}
