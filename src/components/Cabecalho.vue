<template>
	<div id="cabecalho">
		<div class="cabecalho-wrapper">
			<Logo />
			<Busca />
			<EntregaMensagem />
			<Carrinho />
		</div>
	</div>
</template>

<script>
import Logo from "./Logo.vue";
import Busca from "./Busca.vue";
import Carrinho from "./Carrinho.vue";
import EntregaMensagem from "./EntregaMensagem.vue";
export default {
	name: "cabecalho",
	components: {
		Logo,
		Busca,
		Carrinho,
		EntregaMensagem
	}
};
</script>

<style lang="scss">
@import "../assets/scss/grid";
#cabecalho {
	.cabecalho-wrapper {
		display: flex;
		justify-content: space-around;
	}
}
@include respond-to("extra-small") {
	#cabecalho {
		display: none;
	}
}
@include respond-to("small") {
	#cabecalho {
		display: none;
	}
}
@include respond-to("medium") {
	#cabecalho {
		margin-top: 1rem;
		.cabecalho-wrapper {
			align-items: center;
		}
	}
}
@include respond-to("large") {
		#cabecalho {
		margin-top: 1rem;
		.cabecalho-wrapper {
			align-items: center;
		}
	}
}
@include respond-to('extra-large'){
		#cabecalho {
		margin-top: 1rem;
		.cabecalho-wrapper {
			align-items: center;
		}
	}
}
</style>