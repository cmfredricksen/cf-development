<div class="hero">
	<div class="left">
		<h1>
			Hello, my name is Christine and I have over 15 years of graphic design and web development
			experience...
		</h1>
	</div>
	<div class="right">
		<div class="icon-box">
			<span class="material-symbols-outlined"> wb_incandescent </span>
			<span class="material-symbols-outlined"> wb_incandescent </span>
			<span class="material-symbols-outlined"> wb_incandescent </span>
		</div>
		<div class="text-box">
			<p>I can take care of your website so you don't have to!</p>
			<ul>
				<li>Planning</li>
				<li>Designing</li>
				<li>Building</li>
				<li>Deploying</li>
				<li>Maintaining</li>
				<li>& more!</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 2rem;
		background-color: var(--clr-black);
		height: 75vh;
		border-bottom: 30px solid var(--clr-accent);
		border-radius: 15px;
		border-bottom-right-radius: 100px;
		padding: 1rem 1rem 2rem;
		margin: 1rem auto 3rem;
		width: 70%;
	}

	.hero .left h1 {
		color: var(--clr-light);
		width: 100%;
		margin: 1rem;
		padding: 0.5rem;
		padding-right: 2rem;
	}

	.right {
		width: 100%;
		display: grid;
		gap: 1rem;
		grid-template-rows: 1fr 2fr;
		padding: 1rem 0;
	}

	.right .icon-box {
		text-align: center;
	}

	.right .text-box p {
		color: var(--clr-light);
		font-weight: 700;
		line-height: 1.5;
		width: 70%;
		margin: 0 auto;
	}

	.right .text-box ul {
		margin: 1rem auto;
		padding: 1rem 0;
		width: 70%;
		display: flex;
		flex-wrap: wrap;
	}

	.right .text-box li {
		margin: 0.5rem 1rem;
		list-style: none;
		font-family: var(--font-heading);
		text-align: center;
		list-style-type: '\1f538';
	}

	.material-symbols-outlined {
		font-size: 4rem;
		color: var(--clr-accent);
		padding: 1rem;
		justify-self: center;
	}
</style>
