import { useState } from 'react';

const LoginPage = () => {
	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [error, setError] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			setError('All fields are required');

			return;
		}

		if (!email.includes('@')) {
			setError('Invalid email');

			return;
		}

		if (password.length < 6) {
			setError('Password must be at least 6 characters');

			return;
		}

		setError('');

		console.log({
			email,
			password,
		});
	};

	return (
		<section>
			<h1>Login</h1>

			{error && <p className='error'>{error}</p>}

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
