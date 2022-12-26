<div class="container">
	<h2 id="contact">Contact Me</h2>
	<form action="https://formsubmit.co/cmfredricksen@gmail.com" method="POST">
		<label for="name">Name:</label>
		<input type="text" name="name" required />
		<label for="email">Email:</label>
		<input type="email" name="email" required />
		<label for="phone">Phone:</label>
		<input type="text" name="phone" />
		<input type="hidden" name="_next" value="https://cfdevelopment.netlify.app/thanks" />
		<label for="message">Message:</label>
		<textarea name="message" id="message" cols="30" rows="10" />
		<input type="hidden" name="_subject" value="development" />
		<button type="submit">Send</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 80%;
	}

	h2 {
		color: var(--clr-white);
	}
	form {
		display: flex;
		flex-direction: column;
		border-radius: 2rem;
		margin: 1rem 0;
		background-color: var(--clr-dark);
		padding: 1rem;
	}

	label {
		color: var(--clr-white);
		margin: 0.5rem 0;
		font-family: var(--font-text);
	}
	input {
		padding: 0.5rem;
		border-radius: 0.25rem;
	}

	textarea {
		border-radius: 0.25rem;
		padding: 0.5rem;
	}

	button {
		width: 25%;
		margin: 1rem 0;
		padding: 0.25rem;
		font-family: var(--font-accent);
		font-size: 1.25rem;
		background-color: var(--clr-accent);
		border: 1px solid var(--clr-light);
		border-radius: 0.4rem;
		color: var(--clr-dark);
	}

	button:hover {
		color: var(--clr-white);
	}
</style>
