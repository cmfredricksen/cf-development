<div class="hero">
	<div class="left">
		<h1>
			Hello, my name is Christine and I have over 15 years of graphic design and web development
			experience...
		</h1>
		<p>
			You have plenty to do, let me take care of your website. I will plan, design, build, deploy
			and maintain your website so you can focus on running your primary business. Each website is
			custom built with attention to detail and an eye on quality. I will handle the details so you
			don't have to.
		</p>
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
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		background-color: var(--clr-black);
		border-bottom: 30px solid var(--clr-accent);
		border-radius: 15px;
		border-bottom-right-radius: 100px;
		padding: 1rem;
		margin: 1rem auto;
		width: 70%;
	}

	.left {
		margin: 1rem;
		padding: 0.5rem 2rem;
		width: 100%;
		border-right: 2px solid var(--clr-light);
	}

	.left h1 {
		color: var(--clr-light);
	}

	.right {
		/* margin: 1rem; */
		padding: 0.5rem;
		width: 100%;
		display: grid;
		gap: 1rem;
		grid-template-rows: 1fr 2fr;
		border-left: 2px solid var(--clr-light);
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
		text-align: center;
	}

	.right .text-box ul {
		margin: 1rem auto;
		padding: 1rem 0;
		width: 70%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.right .text-box li {
		margin: 0.5rem 1rem;
		text-align: center;
	}

	.material-symbols-outlined {
		font-size: 6rem;
		justify-self: center;
	}
</style>
