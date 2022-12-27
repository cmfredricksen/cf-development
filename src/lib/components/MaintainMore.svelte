<div class="container">
	<div class="title">
		<h1>Maintenance & More...</h1>
		<span class="material-symbols-outlined">monitoring</span>
	</div>
	<p>
		Once your website is online regular monitoring is valuable. I will periodically assess your
		site's performance and make any updates that are needed. I will also provide analytic data and
		work on search engine optimization so your site's visibility continues to improve.
	</p>
	<div class="card-box">
		<li>Special Event Pages</li>
		<li>Logo Design</li>
		<li>Search Engine Optimization</li>
		<li>Updates</li>
		<li>Website Growth</li>
		<li>Serverless Cloud Computing</li>
		<li>Top Speed</li>
		<li>& Much More!</li>
	</div>
</div>

<style>
	.container {
		background-color: var(--clr-black);
		margin: 2rem auto;
		padding: 2rem;
		border-bottom: 30px solid var(--clr-accent);
		border-radius: 15px;
		border-bottom-right-radius: 100px;
	}

	.title {
		display: flex;
		align-items: center;
	}
	h1 {
		color: var(--clr-light);
	}

	p {
		padding: 1rem 0;
		line-height: 1.5;
	}

	.card-box {
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		padding: 2rem;
	}

	li {
		margin: 0 1rem;
		padding: 1rem;
	}

	.material-symbols-outlined {
		font-size: 4rem;
		margin: 0 2rem;
	}

	@media screen and (max-width: 1000px) {
		.container {
			border-radius: 0;
			margin: 0;
			border-bottom: 3px solid var(--clr-accent);
		}
		.title {
			justify-content: space-between;
		}

		.card-box {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0;
			margin: 0;
		}
	}

	@media screen and (max-width: 700px) {
		.container {
			margin: 0;
			border-radius: 0;
		}

		.title {
			justify-content: space-between;
			align-items: center;
		}

		.material-symbols-outlined {
			font-size: 2rem;
			margin: 0;
		}
		.card-box {
			padding: 0;
			display: flex;
		}
		li {
			list-style: none;
			background-color: var(--clr-medium);
			margin: 0.5rem;
			border-left: 2px solid var(--clr-accent);
			text-shadow: 1px 1px var(--clr-black);
			font-size: 1.5rem;
		}
	}
</style>
