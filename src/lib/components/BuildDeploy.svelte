<div class="container">
	<div class="card">
		<div class="card-title">
			<h1>Build</h1>
			<div class="material-symbols-outlined">build</div>
		</div>
		<p>
			I have the know how to build your website using everything from platforms like WordPress to
			starting from scratch. Speedy, stable peformance is high priority as I plan and develop your
			site's infrastructure.
		</p>
	</div>
	<div class="card">
		<div class="card-title">
			<h1>Deploy</h1>
			<div class="material-symbols-outlined">cloud</div>
		</div>
		<p>
			In order to go live on the web you will need a domain name, hosting and SSL(Https). You may
			also need access in order to update data. I will set these up for you based on the
			requirements of your business.
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 70%;
		gap: 2rem;
		justify-content: space-around;
		margin: 0 auto;
		border-radius: 2rem;
	}

	.card {
		background-color: var(--clr-dark);
		width: 50%;
		padding: 2rem;
		border-radius: 2rem;
		border: 2px solid var(--clr-medium);
		border-bottom: 15px solid var(--clr-accent);
	}

	.card-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
		background-color: var(--clr-black);
		padding: 1rem;
		border-radius: 0.5rem;
	}

	h1 {
		color: var(--clr-light);
	}

	p {
		line-height: 1.5;
	}

	.material-symbols-outlined {
		font-size: 4rem;
	}

	@media screen and (max-width: 1000px) {
		.container {
			width: 100%;
			gap: 3px solid var(--clr-light);
			border-bottom: 3px solid var(--clr-accent);
			border-radius: 0;
			margin: 0;
		}
		.card {
			width: 100%;
			border-radius: 0;
			border: none;
		}
	}

	@media screen and (max-width: 700px) {
		.container {
			flex-direction: column;
			width: 100%;
			gap: 0;
		}

		.card {
			border-radius: 0;
			width: 100%;
			/* border-bottom: 1px solid var(--clr-accent); */
		}
	}
</style>
