import { useParams } from 'react-router-dom';
import { cars } from '../data/cars';

/// велика картка
const SingleCarPage = () => {
	const { id } = useParams();

	const car = cars.find((car) => car.id === Number(id));

	return (
		<div>
			<h1>{car?.title}</h1>

			<p>Year: {car?.year}</p>
			<p>id: {car?.id}</p>

			<p>Price: ${car?.price}</p>

			<p>City: {car?.city}</p>
		</div>
	);
};

export default SingleCarPage;
