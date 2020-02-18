<template>
  <div class="m-2">
    <div class="p-4 rounded border pokemon">
      <router-link :to="{ name: 'Pokemon', params: { id: `${pokemon.id}` } }">
        <div class="pokemon--image mx-auto">
          <img :src="pokemon.img" :alt="pokemon.name" />
        </div>
        <div class="pokemon--info text-center">
          <h3>
            {{ pokemon.name }}
          </h3>
          <p>{{ pokemon.num }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class Card extends Vue {
  @Prop() private pokemon!: object;
}
</script>
<style lang="scss">
.pokemon {
  &--image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  &--info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
