<template>
  <div id="cabecalho-mobile">
    <div class="cabecalho-mobile">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="menu__icon"
        @click="function() {(mostraMenu = !mostraMenu),(mostraLogo = !mostraLogo),(mostraBusca = !mostraBusca),(mostraCarrinho = !mostraCarrinho),(mostraClose = !mostraClose),(mostraHamburguer = !mostraHamburguer)}"
        v-if="!mostraHamburguer"
      />
      <font-awesome-icon
        :icon="['fas', 'times']"
        class="menu__icon"
        @click="function() {
						(mostraMenu = !mostraMenu),
							(mostraLogo = !mostraLogo),
							(mostraCarrinho = !mostraCarrinho),
							(mostraBusca = !mostraBusca),
							(mostraHamburguer = !mostraHamburguer),
							(mostraClose = !mostraClose)
					}
				"
        v-if="!mostraClose"
      />
      <Logo class="cabecalho-mobile__logo" v-if="!mostraLogo"/>
      <Carrinho class="cabecalho-mobile__carrinho" v-if="!mostraCarrinho"/>
      <Busca class="cabecalho-mobile__busca" v-if="!mostraBusca"/>
    </div>
    <div class="menu-mobile-hidden" v-if="!mostraMenu">
      <ul class="menu-mobile-hidden__ul">
        <li class="menu-mobile-hidden__ul--li">
          <a href="#">Potions</a>
        </li>
        <li class="menu-mobile-hidden__ul--li">
          <a href="#">Ingredients</a>
        </li>
        <li class="menu-mobile-hidden__ul--li">
          <a href="#">Books</a>
        </li>
        <li class="menu-mobile-hidden__ul--li">
          <a href="#">Supplies</a>
        </li>
        <li class="menu-mobile-hidden__ul--li">
          <a href="#">Charms</a>
        </li>
        <li class="menu-mobile-hidden__ul--li">
          <a href="#">Clearance!</a>
        </li>
      </ul>
      <div class="menu-mobile-hidden__login">
        <span class="menu-mobile-hidden__login--entrar">Sign In</span>
        or
        <span class="menu-mobile-hidden__login--registrar">Sign Up</span>
      </div>
    </div>
    <EntregaMensagem/>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import Carrinho from "./Carrinho.vue";
import Busca from "./Busca.vue";
import EntregaMensagem from "./EntregaMensagem.vue";
export default {
  name: "CabecalhoMobile",
  components: {
    Logo,
    Carrinho,
    Busca,
    EntregaMensagem
  },
  data() {
    return {
      mostraMenu: true,
      mostraLogo: false,
      mostraCarrinho: false,
      mostraBusca: true,
      mostraClose: true,
      mostraHamburguer: false
    };
  }
};
</script>

<style lang='scss'>
@import url("https://fonts.googleapis.com/css?family=Cormorant+Infant|Gabriela");
@import "../assets/scss/grid";
#cabecalho-mobile {
  .cabecalho-mobile {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1.5rem 0 0.5rem 0;
    .menu__icon {
      font-size: 2rem;
      color: rgb(79, 51, 109);
    }
    &__logo {
      animation: fade 0.5s ease-in-out;
    }
    &__busca {
      animation: fade 0.5s ease-in-out;
    }
  }
  .menu-mobile-hidden {
    position: absolute;
    width: 100%;
    background-color: rgb(82, 52, 104);
    font-family: "Cormorant Infant", serif;
    font-style: italic;
    animation: fade 0.5s ease-in-out;
    color: rgb(255, 255, 255);
    &__ul {
      font-weigsht: bold;
      width: 100%;
      display: flex;
      flex-direction: column;
      &--li {
        width: 100%;
        border-bottom: solid 1px rgb(106, 84, 131);
        padding: 1rem 0 0.5rem 2rem;
        font-size: 1.5rem;
        transition: background-color 0.3s ease-in-out;
        &:hover {
          background-color: rgb(65, 42, 86);
        }
        a {
          text-decoration: none;
          color: rgb(255, 255, 255);
        }
      }
    }
    &__login {
      padding: 2rem 0 1rem 0;
      text-align: center;
      &--entrar {
        font-weight: bold;
        margin-right: 0.5rem;
      }
      &--registrar {
        font-weight: bold;
        margin-left: 0.5rem;
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
  #cabecalho-mobile {
    display: none;
  }
}
@include respond-to("large") {
  #cabecalho-mobile {
    display: none;
  }
}
@include respond-to("extra-large") {
  #cabecalho-mobile {
    display: none;
  }
}
</style>