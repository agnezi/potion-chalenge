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
	#carrinho {
		.carrinho-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			&__icon {
			}
			&__length {
				margin-left: 1.3rem;
				font-size: 1rem;
				&--number {
				}
			}
		}
	}
}
@include respond-to("large") {
	#carrinho {
		.carrinho-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			&__icon {
			}
			&__length {
				margin-left: 1.3rem;
				font-size: 1rem;
				&--number {
				}
			}
		}
	}
}
@include respond-to("extra-large") {
	#carrinho {
		.carrinho-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			&__icon {
			}
			&__length {
				margin-left: 1.3rem;
				font-size: 1rem;
				&--number {
				}
			}
		}
	}
}
</style>