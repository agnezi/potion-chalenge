<template>
	<div id="rodape">
		<div class="rodape-wrapper">
			<MenuCompania class="menu-compania" />
			<MenuRedesSociais class="menu-redes-sociais" />
			<Newsletter class="newsletter" />
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
		.menu-compania {
			display: none;
		}
		.menu-redes-sociais {
			order: 2;
		}
		.newsletter {
			order: 1;
			background-color: rgb(255, 255, 255);
			width: 90%;
			margin-top: 1rem;
		}
		.copyright {
      order: 3;
      color: gray;
      font-size: 0.9rem;
      margin: 1rem 0;
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