import { useState } from 'react';

const RegisterPage = () => {
	const [name, setName] = useState('');

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log({
			name,
			email,
			password,
			confirmPassword,
		});
	};

	return (
		<section>
			<h1>Register</h1>

			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

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

				<input
					type='password'
					placeholder='Confirm Password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>

				<button type='submit'>Register</button>
			</form>
		</section>
	);
};

export default RegisterPage;
