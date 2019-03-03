<template>
	<div id="rodape">
		<div class="rodape-wrapper">
			<div class="rodape-wrapper__newsletter">
				<Newsletter />
			</div>
			<div class="rodape-wrapper__navs">
				<MenuCompania />
				<MenuRedesSociais />
				<span class="copyright">
					&copy; 2015 Merlin's Potions. All Rights Reserved</span
				>
			</div>
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
		&__navs {
			.copyright {
				color: gray;
				font-size: 0.9rem;
				display: flex;
				justify-content: center;
			}
		}
	}
}
@include respond-to("extra-small") {
}
@include respond-to("small") {
}
@include respond-to("medium") {
	#rodape {
		.rodape-wrapper {
			flex-direction: row;
			align-items: flex-start;
			&__navs {
				padding: 1rem;
				order: 1;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				width: 50%;
				.copyright{
					justify-content: start;
				}
			}
			&__newsletter {
				width: 50%;
				order: 2;
			}

			.menu-compania {
			}
			.menu-redes-sociais {
			}
			.newsletter {
			}
			.copyright {
				padding: 0 0.5rem;
			}
		}
	}
}
@include respond-to("large") {
	#rodape {
		.rodape-wrapper {
			flex-direction: row;
			align-items: flex-start;
			&__navs {
				padding: 1rem;
				order: 1;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				width: 50%;
				.copyright{
					justify-content: start;
				}
			}
			&__newsletter {
				width: 50%;
				order: 2;
			}

			.menu-compania {
			}
			.menu-redes-sociais {
			}
			.newsletter {
			}
			.copyright {
				padding: 0 0.5rem;
			}
		}
	}
}
@include respond-to('extra-large') {
	#rodape {
		.rodape-wrapper {
			flex-direction: row;
			align-items: flex-start;
			&__navs {
				padding: 1rem;
				order: 1;
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				width: 50%;
				.copyright{
					justify-content: start;
				}
			}
			&__newsletter {
				width: 50%;
				order: 2;
			}

			.copyright {
				padding: 0 0.5rem;
			}
		}
	}
}
</style>