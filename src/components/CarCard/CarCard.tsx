import { Link } from 'react-router-dom';
import type { Car } from '../../types/car.types';

type Props = {
	car: Car;
};
/// маленька
const CarCard = ({ car }: Props) => {
	return (
		<Link to={`/cars/${car.id}`}>
			<div className='car-card'>
				<h2>{car.title}</h2>

				<p>{car.year}</p>

				<p>${car.price}</p>

				<p>{car.city}</p>
				<p>{car.id}</p>

				<button className='favorite-btn'>
					{car.isFavorite ? '❤️' : '🤍'}
				</button>
			</div>
		</Link>
	);
};

export default CarCard;
