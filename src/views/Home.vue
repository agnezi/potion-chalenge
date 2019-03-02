<template>
	<div id="home">
    <span class="view-name">
      Potions
    </span>
		<div class="home-wrapper">
			<div class="potes" v-for="(potion, id) in pots" :key="id">
        <img class="potes__imagem" src="../assets/img/aging-potion.png" alt="Imagem de um pote de feitiços do Harry Potter">
				<span class="potes__nome">{{ potion.name }} - </span>
        <span class="potes__preco">
          ${{potion.price}}
        </span>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import { mapState } from "vuex";
export default {
	name: "home",
	components: {},
	mounted() {
		this.$store.dispatch("loadPotions");
	},
	computed: mapState(["pots"])
};
</script>

<style lang="scss">
@import "../assets/scss/grid";
  #home{
    margin-top: 1.5rem;
    .view-name{
      font-weight: bold;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
    }
    .home-wrapper{
      display: flex;
      flex-wrap: wrap;
      .potes{
        width: 50%;
        padding: 1rem;
        text-align: center;
        &__imagem{
          width: 100%;
          height: auto;
        }
        &__nome {
          font-size: 0.6rem;
          font-weight: bold;
        }
        &__preco {
          font-size: 0.6rem;
          color: rgb(255, 0, 0);
        }
      }
    }
  }
@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
}
@include respond-to("large") {
  #home{
    .home-wrapper{
      .potes{
        width: 33.33333%;
      }
    }
  }
}
</style>