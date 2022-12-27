<script>
	import Nav from './Nav.svelte';
</script>

<header>
	<div class="title">
		<h1>CF Development</h1>
		<p>Custom Design built for Performance</p>
	</div>
	<Nav />
</header>

<style>
	header {
		background-color: var(--clr-dark);
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}
	.title {
		display: flex;
		align-items: baseline;
	}
	h1 {
		font-family: var(--font-accent);
		color: var(--clr-light);
	}
	p {
		font-family: var(--font-heading);
		color: var(--clr-accent);
		margin: 0 1rem;
	}

	@media screen and (max-width: 1000px) {
		header {
			flex-direction: column;
			padding: 0 0 2rem;
			align-items: center;
		}
		.title {
			flex-direction: column;
			align-items: center;
			margin: 1rem 0 2rem;
		}
		.title h1 {
			margin: 1rem 0;
		}
	}
</style>
