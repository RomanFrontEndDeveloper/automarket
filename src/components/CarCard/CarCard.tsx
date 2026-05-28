import { Link } from 'react-router-dom';
import type { Car } from '../../types/car.types';

type Props = {
	car: Car;
};

/// маленька картка
const CarCard = ({ car }: Props) => {
	return (
		<Link to={`/cars/${car.id}`} className='car-link'>
			<div className='car-card'>
				<img src={car.image} alt={car.title} className='car-image' />

				<div className='car-content'>
					<div className='car-header'>
						<h2>{car.title}</h2>

						<button className='favorite-btn'>
							{car.isFavorite ? '❤️' : '♡'}
						</button>
					</div>

					<p>{car.year}</p>

					<p>${car.price}</p>

					<p>{car.city}</p>
				</div>
			</div>
		</Link>
	);
};

export default CarCard;
