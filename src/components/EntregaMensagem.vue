<template>
	<div id="entrega-mensagem">
		<div class="entrega-mensagem-wrapper">
			<span class="entrega-mensagem-wrapper__text">
				Free shipping on orders over $50
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
@import '../assets/scss/grid';
#entrega-mensagem {
	.entrega-mensagem-wrapper {
		&__text {
			background-color: rgb(236, 236, 236);
			display: flex;
			justify-content: center;
			font-size: 5vw;
			padding: 0.5rem 0;
			font-style: italic;
			color: gray;
		}
	}
}
@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
}
@include respond-to("large") {
}
</style>