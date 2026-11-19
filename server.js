import express from 'express';

const app = express();
const PORT = 3000;
let cacheFilmes = null;
let ultimaAtualizacao = 0;

const TEMPO_CACHE = 60 * 60 * 1000;

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({
    mensagem: 'Servidor do NERDVERSE funcionando!',
  });
});
app.get('/api/filmes', async (req, res) => {
  const agora = Date.now();

  if (cacheFilmes && agora - ultimaAtualizacao < TEMPO_CACHE) {
    return res.json({
      origem: 'cache',
      filmes: cacheFilmes
    });
  }

  try {
    const consulta = `
      SELECT ?filme ?filmeLabel ?dataLancamento
      WHERE {
        ?filme wdt:P31 wd:Q11424;
               wdt:P577 ?dataLancamento.

        SERVICE wikibase:label {
          bd:serviceParam wikibase:language "pt,en".
        }
      }
      ORDER BY DESC(?dataLancamento)
      LIMIT 100
    `;

    const url = 'https://query.wikidata.org/sparql?query='
      + encodeURIComponent(consulta)
      + '&format=json';

    const resposta = await fetch(url, {
      headers: {
        Accept: 'application/sparql-results+json',
        'User-Agent': 'Nerdverse/1.0 (catalogo de entretenimento)'
      }
    });

    if (!resposta.ok) {
      return res.status(503).json({
        erro: 'O Wikidata está temporariamente indisponível.',
        codigo: resposta.status
      });
    }

    const dados = await resposta.json();

    const filmes = dados.results.bindings.map((item) => ({
      id: item.filme.value,
      titulo: item.filmeLabel.value,
      ano: new Date(item.dataLancamento.value).getFullYear()
    }));

    cacheFilmes = filmes;
    ultimaAtualizacao = agora;

    res.json({
      origem: 'wikidata',
      filmes
    });

  } catch (erro) {
    console.error('Erro ao consultar Wikidata:', erro);

    res.status(500).json({
      erro: 'Não foi possível carregar os filmes.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor NERDVERSE rodando na porta ${PORT}`);
});
