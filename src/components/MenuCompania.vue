<template>
	<div id="menu-compania">
		<div class="menu-compania-wrapper">
			<ul>
				<li>Company</li>
				<li>Contact us</li>
				<li>Shipping</li>
				<li>Returns</li>
				<li>Carrers</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuCompania"
};
</script>

<style lang='scss'>
@import "../assets/scss/grid";
#menu-compania {
	.menu-compania-wrapper {
		display: none;
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