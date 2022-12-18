<script>
	import '../global.css';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<svelte:head>
	<title>CF DEV</title>
</svelte:head>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<Header />
<div class="wrapper">
	<Hero />
	<slot />
</div>

<style>
	.wrapper {
		width: 70%;
		margin: 0 auto;
		padding: 1rem;
	}
</style>
