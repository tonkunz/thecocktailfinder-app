const url = "https://www.thecocktaildb.com/api/json/v1/1";

export const inicialFetch = () => {
  return fetch(`${url}/search.php?f=a`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}

export const searchByCocktailName = name => {
  return fetch(`${url}/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}
