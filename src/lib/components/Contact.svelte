<div class="container">
	<h2>Contact Me</h2>
	<form action="https://formsubmit.co/cmfredricksen@gmail.com" method="POST">
		<label for="name">Name:</label>
		<input type="text" name="name" required />
		<label for="email">Email:</label>
		<input type="email" name="email" required />
		<!-- <input type="hidden" name="_next" value="https://gaylord-computing.netlify.app/thanks" /> -->
		<label for="message">Message:</label>
		<textarea name="message" id="message" cols="30" rows="10" />
		<input type="hidden" name="_subject" value="development" />
		<!-- <input type="hidden" name="_captcha" value="false" /> -->
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
		/* gap: 1rem; */
		margin: 1rem 0;
		background-color: var(--clr-dark);
		padding: 1rem;
	}

	label {
		color: var(--clr-white);
		margin: 0;
		margin: 0.5rem 0;
	}
	input {
		padding: 0;
	}

	button {
		width: 25%;
		margin: 1rem 0;
	}
</style>
