import { cars } from '../data/cars';

const HomePage = () => {
	return (
		<section>
			<h1 className='page-title'>Cars List</h1>

			<div className='cars-grid'>
				{cars.map((car) => (
					<div className='car-card' key={car.id}>
						<h2>{car.title}</h2>

						<p>{car.year}</p>

						<p>${car.price}</p>

						<p>{car.city}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomePage;
