<script>
	import '../global.css';
	import Header from '$lib/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PlanDesign from '$lib/components/PlanDesign.svelte';
	import BuildDeploy from '$lib/components/BuildDeploy.svelte';
	import MaintainMore from '$lib/components/MaintainMore.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>CF Development</title>
</svelte:head>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<Header />
<slot />
<div class="wrapper">
	<Hero />
	<PlanDesign />
	<BuildDeploy />
	<MaintainMore />
	<Footer />
</div>

<style>
	.wrapper {
		margin: 0 auto;
		padding: 1rem;
		max-width: 1200px;
	}

	@media screen and (max-width: 1000px) {
		.wrapper {
			padding: 0;
		}
	}
	@media screen and (max-width: 800px) {
		.wrapper {
			width: 100vw;
			padding: 0;
		}
	}
</style>
