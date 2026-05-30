import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul className='nav-list'>
				<li>
					<Link to='/'>Home</Link>
				</li>

				<li>
					<Link to='/cars'>Cars</Link>
				</li>
				<Link to='/create-car'>Create Car</Link>

				<li>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
				<li>
					<Link to='/profile'>Profile</Link>
				</li>

				<li>
					<Link to='/login'>Login</Link>
				</li>

				<li>
					<Link to='/register'>Register</Link>
				</li>

				<li>
					<Link to='/admin'>Admin</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
