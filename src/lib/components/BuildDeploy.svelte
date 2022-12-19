<div class="container">
	<div class="card">
		<div class="card-title">
			<h1>Build</h1>
			<div class="material-symbols-outlined">build</div>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id similique incidunt ex
			aperiam eligendi ab eum nostrum magnam maiores possimus esse corporis accusantium non tempore
			cupiditate odio temporibus culpa deleniti, error sunt dolor modi veniam? Molestiae laboriosam
			in odit temporibus velit cumque alias eaque nesciunt fugiat, illo molestias officiis.
		</p>
	</div>
	<div class="card">
		<div class="card-title">
			<h1>Deploy</h1>
			<div class="material-symbols-outlined">cloud</div>
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt at officiis vitae soluta
			facilis deserunt magnam fugiat itaque! Natus delectus fuga, soluta nobis eaque ipsum porro,
			labore in, quo animi libero adipisci reiciendis provident aliquam. Sint soluta harum ab
			adipisci explicabo necessitatibus error voluptatibus hic, magni qui! Doloribus, possimus iste.
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

	p {
		line-height: 1.5;
	}

	.material-symbols-outlined {
		font-size: 4rem;
	}
</style>
