<template>
	<div id="entrega-mensagem">
		<div class="entrega-mensagem-wrapper">
			<span class="entrega-mensagem-wrapper__text">
				Free shipping
				<span class="entrega-mensagem-wrapper__text--row"
					>on orders over $50</span
				>
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
			font-size: 5vw;
			padding: 0.5rem 0;
			font-style: italic;
			color: gray;
			&--row {
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
				font-size: 2vw;
				color: rgb(255, 0, 0);
				&--row {
				}
			}
		}
	}
}
@include respond-to("large") {
}
</style>