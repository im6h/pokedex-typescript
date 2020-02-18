<template>
  <div class="max-w-screen-lg mx-auto">
    <div class="w-full h-full">
      <div class="pokemon w-full h-full">
        <img class="mx-auto" :src="pokemon.img" :alt="pokemon.name" />
        <div class="rounded border p-4">
          <p class="text-center">{{ pokemon.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import * as vuex from "vuex";
import * as router from "vue-router";
@Component({})
export default class Pokemon extends Vue {
  get pokemon() {
    return this.$store.getters["pokemon"];
  }
  get pokemons() {
    return this.$store.getters["pokemons"];
  }
  created() {
    const id: string = this.$route.params.id;
    this.pokemons.forEach((pokemon: any) => {
      if (String(pokemon.id) === id) {
        this.$store.dispatch("getPokemon", pokemon);
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.pokemon {
  display: flex;
  flex-direction: column;

  img {
    height: 80px;
    width: 80px;

  }

}
</style>
