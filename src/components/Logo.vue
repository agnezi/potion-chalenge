<template>
	<div id="logo">
		<div class="logo-wrapper">
			<span class="logo-wrapper__empresa-nome"><b>Merlin's</b> Potions</span>
			<span class="logo-wrapper__empresa-slogan">fine potions since 1026</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "Logo"
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Charm:400,700");
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
@import "../assets/scss/grid";
#logo {
	.logo-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		&__empresa-nome {
			color: rgb(214, 0, 0);
			font-size: 1.5rem;
			text-transform: uppercase;
			font-family: "Roboto Condensed", sans-serif;
			&:after {
				content: " ";
				margin-top: 0.5rem;
				display: block;
				background-color: gray;
				width: 100%;
				height: 1px;
			}
		}
		&__empresa-slogan {
			color: rgb(107, 62, 125);
			font-family: "Charm", cursive;
			font-weight: bold;
			position: absolute;
			top: 3.5rem;
			background-color: rgb(255, 255, 255);
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