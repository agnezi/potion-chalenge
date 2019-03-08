/* <template>
  <div id="home">
    <span class="view-name">Potions</span>
    <div class="home-wrapper">
      <div class="potes" v-for="(potion, id) in pots" :key="id" @click="function(){(ingredientes = !ingredientes),(lightBox(potion.id))}">
        <a href="#">
          <img class="potes__imagem" :src="require('../assets/img/' + potion.image)" alt="Imagem de um pote de feitiços do Harry Potter">
        </a>
        <span class="potes__nome">
          <a href="#">{{ potion.name }} -</a>
        </span>
        <span class="potes__preco">
          <a href="#">${{ potion.price }}</a>
        </span>
      </div>
    </div>
    <div class="home-ingredientes" v-if="!ingredientes">
      <div class="home-ingredientes-wrapper" v-for="(clicado, index) in lightBoxPotion" :key="index">
        <div v-for="(potion, id) in pots" :key="id">
          <div v-if="potion.id == clicado">
            <div class="home-ingredientes-wrapper__content">
              <font-awesome-icon class="home-ingredientes-wrapper__content--fechar" :icon="['fas', 'times']" @click="function(){(ingredientes = !ingredientes), (resetLighBox(clicado.id))}"/>
              <img :src="require('../assets/img/' + potion.image)" alt="Imagem de um pote de feitiços do Harry Potter">
              <div class="home-ingredientes-wrapper__content-informacoes">
                <span class="home-ingredientes-wrapper__content-informacoes--nome">{{ potion.name }}</span>
                <span class="home-ingredientes-wrapper__content-informacoes--uso">Use/Effect:</span>
                <span class="home-ingredientes-wrapper__content-informacoes--efeito">{{potion.effect}}</span>
                <span class="home-ingredientes-wrapper__content-informacoes--ingrediente-titulo">Ingredients:</span>
                <span class="home-ingredientes-wrapper__content-informacoes--ingredientes">
                  <ul>
                    <li>{{potion.ingredients[0]}}</li>
                    <li>{{potion.ingredients[1]}}</li>
                    <li>{{potion.ingredients[2]}}</li>
                    <li>{{potion.ingredients[3]}}</li>
                    <li>{{potion.ingredients[4]}}</li>
                    <li>{{potion.ingredients[5]}}</li>
                    <li>{{potion.ingredients[6]}}</li>
                  </ul>
                </span>
                <span class="home-ingredientes-wrapper__content-informacoes--preco-titulo">Price:</span>
                <span class="home-ingredientes-wrapper__content-informacoes--preco">${{potion.price}}</span>
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
  animation: fade 2s ease-in-out;
  margin-top: 1.5rem;
  .home-ingredientes {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    animation: fade 1s ease-in-out;
    .home-ingredientes-wrapper {
      position: absolute;
      background-color: rgb(255, 255, 255);
      display: flex;
      flex-direction: column;
      &__content {
        display: flex;
        flex-direction: column;
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
          text-align: center;
          display: flex;
          flex-direction: column;
          span {
            margin-top: 0.5rem;
          }
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
          &--preco-titulo {
            font-weight: bold;
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
            width: 50%;
            align-self: center;
            margin-top: 0.5rem;
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
      border: solid 1px rgba(0, 0, 0, 0);
      transition: border 0.3s ease-in-out;
      &:hover {
        border: solid 1px rgb(82, 52, 104);
        border-radius: 0.3rem;
      }
      &__imagem {
        width: 100%;
        height: auto;
      }
      &__nome {
        a {
          text-decoration: none;
          color: rgb(0, 0, 0);
          font-size: 3vw;
          font-weight: bold;
        }
      }
      &__preco {
        a {
          text-decoration: none;
          font-size: 3vw;
          color: rgb(255, 0, 0);
        }
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
        width: 80%;
        border-radius: 0.4rem;
        &__content {
          padding: 3rem 2rem;
          display: flex;
          align-items: center;
          position: relative;
          flex-direction: row;
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
            text-align: start;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            height: 100%;
            left: 50%;
            position: absolute;
            span {
              margin-top: 0;
            }
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
            &--preco-titulo {
              font-weight: bold;
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
              align-self: start;
              width: 40%;
            }
          }
        }
      }
    }
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
          a {
            font-size: 1rem;
          }
        }
        &__preco {
          a {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
@include respond-to("large") {
  #home {
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
        width: 60%;
        border-radius: 0.4rem;
        &__content {
          padding: 3rem 2rem;
          display: flex;
          align-items: center;
          position: relative;
          flex-direction: row;
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
            text-align: start;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            height: 100%;
            left: 50%;
            position: absolute;
            span {
              margin-top: 0;
            }
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
            &--preco-titulo {
              font-weight: bold;
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
              align-self: start;
              width: 40%;
            }
          }
        }
      }
    }
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
          a {
            font-size: 1rem;
          }
        }
        &__preco {
          a {
            font-size: 1rem;
          }
        }
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
@include respond-to("extra-large") {
  #home {
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
          flex-direction: row;
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
            text-align: start;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 50%;
            height: 100%;
            left: 50%;
            position: absolute;
            span {
              margin-top: 0;
            }
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
            &--preco-titulo {
              font-weight: bold;
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
              align-self: start;
              width: 40%;
            }
          }
        }
      }
    }
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
          a {
            font-size: 1rem;
          }
        }
        &__preco {
          a {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>