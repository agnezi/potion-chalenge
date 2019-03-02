<template>
  <div id="busca">
    <input type="text" name="" class="busca__input" placeholder="Search our stock">
    <font-awesome-icon class="busca__icon" :icon="['fas', 'search']"/>
  </div>
</template>

<script>
  export default {
    name:'Busca'
  }
</script>

<style lang="scss">
@import '../assets/scss/grid.scss';

@include respond-to("extra-small") {
  #busca{
    width: 90%;
    .busca__input{
      border-radius: 0.3rem;
      border: solid 1px rgb(0, 0, 0);
      padding: 1rem 2.5rem;
      width: 100%;
    }
    .busca__icon {
      color: rgb(255, 0, 0);
      position: absolute;
      left: 5rem;
      top: 2.5rem;
    }
  }
}
@include respond-to("small") {
}
@include respond-to("medium") {
}
@include respond-to("large") {
}
</style>