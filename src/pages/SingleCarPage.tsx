import { Link, useParams } from 'react-router-dom';

import { cars } from '../data/cars';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import type { LatLngTuple } from 'leaflet';

const SingleCarPage = () => {
	const { id } = useParams();

	const car = cars.find((car) => car.id === Number(id));

	if (!car) {
		return <h1>Car not found</h1>;
	}

	const position: LatLngTuple = [car.lat, car.lng];

	return (
		<div className='single-car'>
			<h1>{car.title}</h1>

			<img src={car.image} alt={car.title} />

			<p>Brand: {car.brand}</p>

			<p>Model: {car.model}</p>

			<p>Year: {car.year}</p>

			<p>Price: ${car.price}</p>

			<p>City: {car.city}</p>

			<p>Description: {car.description}</p>

			<p>Favorite: {car.isFavorite ? '❤️ Yes' : '🤍 No'}</p>

			<Link to={`/cars/edit/${car.id}`}>
				<button className='edit-btn'>Edit Car</button>
			</Link>

			<div className='single-car-map'>
				<MapContainer
					center={position}
					zoom={12}
					style={{
						height: '100%',
						width: '100%',
					}}
				>
					<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

					<Marker position={position}>
						<Popup>
							<img
								src={car.image}
								alt={car.title}
								className='popup-image'
							/>

							<h3>{car.title}</h3>

							<p>{car.city}</p>

							<p>${car.price}</p>
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default SingleCarPage;
