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

				<li>
					<Link to='/login'>Login</Link>
				</li>

				<li>
					<Link to='/profile'>Profile</Link>
				</li>
				<li>
					<Link to='/dashboard'>Dashboard</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
