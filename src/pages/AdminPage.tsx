import { cars } from '../data/cars';

const users = [
	{
		id: 1,
		name: 'Roman',
		status: 'Active',
	},
	{
		id: 2,
		name: 'John',
		status: 'Banned',
	},
	{
		id: 3,
		name: 'Kate',
		status: 'Active',
	},
];

const AdminPage = () => {
	return (
		<section className='admin-page'>
			<h1>Admin Panel</h1>

			<h2>Users</h2>

			<div className='admin-list'>
				{users.map((user) => (
					<div key={user.id} className='admin-card'>
						<p>{user.name}</p>

						<p>{user.status}</p>

						<button>Ban</button>
					</div>
				))}
			</div>

			<h2>Cars</h2>

			<div className='admin-list'>
				{cars.map((car) => (
					<div key={car.id} className='admin-card'>
						<p>{car.title}</p>

						<button>Delete</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default AdminPage;
