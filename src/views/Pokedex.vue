<template>
  <div class="pokedex max-w-screen-lg mx-auto">
    <div class="flex flex-wrap w-full">
      <div class="w-1/4" v-for="(pokemon, index) in pokemons" :key="index">
        <card :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Card from "@/components/Card.vue";
@Component({
  components: {
    Card
  }
})
export default class Pokedex extends Vue {
  // method
  // computed
  get pokemons() {
    return this.$store.getters["pokemons"];
  }
  created() {
    this.$store.dispatch("getPokemons");
  }
}
</script>
<style lang="scss">
.pokedex {
  display: flex;
}
</style>
