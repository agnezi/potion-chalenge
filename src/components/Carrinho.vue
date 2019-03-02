<template>
	<div id="carrinho">
		<div class="carrinho-wrapper">
			<font-awesome-icon
				class="carrinho-wrapper__icon"
				:icon="['fas', 'shopping-bag']"
			/>
			<span class="carrinho-wrapper__length">
				BAG: <span class="carrinho-wrapper__length--number">2</span>
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Carrinho"
};
</script>

<style lang="scss">
@import "../assets/scss/grid.scss";

#carrinho {
	.carrinho-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		&__icon {
			color: rgb(79, 51, 109);
			font-size: 2.5rem;
		}
		&__length {
			color: rgb(171, 169, 172);
			text-transform: uppercase;
			font-size: 0.7rem;
			&--number {
				color: rgb(255, 0, 0);
			}
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