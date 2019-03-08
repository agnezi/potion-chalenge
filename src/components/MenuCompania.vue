<template>
  <div id="menu-compania">
    <div class="menu-compania-wrapper">
      <ul class="menu-compania-wrapper__ul">
        <li class="menu-compania-wrapper__ul--li">
          <a href="#">Company</a>
        </li>
        <li class="menu-compania-wrapper__ul--li">
          <a href="#">Contact us</a>
        </li>
        <li class="menu-compania-wrapper__ul--li">
          <a href="#">Shipping</a>
        </li>
        <li class="menu-compania-wrapper__ul--li">
          <a href="#">Returns</a>
        </li>
        <li class="menu-compania-wrapper__ul--li">
          <a href="#">Carrers</a>
        </li>
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
        padding: 0 1rem;
        text-transform: uppercase;
        margin-right: 1rem;
        font-size: 1.1rem;
        a {
          text-decoration: none;
          color: rgb(255, 0, 0);
        }
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
        }
      }
    }
  }
}
</style>