import Vue from "vue";
import Vuex from "vuex";
import { pokemonApi } from "@/configs/index.ts";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: [],
    pokemon: {}
  },
  getters: {
    pokemons: state => state.pokemons,
    pokemon: state => state.pokemon
  },
  mutations: {
    setPokemons: (state, payload) => {
      state.pokemons = payload;
    },
    setPokemon: (state, payload) => {
      state.pokemon = payload;
    }
  },
  actions: {
    getPokemons: async ({ commit }) => {
      try {
        const response = await pokemonApi.getPokemons();
        if (response && response.status === 200) {
          commit("setPokemons", response.data.pokemon);
        } else {
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    },
    getPokemon: async ({ commit }, payload) => {
      commit("setPokemon", payload);
    }
  }
});
