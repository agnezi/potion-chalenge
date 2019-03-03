<template>
	<div id="menu-redes-sociais">
		<div class="menu-redes-sociais-wrapper">
			<ul class="menu-redes-sociais-wrapper__ul">
				<li class="menu-redes-sociais-wrapper__ul--li">
					<font-awesome-icon
						class="carrinho-wrapper__icon"
						:icon="['fab', 'facebook']"
					/>
				</li>
				<li class="menu-redes-sociais-wrapper__ul--li">
					<font-awesome-icon
						class="carrinho-wrapper__icon"
						:icon="['fab', 'twitter-square']"
					/>
				</li>
				<li class="menu-redes-sociais-wrapper__ul--li">
					<font-awesome-icon
						class="carrinho-wrapper__icon"
						:icon="['fab', 'pinterest-square']"
					/>
				</li>
				<li class="menu-redes-sociais-wrapper__ul--li">
					<font-awesome-icon
						class="carrinho-wrapper__icon"
						:icon="['fab', 'tumblr-square']"
					/>
				</li>
				<li class="menu-redes-sociais-wrapper__ul--li">
					<font-awesome-icon
						class="carrinho-wrapper__icon"
						:icon="['fab', 'google-plus-square']"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuRedesSociais"
};
</script>

<style lang='scss'>
@import "../assets/scss/grid.scss";

#menu-redes-sociais {
  width: 100%;
  padding: 0 1rem;
  margin-top: 1.5rem;
	.menu-redes-sociais-wrapper {
		&__ul {
			display: flex;
			justify-content: space-around;
			margin-bottom: 1rem;
			&--li {
				font-size: 2rem;
				color: rgb(80, 50, 110);
			}
		}
	}
}

@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
	#menu-redes-sociais {
		padding: 0;
	.menu-redes-sociais-wrapper {
		&__ul {
			padding: 0 0.5rem;
			justify-content: space-between;
			&--li {
			}
		}
	}
}
}
@include respond-to("large") {
}
</style>