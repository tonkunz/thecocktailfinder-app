const url = "https://www.thecocktaildb.com/api/json/v1";

export const inicialFetch = () => {
  return fetch(`${url}/1/search.php?f=a`)
    .then(res => res.json())
    .then(data => data["drinks"]);
}