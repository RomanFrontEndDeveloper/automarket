import { cars } from '../data/cars';
import CarCard from '../components/CarCard/CarCard';

const HomePage = () => {
	return (
		<section>
			<h1 className='page-title'>Find Your Perfect Car</h1>

			<div className='cars-grid'>
				{cars.map((car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</section>
	);
};

export default HomePage;
