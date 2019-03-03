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
		}
		&__empresa-slogan {
			color: rgb(107, 62, 125);
			font-family: "Charm", cursive;
			font-weight: bold;
			background-color: rgb(255, 255, 255);
			font-size: 1rem;
			&:after {
				content: " ";
				margin-top: 0.5rem;
				display: inline-block;
				background-color: gray;
				width: 1rem;
				height: 1px;
				vertical-align: 0.3rem;
			}
			&:before {
				content: " ";
				margin-top: 0.5rem;
				display: inline-block;
				background-color: gray;
				width: 1rem;
				height: 1px;
				vertical-align: 0.3rem;
			}
		}
	}
}
@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
	#logo .logo-wrapper {
		&__empresa-nome {
		}
		&__empresa-slogan {
		}
	}
}
@include respond-to("large") {
	#logo .logo-wrapper {
		&__empresa-nome {
		}
		&__empresa-slogan {
		}
	}
}
@include respond-to("extra-large") {
	#logo .logo-wrapper {
		&__empresa-nome {
		}
		&__empresa-slogan {
		}
	}
}
</style>