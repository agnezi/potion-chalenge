<template>
	<div id="cabecalho">
		<div class="cabecalho-wrapper">
			<Logo />
			<Busca />
			<Carrinho />
			<div class="entrega-mensagem"></div>
			<div class="sacola"></div>
			<div class="sacola-length"></div>
		</div>
	</div>
</template>

<script>
import Logo from "./Logo.vue";
import Busca from "./Busca.vue";
import Carrinho from "./Carrinho.vue";
export default {
	name: "cabecalho",
	components: {
		Logo,
		Busca,
		Carrinho
	}
};
</script>

<style lang="scss">
@import "../assets/scss/grid";
#cabecalho {
	.cabecalho-wrapper{
		display: flex;
	}
}
@include respond-to("extra-small") {
	#cabecalho {
		display: none;
	}
}
@include respond-to("small") {
	#cabecalho{
		display: none;
	}
}
@include respond-to("medium") {
	#cabecalho{
		display: none;
	}
}
@include respond-to("large") {
}
</style>