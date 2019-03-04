<template>
  <div id="home">
    <span class="view-name">Potions</span>
    <div class="home-wrapper">
      <div
        class="potes"
        v-for="(potion, id) in pots"
        :key="id"
        @click="ingredientes = !ingredientes"
      >
        <a href="#">
          <img
            class="potes__imagem"
            :src="require('../assets/img/' + potion.image)"
            alt="Imagem de um pote de feitiços do Harry Potter"
          >
        </a>
        <span class="potes__nome">{{ potion.name }} -</span>
        <span class="potes__preco">${{ potion.price }}</span>
        <div class="home-ingredientes-wrapper" v-if="!ingredientes">
          <div class="home-ingredientes-wrapper__content">
            <span>{{ potion.name }}</span>
            <span>{{}}</span>
            <span></span>
            <span @click="ingredientes = !ingredientes">FECHAR</span>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {
      ingredientes: true
    };
  },
  components: {},
  mounted() {
    this.$store.dispatch("loadPotions");
  },
  computed: mapState(["pots"])
};
</script>

<style lang="scss">
@import "../assets/scss/grid";
#home {
  margin-top: 1.5rem;
  .home-ingredientes-wrapper {
    width: 100%;
    height: 100% !important;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    &__content {
      position: absolute;
      background-color: rgb(255, 255, 255);
      padding: 10rem;
    }
  }
  .view-name {
    font-weight: bold;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
  }
  .home-wrapper {
    display: flex;
    flex-wrap: wrap;
    .potes {
      width: 50%;
      padding: 1rem;
      text-align: center;
      &:hover {
        border: solid 1px black;
        border-radius: 0.3rem;
      }
      &__imagem {
        width: 100%;
        height: auto;
      }
      &__nome {
        font-size: 3vw;
        font-weight: bold;
      }
      &__preco {
        font-size: 3vw;
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
  #home {
    .view-name {
      margin-left: 2rem;
      justify-content: start;
    }
    .home-wrapper {
      padding: 3rem;
      .potes {
        padding: 2rem;
        width: 33.333333%;
        &__nome {
          font-size: 1.5vw;
        }
        &__preco {
          font-size: 1.5vw;
        }
      }
    }
  }
}
@include respond-to("large") {
  #home {
    .view-name {
      margin-left: 2rem;
      justify-content: start;
    }
    .home-wrapper {
      padding: 3rem;
      .potes {
        padding: 2rem;
        width: 33.333333%;
        &__nome {
          font-size: 1.5vw;
        }
        &__preco {
          font-size: 1.5vw;
        }
      }
    }
  }
}
@include respond-to("extra-large") {
  #home {
    .view-name {
      margin-left: 2rem;
      justify-content: start;
    }
    .home-wrapper {
      padding: 3rem;
      .potes {
        padding: 2rem;
        width: 33.333333%;
        &__nome {
          font-size: 1rem;
        }
        &__preco {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>