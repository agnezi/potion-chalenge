<template>
	<div id="rodape">
		<div class="rodape-wrapper">
			<MenuCompania />
			<Newsletter />
			<MenuRedesSociais />
			<span class="copyright">
				&copy; 2015 Merlin's Potions. All Rights Reserved</span
			>
		</div>
	</div>
</template>

<script>
import MenuRedesSociais from "./MenuRedesSociais.vue";
import Newsletter from "./Newsletter.vue";
import MenuCompania from "./MenuCompania.vue";
export default {
	name: "rodape",
	components: { MenuRedesSociais, MenuCompania, Newsletter }
};
</script>

<style lang='scss'>
#rodape {
	background-color: rgb(230, 230, 230);
}
@import "../assets/scss/grid.scss";
#rodape {
	.rodape-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.copyright {
		order: 3;
		color: gray;
		font-size: 0.9rem;
		margin: 1rem 0;
	}
}
@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
	#rodape {
		.rodape-wrapper {
			.menu-compania {
				display: block;
			}
			.menu-redes-sociais {
			}
			.newsletter {
			}
			.copyright {
			}
		}
	}
}
@include respond-to("large") {
}
</style>