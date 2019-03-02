<template>
	<div id="logo">
		<div class="wrapper">
			<span class="wrapper__empresa-nome"><b>Merlin's</b> Potions</span>
			<span class="wrapper__empresa-slogan">fine potions since 1026</span>
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
@import '../assets/scss/grid';
@include respond-to("extra-small") {
	#logo {
		.wrapper {
			display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
			&__empresa-nome {
				color: rgb(214, 0, 0);
				font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Roboto Condensed', sans-serif;

			}
			&__empresa-slogan {
				color: rgb(107, 62, 125);
				font-family: "Charm", cursive;
				font-size: 1.2rem;
				font-weight: bold;
				&::before {
					content: "   ";
					width: 15px;
					height: 2px;
					background-color: rgb(195, 195, 195);
				}
				&::after {
					content: "   ";
					background-color: rgb(195, 195, 195);
					height: 1px;
					width: 3px;
				}
			}
		}
	}
}
@include respond-to("small") {
}
@include respond-to("medium") {
}
@include respond-to("large") {
}
</style>