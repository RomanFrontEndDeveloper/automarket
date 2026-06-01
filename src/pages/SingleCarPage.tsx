import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';

const SingleCarPage = () => {
	const { id } = useParams();

	const car = cars.find((car) => car.id === Number(id)); // Бо useParams() повертає string

	return (
		<div className='single-car'>
			{!car ? (
				<h1>Car not found</h1>
			) : (
				<>
					<h1>{car.title}</h1>

					<img src={car.image} alt={car.title} />

					<p>ID: {car.id}</p>

					<p>Brand: {car.brand}</p>

					<p>Model: {car.model}</p>

					<p>Year: {car.year}</p>

					<p>Price: ${car.price}</p>

					<p>City: {car.city}</p>
					<p>City: {car.description}</p>
					<p>Latitude: {car?.lat}</p>
					<p>Longitude: {car?.lng}</p>

					<p>Favorite: {car.isFavorite ? '❤️ Yes' : '🤍 No'}</p>
					<Link to={`/cars/edit/${car?.id}`}>
						<button className='edit-btn'>Edit Car</button>
					</Link>
				</>
			)}
		</div>
	);
};

export default SingleCarPage;
