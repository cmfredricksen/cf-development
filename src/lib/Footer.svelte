<script>
	import Contact from './components/Contact.svelte';
</script>

<footer>
	<p>&copy; 2023 cf development &middot; All Rights Reserved</p>
	<Contact />
</footer>

<style>
	footer {
		display: grid;
		grid-template-columns: 1fr 1fr;
		background-color: var(--clr-black);
		padding: 2rem 1rem 1rem;
	}
	p {
		color: var(--clr-white);
		width: 100%;
		text-align: center;
		padding: 5rem 0;
	}

	@media screen and (max-width: 1000px) {
		footer {
			display: flex;
			flex-direction: column-reverse;
			margin: 0 auto;
		}
	}

	@media screen and (max-width: 700px) {
		footer {
			display: flex;
			flex-direction: column-reverse;
			padding: 2rem 1rem;
		}

		p {
			font-size: 1rem;
			padding: 1rem 0;
		}
	}
</style>
