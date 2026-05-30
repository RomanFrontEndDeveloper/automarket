import { Link } from 'react-router-dom';
import type { Car } from '../../types/car.types';

type Props = {
	car: Car;

	onToggleFavorite: (id: number) => void;
};

/// маленька картка
const CarCard = ({ car, onToggleFavorite }: Props) => {
	return (
		<Link to={`/cars/${car.id}`} className='car-link'>
			<div className='car-card'>
				<img src={car.image} alt={car.title} className='car-image' />

				<div className='car-content'>
					<div className='car-header'>
						<h2>{car.title}</h2>

						<button
							className='favorite-btn'
							onClick={(e) => {
								e.preventDefault();

								onToggleFavorite(car.id);
							}}
						>
							{car.isFavorite ? '❤️' : '🤍'}
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
