/* <template>
  <div id="home">
    <span class="view-name">Potions</span>
    <div class="home-wrapper">
      <div
        class="potes"
        v-for="(potion, id) in pots"
        :key="id"
        @click="function(){(ingredientes = !ingredientes),(lightBox(potion.id))}"
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
      </div>
    </div>
    <div class="home-ingredientes" v-if="!ingredientes">
      <div
        class="home-ingredientes-wrapper"
        v-for="(clicado, index) in lightBoxPotion"
        :key="index"
      >
        <div v-for="(potion, id) in pots" :key="id">
          <div v-if="potion.id == clicado">
            <div class="home-ingredientes-wrapper__content">
              <font-awesome-icon
                class="home-ingredientes-wrapper__content--fechar"
                :icon="['fas', 'times']"
                @click="function(){(ingredientes = !ingredientes), (resetLighBox(clicado.id))}"
              />
              <img
                :src="require('../assets/img/' + potion.image)"
                alt="Imagem de um pote de feitiços do Harry Potter"
              >
              <div class="home-ingredientes-wrapper__content-informacoes">
                <span class="home-ingredientes-wrapper__content-informacoes--nome">{{ potion.name }}</span>
                <span class="home-ingredientes-wrapper__content-informacoes--uso">Use/Effect:</span>
                <span
                  class="home-ingredientes-wrapper__content-informacoes--efeito"
                >{{potion.effect}}</span>
                <span
                  class="home-ingredientes-wrapper__content-informacoes--ingrediente-titulo"
                >Ingredients:</span>
                <span class="home-ingredientes-wrapper__content-informacoes--ingredientes">
                  <ul>
                    <li>{{potion.ingredients[0]}}</li>
                    <li>{{potion.ingredients[1]}}</li>
                    <li>{{potion.ingredients[2]}}</li>
                    <li>{{potion.ingredients[3]}}</li>
                    <li>{{potion.ingredients[4]}}</li>
                    <li>{{potion.ingredients[5]}}</li>
                  </ul>
                </span>
                <span>Price:</span>
                <span
                  class="home-ingredientes-wrapper__content-informacoes--preco"
                >${{potion.price}}</span>
                <button class="home-ingredientes-wrapper__content-informacoes--botao">ADD TO CART</button>
              </div>
            </div>
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
  methods: {
    lightBox(id) {
      this.$store.commit("exibeLightBox", id);
    },
    resetLighBox(id) {
      this.$store.commit("apagaLighBox", id);
    }
  },
  mounted() {
    this.$store.dispatch("loadPotions");
  },
  computed: mapState(["pots", "lightBoxPotion"])
};
</script>

<style lang="scss">
@import "../assets/scss/grid";
#home {
  margin-top: 1.5rem;
  .home-ingredientes {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fade 1s ease-in-out;
    .home-ingredientes-wrapper {
      position: absolute;
      background-color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      width: 40%;
      border-radius: 0.4rem;
      &__content {
        padding: 3rem 2rem;
        display: flex;
        align-items: center;
        position: relative;
        &--fechar {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          font-size: 1.5rem;
          z-index: 1;
        }
        img {
          width: 50%;
          height: auto;
        }
        &-informacoes {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 50%;
          height: 100%;
          left: 50%;
          position: absolute;
          &--nome {
            font-weight: bold;
          }
          &--uso {
            font-weight: bold;
          }
          &--efeito {
          }
          &--ingrediente-titulo {
            font-weight: bold;
          }
          &--ingredientes {
          }
          &--preco {
            color: rgb(255, 0, 0);
          }
          &--botao {
            background-color: rgb(255, 0, 0);
            border: none;
            font-size: 1rem;
            border-radius: 0.3rem;
            color: rgb(255, 255, 255);
            padding: 0.5rem 0;
          }
        }
      }
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
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
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
</style> */