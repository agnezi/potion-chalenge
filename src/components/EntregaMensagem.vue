<template>
  <div id="entrega-mensagem">
    <div class="entrega-mensagem-wrapper">
      <span class="entrega-mensagem-wrapper__text">
        Free shipping 
        <span class="entrega-mensagem-wrapper__text--price"> on orders over $50</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntregaMensagem"
};
</script>

<style lang="scss">
@import "../assets/scss/grid";
#entrega-mensagem {
  .entrega-mensagem-wrapper {
    &__text {
      background-color: rgb(236, 236, 236);
      display: flex;
      justify-content: center;
      font-size: 1rem;
      padding: 0.5rem 0;
      font-style: italic;
      color: gray;
      &--price {
        margin-left: 0.4rem;
      }
    }
  }
}
@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
  #entrega-mensagem {
    .entrega-mensagem-wrapper {
      &__text {
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        font-size: 1rem;
        color: rgb(255, 0, 0);
        &--price {
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }
      }
    }
  }
}
@include respond-to("large") {
  #entrega-mensagem {
    .entrega-mensagem-wrapper {
      &__text {
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        font-size: 1rem;
        color: rgb(255, 0, 0);
        &--price {
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }
      }
    }
  }
}
@include respond-to("extra-large") {
  #entrega-mensagem {
    .entrega-mensagem-wrapper {
      &__text {
        flex-direction: column;
        background-color: rgb(255, 255, 255);
        font-size: 1rem;
        color: rgb(255, 0, 0);
        &--price {
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>