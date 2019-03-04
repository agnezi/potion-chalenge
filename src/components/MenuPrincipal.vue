<template>
	<div id="menu-principal">
		<div class="menu-principal-wrapper">
			<ul class="menu-principal-wrapper__ul">
				<li class="menu-principal-wrapper__ul--li">
					<a href="#">Potions<i class="arrow"></i></a>
				</li>
				<li class="menu-principal-wrapper__ul--li">
					<a href="#"> Ingredients<i class="arrow"></i> </a>
				</li>
				<li class="menu-principal-wrapper__ul--li">
					<a href="#"> Books<i class="arrow"></i> </a>
				</li>
				<li class="menu-principal-wrapper__ul--li">
					<a href="#"> Supplies<i class="arrow"></i> </a>
				</li>
				<li class="menu-principal-wrapper__ul--li">
					<a href="#"> Charms<i class="arrow"></i> </a>
				</li>
				<li class="menu-principal-wrapper__ul--li">
					<a href="#">Clearance!</a>
				</li>
			</ul>
			<div class="menu-principal-wrapper__login">
				<span class="menu-principal-wrapper__login--entrar"
					><a href="#">
						Sign In
					</a>
				</span>
				or
				<span class="menu-principal-wrapper__login--registrar">
					<a href="#">
						Sign Up
					</a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuPrincipal"
};
</script>

<style lang='scss'>
@import "../assets/scss/grid.scss";
#menu-principal {
	margin-top: 1rem;
	display: none;
	font-family: "Cormorant Infant", serif;
	font-style: italic;
	.menu-principal-wrapper {
		background-color: rgb(82, 52, 104);
		display: flex;
		justify-content: space-around;
		&__ul {
			color: rgb(255, 255, 255);
			display: flex;
			&--li {
				padding: 1rem;
				transition: background-color 0.3s ease-in-out;
				&:hover {
					background-color: rgb(65, 42, 86);
				}
				a {
					text-decoration: none;
					color: rgb(255, 255, 255);
				}
				.arrow {
					border: solid rgb(255, 255, 255);
					border-width: 0 2px 2px 0;
					display: inline-block;
					transform: rotate(45deg);
					padding: 2px;
					margin-left: 0.5rem;
				}
				&:hover .arrow {
				}
			}
		}
		&__login {
			color: rgb(255, 255, 255);
			padding: 1rem;
			a{
				text-decoration: none;
				color: rgb(255, 255, 255);
			}
			&--entrar {
				font-weight: bold;
				margin-right: 0.5rem;
			}
			&--registrar {
				font-weight: bold;
				margin-left: 0.5rem;
			}
		}
	}
}

@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
	#menu-principal {
		display: block;
	}
}
@include respond-to("large") {
	#menu-principal {
		display: block;
	}
}
@include respond-to("extra-large") {
	#menu-principal {
		display: block;
	}
}
</style>