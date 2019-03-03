<template>
	<div id="cabecalho">
		<div class="cabecalho-wrapper">
			<Logo class="cabecalho-wrapper__logo" />
			<Busca class="cabecalho-wrapper__busca" />
			<Carrinho class="cabecalho-wrapper__carrinho" />
			<EntregaMensagem class="cabecalho-wrapper__EntregaMensagem" />
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
		.cabecalho-wrapper {
			&__logo {
				order: 1;
			}
			&__busca {
				order: 2;
			}
			&__entrega-mensagem {
				order: 3;
			}
			&__sacola {
				order: 4;
			}
		}
	}
}
@include respond-to("large") {
}
</style>