<template>
	<div id="newsletter">
		<div class="newsletter-wrapper">
			<div class="newsletter-wrapper__text">
				<span class="newsletter-wrapper__text--newsletter"
					>Sign up for our Newsletter</span
				>
				<span class="newsletter-wrapper__text--descontos"
					>Sign up for our newsletter & get exclusive discounts!</span
				>
			</div>
			<div class="newsletter-form__form">
				<input type="text" placeholder="Enter your email" />
				<button>SUBMIT</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Newsletter"
};
</script>

<style lang="scss">
@import "../assets/scss/grid.scss";
#newsletter {
	.newsletter-wrapper {
    display: flex;
    flex-direction: column;
		.newsletter-wrapper__text {
			display: flex;
			flex-direction: column;
      padding: 1rem;
      
			&--newsletter {
        font-style: italic;
        font-family: "Charm", cursive;
        font-size: 0.6rem;
			}
			&--descontos {
        font-size: 0.6rem;
        margin-top: 1rem;
			}
		}
		.newsletter-form__form {
      display: flex;
      justify-content: space-around;
      padding: 0 1rem 1rem 1rem;
      input{
        border: solid 1px rgb(0, 0, 0);
        border-radius: 0.2rem;
        padding: 0.3rem;
        font-size: 0.6rem;
        width: 65%;
      }
      button {
        background-color: rgb(255, 0, 0);
        border: none;
        border-radius: 0.2rem;
        color: rgb(255, 255, 255);
        padding: 0.3rem 1rem;
      }
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