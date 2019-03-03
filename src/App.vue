<template>
	<div id="app">
		<div class="container-fluid">
			<header>
				<CabecalhoMobile />
				<Cabecalho />
				<nav>
					<MenuPrincipal />
				</nav>
			</header>
			<main>
				<router-view />
			</main>
			<footer>
				<Rodape />
			</footer>
		</div>
	</div>
</template>

<script>
import Cabecalho from "./components/Cabecalho.vue";
import MenuPrincipal from "./components/MenuPrincipal.vue";
import CabecalhoMobile from "./components/CabecalhoMobile.vue";
import Rodape from "./components/Rodape.vue";
export default {
	components: { Cabecalho, MenuPrincipal, CabecalhoMobile, Rodape }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800");
@import "assets/css/reset.css";
@import "assets/scss/grid.scss";
html {
	font-size: 10px;
}
* {
	box-sizing: border-box;
}
#app {
	font-family: "Open Sans", sans-serif;
}
</style>
