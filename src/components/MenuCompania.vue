<template>
  <div id="menu-compania">
    <div class="menu-compania-wrapper">
      <ul class="menu-compania-wrapper__ul">
        <li class="menu-compania-wrapper__ul--li">Company</li>
        <li class="menu-compania-wrapper__ul--li">Contact us</li>
        <li class="menu-compania-wrapper__ul--li">Shipping</li>
        <li class="menu-compania-wrapper__ul--li">Returns</li>
        <li class="menu-compania-wrapper__ul--li">Carrers</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCompania"
};
</script>

<style lang='scss'>
@import "../assets/scss/grid";
#menu-compania {
  .menu-compania-wrapper {
    &__ul {
      display: flex;
      flex-wrap: wrap;
      &--li {
        color: rgb(255, 0, 0);
        padding: 0 0.5rem;
        text-transform: uppercase;
        margin-right: 1rem;
      }
    }
  }
}

@include respond-to("extra-small") {
  #menu-compania {
    display: none;
  }
}
@include respond-to("small") {
  #menu-compania {
    display: none;
  }
}
@include respond-to("medium") {
}
@include respond-to("large") {
}
@include respond-to("extra-large") {
  #menu-compania {
    .menu-compania-wrapper {
      &__ul {
        display: flex;
        flex-wrap: wrap;
        &--li {
          color: rgb(255, 0, 0);
          padding: 0 0.5rem;
          text-transform: uppercase;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>