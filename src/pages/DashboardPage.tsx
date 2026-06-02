import { cars } from '../data/cars';

const DashboardPage = () => {
	const favoriteCars = cars.filter((car) => car.isFavorite);

	return (
		<section className='dashboard-page'>
			<h1>Dashboard</h1>

			<div className='dashboard-grid'>
				<div className='dashboard-card'>
					<h2>My Cars</h2>

					<p>{cars.length}</p>
				</div>

				<div className='dashboard-card'>
					<h2>Favorites</h2>

					<p>{favoriteCars.length}</p>
				</div>

				<div className='dashboard-card'>
					<h2>Profile</h2>

					<p>Roman</p>

					<p>roman@gmail.com</p>
				</div>
			</div>
		</section>
	);
};

export default DashboardPage;
