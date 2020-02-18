import axios from "axios";
class PokemonApi {
  constructor() {
    console.log("Hello TypeScript");
  }
  async getPokemons() {
    return await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
  }
}
export const pokemonApi = new PokemonApi();
