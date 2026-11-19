export async function buscarFilmes() {
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

  const url =
    'https://query.wikidata.org/sparql?query=' +
    encodeURIComponent(consulta) +
    '&format=json';

  const resposta = await fetch(url, {
    headers: {
      Accept: 'application/sparql-results+json',
    },
  });

  if (!resposta.ok) {
    throw new Error('Não foi possível buscar os filmes.');
  }

  const dados = await resposta.json();

  return dados.results.bindings.map((item) => ({
    id: item.filme.value,
    titulo: item.filmeLabel.value,
    ano: new Date(item.dataLancamento.value).getFullYear(),
  }));
}
