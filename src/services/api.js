const url = "https://www.thecocktaildb.com/api/json/v1/1";

/** Busca drinks pela inicial A
 * @returns Array/Lista de drinks que possuem nomes começando pela letra 'a';
 */
export const inicialFetch = () => {
  return fetch(`${url}/search.php?f=a`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}

/** Consulta um coquetel por nome
 * @param name: String contendo o nome para busca;
 * @returns Arra/Lista dos drinks encontrados.
 */
export const searchByCocktailName = name => {
  return fetch(`${url}/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}

/** Consulta filtrada de coquetéis
 * @param type: String de qual tipo de parâmetro será usado na filtragem.
 * @param param: String com texto para filtragem (relacionada ao tipo).
 * @returns Array/Lista dos drinks filtrados.
 */
export const filterCocktails = (type, param) => {
  return fetch(`${url}/filter.php?${type}=${param}`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}

/** Busca os parâmetros da API
 * @param filter: trata-se do tipo de parâmetro que se deseja obter a lista.
 * @returns Array/Lista dos drinks filtrados.
 */
export const getFilterList = (filter) => {
  return fetch(`${url}/list.php?${filter}=list`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}

/** Consulta detalhes e um coquetel por ID
 * @param id: Number do id do coquetel
 * @return: Objeto contendo diversos dados do drink
 */
export const getCocktailDetails = id => {
  return fetch(`${url}/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => data["drinks"][0]);
}
