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
	}
	p {
		font-family: var(--font-heading);
		color: var(--clr-accent);
		margin: 0 1rem;
	}
</style>
