<template>
	<div id="menu-principal"></div>
</template>

<script>
export default {
	name: "MenuPrincipal"
};
</script>

<style lang='scss'>
@import '../assets/scss/grid.scss';

@include respond-to("extra-small") {
	#menu-principal {
		display: none;
	}
}
@include respond-to("small") {
}
@include respond-to("medium") {
}
@include respond-to("large") {
}
</style>