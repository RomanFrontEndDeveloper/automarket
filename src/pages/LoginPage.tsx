import { useState } from 'react';

const LoginPage = () => {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log(email);

		console.log(password);
	};

	return (
		<section>
			<h1>Login</h1>

			<form onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button type='submit'>Login</button>
			</form>
		</section>
	);
};

export default LoginPage;
