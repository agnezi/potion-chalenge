<template>
	<div id="busca">
		<div class="busca__wrapper">
			<input
				type="text"
				name=""
				class="busca__wrapper--input"
				placeholder="Search our stock"
			/>
			<font-awesome-icon
				class="busca__wrapper--icon"
				:icon="['fas', 'search']"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "Busca"
};
</script>

<style lang="scss">
@import "../assets/scss/grid.scss";
#busca {
	.busca__wrapper {
		display: flex;
		&--input {
			border-radius: 0.3rem;
			border: solid 1px rgb(0, 0, 0);
			padding: 1rem 2rem;
			width: 100%;
		}
		&--icon {
			color: rgb(255, 0, 0);
			position: absolute;
			left: 4.5rem;
			top: 2.5rem;
		}
	}
}

@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
		#busca {
		.busca__wrapper {
			&--input {
        width: 5rem;
			}
			&--icon {
				display: none;
				position: block;
			}
		}
	}
}
@include respond-to("large") {
}
</style>