<div class="container">
	<div class="plan">
		<div class="left">
			<h1>Planning</h1>
			<span class="material-symbols-outlined">view_quilt</span>
		</div>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quod rem ullam natus ratione
			enim maiores modi reiciendis. Voluptate neque, repellendus ipsum illum nulla veniam provident,
			accusamus nihil unde molestias dolorem magni atque. Neque quasi quibusdam fugiat eum laborum
			itaque aspernatur sunt culpa assumenda! Incidunt sapiente voluptatem animi consequatur ex
			cupiditate tempora eos dolorem, praesentium ducimus, sunt fugit. Modi asperiores, eveniet
			sunt, corrupti ipsa autem porro soluta iusto mollitia blanditiis sed dignissimos
			exercitationem temporibus ullam?
		</p>
	</div>
	<div class="design">
		<div class="left">
			<h1>Designing</h1>
			<span class="material-symbols-outlined">brush</span>
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias vitae eveniet quas. Ut,
			molestiae in voluptate error beatae a esse vitae. Omnis, eum corrupti repellendus aliquid
			excepturi nam quos quibusdam velit quae vitae dolorem beatae delectus inventore doloribus.
			Voluptatum tenetur praesentium inventore dolor? Maxime est beatae aliquam fugiat animi culpa,
			similique reprehenderit nulla numquam dolorum quidem explicabo, aut voluptates cupiditate
			dolore quisquam ratione? Officia laboriosam reprehenderit ipsum officiis nostrum obcaecati non
			saepe earum adipisci?
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding: 2rem 1rem;
		margin: 2rem 0;
		background-color: var(--clr-dark);
		gap: 2rem;
		border: 3px solid var(--clr-light);
		border-radius: 2rem;
	}
	h1 {
		color: var(--clr-light);
		text-shadow: 1px 1px 1px var(--clr-black);
	}

	p {
		color: var(--clr-white);
	}

	.left {
		display: flex;
		/* justify-content: space-between; */
		align-items: baseline;
	}

	.material-symbols-outlined {
		margin: 0 2rem;
		color: var(--clr-accent);
		font-size: 2rem;
		text-shadow: 1px 1px 1px var(--clr-black);
	}
</style>
