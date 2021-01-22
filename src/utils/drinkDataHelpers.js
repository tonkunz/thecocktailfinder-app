/** Método que trata o retorno da API:
 * Infelizmente, quando se trata de ingredientes e suas respectivas medidas,
 * a API não retorna um arrays simples, mas diversas chaves enumeradas, o 
 * que torna penoso e não intuitivo o consumo pelo template. Por isto este
 * pequeno método é usado para tratar essa resposta.
 * @param drinkData Objeto recebido da API com diversos dados específicos do drink;
 * @return retorna um array de objetos contendo o ingrediente e sua medida;
 */
export function handleIngredients(drinkData) {
  const ingredients = []; // Arrays que receberá os ingredientes do drink

  for (let i=0;i<15;i++) {
    // Pega o ingrediente e a medidada em uma chave enumerada. ex: strIngredient1
    const ingredient = drinkData[`strIngredient${i+1}`];
    const measure = drinkData[`strMeasure${i+1}`];

    const ingredientAndMeasure = {};

    if (ingredient)
      ingredientAndMeasure.ingredient = ingredient;

    if (measure)
      ingredientAndMeasure.measure = measure;

    if (ingredient || measure)
    ingredients.push(ingredientAndMeasure);
  }

  return ingredients;
}
