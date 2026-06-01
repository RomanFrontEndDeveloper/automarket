import { useState } from 'react';
import Toast from '../components/Toast';

const RegisterPage = () => {
	const [name, setName] = useState('');

	const [email, setEmail] = useState('');

	const [password, setPassword] = useState('');

	const [confirmPassword, setConfirmPassword] = useState('');

	const [toast, setToast] = useState('');

	const showToast = (message: string) => {
		setToast(message);

		setTimeout(() => {
			setToast('');
		}, 3000);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim()) {
			showToast('Name is required');
			return;
		}

		if (!email.trim()) {
			showToast('Email is required');
			return;
		}

		const emailRegex = /\S+@\S+\.\S+/;

		if (!emailRegex.test(email)) {
			showToast('Invalid email');
			return;
		}

		if (!password.trim()) {
			showToast('Password is required');
			return;
		}

		if (password.length < 6) {
			showToast('Password must be at least 6 characters');
			return;
		}

		if (!confirmPassword.trim()) {
			showToast('Confirm password is required');
			return;
		}

		if (password !== confirmPassword) {
			showToast('Passwords do not match');
			return;
		}

		console.log({
			name,
			email,
			password,
			confirmPassword,
		});

		showToast('Registration successful');
	};
	return (
		<section>
			<h1>Register</h1>

			{toast && <Toast message={toast} />}

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
